import {BrowserWindow} from "electron";
import * as path from "path";

export class SettingWindow {
    
    private size = { width: 250, height: 360 };
    

    constructor(private win?: BrowserWindow) {
        this.win = new BrowserWindow({
            // title: "Setting",
            // darkTheme: true,
            ...this.size,
            show: false,
            resizable: false,
            maximizable: false,
            icon: path.join(__dirname, "../assets/alert.ico"),
        },
        );
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
}
