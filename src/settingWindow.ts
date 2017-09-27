import {BrowserWindow} from "electron";
import * as path from "path";

export class SettingWindow {
    
    private size = { width: 350, height: 500 };
    

    constructor(private win?: BrowserWindow) {
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
            icon: path.join(__dirname, "../assets/settings.png"),
        },
        );
        // this.win.webContents.openDevTools();
        this.win.removeMenu();
    }

    public show() {
        this.win.loadFile(path.join(__dirname, "../index.html"));
        
        this.win.show();
        
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
}
