import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as Store from 'electron-store';
import * as eu from 'electron-util';
import * as mqtt from 'mqtt';
import * as path from 'path';
import { ButtonStatus, JDSD51 } from './decoder/jdsd51.decoder';
import { IConfig, MqttMessage, MqttEvent } from './utils/config.type';
import { defaultConfig } from './utils/default_config';
import { MQTTEventManager } from './utils/mqttEvent';
import { MyPlayer } from './utils/playAlert';
import { SettingWindow } from './Views/settingWindow';
import { SystemTray } from './Views/tray.view';
import { ViewerWindow } from './Views/viewerWindow';


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

ipcMain.on('save-configuration', ( _, form: IConfig) => {
    store.set('config', form);
});

ipcMain.on('get-default-configuration',  (event) => {
    event.returnValue = defaultConfig;
});

ipcMain.on('get-server-settings', (event) => {
    const conf: IConfig = store.get('config', defaultConfig);
    event.sender.send('server-settings', conf);
});

let config: IConfig = store.get('config', defaultConfig);

let topic = '';
try {
    topic = 'application/' + config.meta.applicationId + '/device/+/rx';
} catch {
    config = defaultConfig;
    store.set('config', config);
    topic = 'application/' + config.meta.applicationId + '/device/+/rx';
}

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    dialog.showErrorBox('Multiple instance detected', 'Another instance of this app is already running.');
    app.quit();
  } 

app.commandLine.appendSwitch('ignore-certificate-errors', 'true');



app.on('ready', () => {

    const audioFile = eu.fixPathForAsarUnpack(path.join(__dirname, '../player/alert.wav'));

    console.log(audioFile);
    const player = new MyPlayer(audioFile);

    const client = mqtt.connect(null, {
        username: config.server.mqtt.username,
        password: config.server.mqtt.password,
        servers: [{
            host: config.server.mqtt.host,
            port: config.server.mqtt.port,
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
///////////////////////////////////////////////
        const count = await mqttevent.count();
        const objEvent: MqttEvent = {
            _id: count,
            time: Date.now(),
            ...obj,
        };
        mqttevent.insertData(objEvent);
//////////////////////////////////////////////////
        if (!viewerWindow.isClosed()) {
            viewerWindow.getBrowserWindow().webContents.send('mqtt-message', obj);
            viewerWindow.getBrowserWindow().webContents.send('mqtt-event', objEvent);
        }

        const alarm = new JDSD51(obj.data);
        console.log('[MQTT PARSED DATA]: ', obj.data);
        if (alarm.status.buttonStatus === ButtonStatus.Test) {
            player.kill();
            player.play();
        }
        
        if (alarm.status.isSmokeDetected && (alarm.status.buttonStatus === ButtonStatus.Silenced)) {
            player.kill();
        }
        
        if (alarm.status.isSmokeDetected) {
            player.playLoop();
        }

        // switch (obj.data) {

        //     case "AgAB":
        //         player.kill();
        //         await player.play();
        //         break;

        //     case "AgQA":
        //         player.kill();
        //         await player.playLoop();
        //         break;

        //     case "AgQC":
        //         player.kill();
        //         break;

        //     // case "AgAA":
        //     //     player.kill();
        //     //     await player.play();
        //     //     break;
        //     default:
        //         break;
        // }
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
