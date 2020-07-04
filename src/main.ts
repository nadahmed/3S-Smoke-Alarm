import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as Store from 'electron-store';
import * as eu from 'electron-util';
import * as mqtt from 'mqtt';
import * as path from 'path';
import { ButtonStatus, JDSD51 } from './decoder/jdsd51.decoder';
import { IConfig, MqttMessage, MqttEvent, IConfigV2 } from './utils/config.type';
import { defaultConfigV2 } from './utils/default_config';
import { MQTTEventManager } from './utils/mqttEvent';
import { MyPlayer } from './utils/playAlert';
import { SettingWindow } from './Views/settingWindow';
import { SystemTray } from './Views/tray.view';
import { ViewerWindow } from './Views/viewerWindow';
import { JDSD51DecodeError } from './decoder/jdsd51.error';


const store = new Store();
const mqttevent = new MQTTEventManager();

ipcMain.on('mqtt-event-initial', async (event, _) => {
    const objs = await mqttevent.all();
    objs.forEach( (obj) => {
        event.sender.send('mqtt-event', obj);
    });
});

ipcMain.on('mqtt-event-removeAll', async (event, _) => {
    const n = await mqttevent.removeAll();
    dialog.showMessageBox(BrowserWindow.fromId(event.frameId) , {title: 'Event Message Removed', message: n + ' Records were removed!'});
});

ipcMain.on('save-configuration', ( _, form: IConfigV2) => {
    store.set('configV2', form);
});

ipcMain.on('get-default-configuration',  (event) => {
    event.returnValue = defaultConfigV2;
});

ipcMain.on('get-server-settings', (event) => {
    const conf: IConfigV2 = store.get('configV2', defaultConfigV2);
    event.sender.send('server-settings', conf);
});


const config: IConfig = store.get('config', null);
let configV2: IConfigV2 = store.get('configV2', null);

if (!config && !configV2) {
    configV2 = defaultConfigV2;
} else if (!!config && !configV2 ) {
    configV2 = defaultConfigV2;
    configV2.meta.applicationId = config.topic.application_id;
    configV2.server.mqtt.host = config.server.host;
    configV2.server.mqtt.port = config.server.port;
    configV2.server.mqtt.username = config.server.username;
    configV2.server.mqtt.password = config.server.password;
    configV2.server.restApi.host = config.server.host;
    store.set('configV2', configV2);
}

let topic = '';
topic = 'application/' + configV2.meta.applicationId + '/device/+/rx';

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    dialog.showErrorBox('Multiple instance detected', 'Another instance of this app is already running.');
    app.quit();
  } 

app.commandLine.appendSwitch('ignore-certificate-errors', 'true');



app.on('ready', async () => {

    // const splashWindow = new SplashWindow();
    // splashWindow.show();

    const audioFile = eu.fixPathForAsarUnpack(path.resolve(__dirname, '../player/alert.wav'));

    const player = new MyPlayer(audioFile);


    const client = mqtt.connect(null, {
        username: configV2.server.mqtt.username,
        password: configV2.server.mqtt.password,
        servers: [{
            host: configV2.server.mqtt.host,
            port: configV2.server.mqtt.port,
            protocol: 'mqtt',
        }],

    });

    client.on('connect', () => {
        if (client.connected) {
            client.subscribe(topic);
            sTray.setMenuStateToConnected();
        }
    });

    client.on('close', () => {
        sTray.setMenuStateToDisconnected();
    });

    client.on('error', () => {
        sTray.setMenuStateToError();
    });

    client.on('message', async (_, message) => {
        const obj: MqttMessage = JSON.parse(message.toString());

        console.log('[MQTT PARSED DATA]: ', obj.data);

        let alarm: JDSD51 = null;
        try {
            alarm = new JDSD51(obj.data);
            if (alarm.status.buttonStatus === ButtonStatus.Test) {
                player.kill();
                player.play();
            }
            
            if (alarm.status.isSmokeDetected && (alarm.status.buttonStatus === ButtonStatus.Normal)) {
                player.playLoop();
            }

            if (alarm.status.isSmokeDetected && (alarm.status.buttonStatus === ButtonStatus.Silenced)) {
                player.kill();
            }

            if (!alarm.status.isSmokeDetected && (alarm.status.buttonStatus === ButtonStatus.Normal)) {
                player.kill();
            }
            

        } catch (e) {
            if (e instanceof JDSD51DecodeError) {
                console.log('[JDSD51 Parse ERROR] ', e.name);
                alarm = null;
            } else { console.error(e); }

        }

        const objEvent: MqttEvent = {
            time: Date.now(),
            ...obj,
        };
        mqttevent.insertData(objEvent);


        if (!viewerWindow.isClosed()) {
            viewerWindow.getBrowserWindow().webContents.send('mqtt-message', obj);
            viewerWindow.getBrowserWindow().webContents.send('mqtt-event', objEvent);
        }

    });

    const sTray = new SystemTray();
    const viewerWindow = new ViewerWindow();
    const settingsWindow = new SettingWindow();
    

    sTray.onClickOpenViewer(() => {
        viewerWindow.show();
    });

    sTray.onClickPlayAlarm(async () => {
        player.playLoop();
    });

    sTray.onClickStopAlarm( async () => {
        player.kill();
        if (!viewerWindow.isClosed()) {
            viewerWindow.getBrowserWindow().webContents.send('stop-alarms');
        }
    });

    sTray.onClickConnect(() => {
        client.reconnect();
    });

    sTray.onClickDisconnect(() => {
        client.unsubscribe(topic);
        client.end();
    });

    sTray.onClickSettings( () => {
        settingsWindow.show();
    });
});
