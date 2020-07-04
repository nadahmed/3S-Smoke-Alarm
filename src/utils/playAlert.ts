import { app, BrowserWindow } from 'electron';
import * as path from 'path';

export class MyPlayer {
    public window: BrowserWindow;

    constructor(private file?: string) {
        this.window = new BrowserWindow({
            width: 800,
            height: 600,
            show: false,
            webPreferences: {
                nodeIntegration: true,
            }, 
        });
        this.window.webContents.openDevTools();
        // Or load a local HTML file
        this.window.loadURL('file://' + path.join(__dirname, '../../src/Frontend/Audio/index.html'));

        this.window.once('ready-to-show', async () => {
            // this.window.show();    
            if (!!this.file) {
                this.window.webContents.send('audio-file', this.file);    
            }
        });

        this.window.on('closed', () => {
            app.quit();
        });
    }
    
    public setFile(file: string) {
        this.file = file;
        this.window.webContents.send('audio-file', this.file);
    }

    public playLoop() {
        this.window.webContents.send('loop-audio');
    }

    public play() {
        this.window.webContents.send('play-audio');
    }

    public kill() {
        this.window.webContents.send('stop-audio');
    }
}

