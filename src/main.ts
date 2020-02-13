import { app, Menu, Tray } from "electron";
import nativeImage = require("electron");
import * as fs from "fs";
import * as mqtt from "mqtt";
import * as path from "path";
import { IConfig } from "./mytypes";
import { MyPlayer } from "./playAlert";
import { SettingWindow } from "./settingWindow";


let tray: Tray = null;
let client: mqtt.Client = null;

const player = new MyPlayer();

const ns: ({settingWindow: SettingWindow}) = {settingWindow: null};

player.file = path.join(__dirname, "../assets/alert.wav");
const config: IConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "../assets/config.json")).toString());
const topic = "application/" + config.topic.application_id + "/device/+/rx";

let active = nativeImage.nativeImage.createFromPath(path.join(__dirname, "../assets/active.png"));
active = active.resize({ height: 8 });

let inactive = nativeImage.nativeImage.createFromPath(path.join(__dirname, "../assets/inactive.png"));
inactive = inactive.resize({ height: 8 });





// win.on("closed", () => {

// });


// ipcMain.on("form-submission", ( _, form: IConfig) => {
//     console.log("this is the firstname from the form ->", form);
// });


app.on("ready", () => {

    ns.settingWindow = new SettingWindow();
    // ns.settingWindow.show();
    const contextMenu = Menu.buildFromTemplate([
        { label: "Offline", enabled: false, icon: inactive },
        { label: "Online", enabled: false, icon: active, visible: false },
        { type: "separator" },
        {
            label: "Connect", click: () => {
                client.reconnect();
            },
        },
        {
            label: "Disconnect", click: () => {
                client.unsubscribe(topic);
                client.end();
            }, visible: false,
        },
        {
            label: "Play Alarm", click: async () => {
                await player.playLoop();
            },
        },
        {
            label: "Stop Alarm", click: () => {
                player.kill();
            },
        },
        {
            label: "Settings", click: () => {
                
         
                
                try {
                    ns.settingWindow.close();
                // tslint:disable-next-line: no-empty
                } catch (e) { }
                ns.settingWindow = new SettingWindow();
                ns.settingWindow.show();
            },
        },
        { label: "Exit", click: () => { tray.destroy(); app.quit(); } },
    ]);







    tray = new Tray(path.join(__dirname, "../assets/alarm-red.png"));

    tray.setToolTip("MQTT Alarm App");

    tray.setContextMenu(contextMenu);
    tray.on("click", () => {
        tray.popUpContextMenu(contextMenu);
    });

    client = mqtt.connect(null, {
        username: config.server.username,
        password: config.server.password,
        servers: [{
            host: config.server.host,
            port: config.server.port,
            protocol: "mqtt",
        }],

    });


    client.on("connect", () => {

        if (client.connected) {
            client.subscribe(topic);
            contextMenu.items[0].visible = false;
            contextMenu.items[1].visible = true;
            contextMenu.items[3].visible = false;
            contextMenu.items[4].visible = true;
            tray.setImage(path.join(__dirname, "../assets/alarm-green.png"));
        }

    });

    client.on("close", () => {

        contextMenu.items[0].visible = true;
        contextMenu.items[1].visible = false;
        contextMenu.items[3].visible = true;
        contextMenu.items[4].visible = false;
        tray.setImage(path.join(__dirname, "../assets/alarm-red.png"));
    });


    client.on("error", () => {
        tray.setImage(path.join(__dirname, "../assets/warning.png"));
    });
    client.on("message", async (_, message) => {
        const obj = JSON.parse(message.toString());
        // console.log('[MQTT PARSED DATA]: ', obj.data);
        switch (obj.data) {

            case "AgAB":
                player.kill();
                await player.play();
                break;

            case "AgQA":
                player.kill();
                await player.playLoop();
                break;

            case "AgQC":
                player.kill();
                break;

            // case "AgAA":
            //     player.kill();
            //     await player.play();
            //     break;
        }
    });
});
