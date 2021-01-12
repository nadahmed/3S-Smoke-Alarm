import {BrowserWindow} from 'electron';
import * as path from 'path';

export class SplashWindow {
    
    // private size = { width: 350, height: 600 };
    private size = { width: 850, height: 480 };
    
    private win?: BrowserWindow = null;


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

    public show() {
        if (this.win === null) {
            this.initialize();
        } else if (!this.win.isFocused()) {            
            this.win.show();  
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
            // ...this.size,
            frame: false,
            transparent: true,
            show: false,
            // resizable: false,
            // maximizable: false,
            alwaysOnTop: true,
            icon: path.join(__dirname, '../../assets/alert.ico'),
        },
        );
        // this.win.webContents.openDevTools();
        this.win.removeMenu();

        this.win.loadURL('file://' + path.join(__dirname, '../../src/Frontend/Splash/index.html'));
        this.win.once('ready-to-show', () => {
            this.win.show();  
        });

        this.win.on('show', async () => {
            setTimeout(() => {
                this.win.destroy();
            }, 4000);
        });


        this.win.once('close', () => {
            this.win = null;
        });
    }
}
