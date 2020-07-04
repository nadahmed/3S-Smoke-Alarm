import { app, Menu, Tray } from 'electron';
import nativeImage = require('electron');
import * as path from 'path';

export class SystemTray {

    
    private active = nativeImage.nativeImage.createFromPath(
        path.join(__dirname, '../../assets/active.png'))
        .resize({ height: 8 });

    private inactive = nativeImage.nativeImage.createFromPath(
        path.join(__dirname, '../../assets/inactive.png'))
        .resize({ height: 8 });

    private tray: Tray = null;

    private disconnectCB: () => void = null;
    private connectCB: () => void = null;
    private openViewerCB: () => void = null;
    private playAlarmCB: () => void = null;
    private stopAlarmCB: () => void = null;
    private settingsCB: () => void = null;

    private contextMenu = Menu.buildFromTemplate([
        { label: 'Offline', enabled: false, icon: this.inactive },
        { label: 'Online', enabled: false, icon: this.active, visible: false },
        { type: 'separator' },
        {
            label: 'Open Viewer', click: async () => {
                this.openViewerCB();
            },
        },
        {
            label: 'Play Alarm', click: async () => {
                this.playAlarmCB();
            },
        },
        {
            label: 'Stop Alarm', click: async () => {
                this.stopAlarmCB();
            },
        },
        {
            label: 'Connect', click: () => {
                this.connectCB();
                
            },
        },
        {
            label: 'Disconnect', click: () => {
                this.disconnectCB();
            }, visible: false,
        },
        {
            label: 'Settings', click: async () => {
                this.settingsCB();
            },
        },
        { label: 'Exit', click: () => { this.tray.destroy(); app.quit(); } },
    ]);

    constructor() {
        this.tray = new Tray(path.join(__dirname, '../../assets/alarm-red.png'));
        this.tray.setTitle('3S Smoke Alarm');
        this.tray.setToolTip('MQTT Alarm App V1.1.0');
        this.tray.setContextMenu(this.contextMenu);
        this.tray.on('click', () => {
            this.tray.popUpContextMenu(this.contextMenu);
        });
    }

    public onClickDisconnect(callBack: () => void): void {
        this.disconnectCB = callBack;
    }

    public onClickConnect(callBack: () => void): void {
        this.connectCB = callBack;        
    }

    public onClickOpenViewer(callBack: () => void): void  {
        this.openViewerCB = callBack;
    }

    public onClickPlayAlarm(callBack: () => void): void  {
        this.playAlarmCB = callBack;
    }

    public onClickStopAlarm(callBack: () => void): void  {
        this.stopAlarmCB = callBack;
    }

    public onClickSettings(callBack: () => void): void  {
        this.settingsCB = callBack;
    }

    public setMenuStateToConnected() {
        this.contextMenu.items[0].visible = false;
        this.contextMenu.items[1].visible = true;
        this.contextMenu.items[6].visible = false;
        this.contextMenu.items[7].visible = true;
        this.tray.setImage(path.join(__dirname, '../../assets/alarm-green.png'));
    }

    public setMenuStateToDisconnected() {
        this.contextMenu.items[0].visible = true;
        this.contextMenu.items[1].visible = false;
        this.contextMenu.items[6].visible = true;
        this.contextMenu.items[7].visible = false;
        this.tray.setImage(path.join(__dirname, '../../assets/alarm-red.png'));
    }

    public setMenuStateToError() {
        this.tray.setImage(path.join(__dirname, '../../assets/warning.png'));
    }

}
