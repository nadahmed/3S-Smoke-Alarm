import {BrowserWindow} from 'electron';
import * as path from 'path';

export class ViewerWindow {
        
    private win: BrowserWindow;

    constructor() {
        this.initialize();        
    }

    public async show() {

        if (this.win === null) {
            this.initialize();
        }

        if (!this.win.isVisible()) {
            // await this.win.loadURL('http://localhost:4200');
            await this.win.loadURL('file://' + path.join(__dirname, '../../src/Frontend/Viewer/index.html'));
            this.win.show();  
        }
        if (this.win.isMinimized()) {
            this.win.restore();
        }
            
    }

    public getBrowserWindow() {
        return this.win;
    }

    public isClosed() {
        return !this.win;
    }

    private initialize() {
        this.win = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
                webSecurity: false,
                allowRunningInsecureContent: true,
            },
            darkTheme: true,
            minHeight: 800,
            minWidth: 1200,
            show: false,
            center: true,
            maximizable: true,
            icon: path.join(__dirname, '../../assets/alert.ico'),
        },
        );
        // this.win.webContents.openDevTools();
        this.win.removeMenu();

        this.win.once('close', () => {
            this.win = null;
        });
    }
}
