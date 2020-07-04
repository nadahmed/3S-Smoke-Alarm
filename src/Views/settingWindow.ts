import {app, BrowserWindow} from 'electron';
import * as path from 'path';

export class SettingWindow {
    
    private size = { width: 350, height: 600 };
    // private size = { width: 550, height: 600 };
    
    private win?: BrowserWindow;

    constructor() {
        this.initialize();
    }

    public async show() {
        // await this.win.loadFile(path.join(__dirname, '../../src/Frontend/Settings/index.html'));
        if (this.win === null) {
            this.initialize();
        }
        if (!this.win.isVisible()) {
            // await this.win.loadURL('http://localhost:4201');
            await this.win.loadURL('file://' + path.join(__dirname, '../../src/Frontend/Settings/index.html'));
            this.win.show();  
        }

        if (this.win.isMinimized()) {
            this.win.restore();
        }
    }

    public close() {
        this.win.hide();
    }

    public isVisible() {
        try {
            return this.win.isVisible();
        } catch (e) {
            return false;
        }

    }

    public isDestroyed() {
        try {
            return this.win.isDestroyed();
        } catch (e) {
            return false;
        }

    }

    public setSize(size: { width: number; height: number; }, animate?: boolean) {
        this.size.width = size.width;
        this.size.height = size.height;
        this.win.setSize(this.size.width, this.size.height, animate);
    }

    public getBrowserWindow() {
        return this.win;
    }

    private initialize() {
        this.win = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
            },
            // title: "Setting",
            // darkTheme: true,
            ...this.size,
            show: false,
            resizable: false,
            maximizable: false,
            icon: path.join(__dirname, '../../assets/settings.png'),
        },
        );
        // this.win.webContents.openDevTools();
        this.win.removeMenu();

        this.win.once('close', () => {
            this.win = null;
        });
    }
}
