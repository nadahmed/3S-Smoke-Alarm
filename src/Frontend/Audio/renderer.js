const { ipcRenderer } = require('electron')

let audio = new Audio('');
let myFile = '';

ipcRenderer.on('audio-file', (_, file) => {
    myFile = file;
    audio.pause();
    audio.src = file;
    audio.load();
});

ipcRenderer.on('play-audio', () => {
    audio.loop = false;
    audio.play();
});

ipcRenderer.on('stop-audio', () => {
    audio.pause();
    audio.load();
});

ipcRenderer.on('loop-audio', () => {
    audio.loop = true;
    audio.play();
});