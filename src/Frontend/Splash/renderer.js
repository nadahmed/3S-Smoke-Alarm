const { remote } = require('electron');

window.onload = () => {
    console.log('started');
    document.body.className = '';
    let appNameDOM = document.getElementById('app-name');
    let supportedAlarmDOM = document.getElementById('supported-alarms');
    let versionDOM = document.getElementById('version');
    
    
    appNameDOM.innerHTML = remote.app.getName();
    supportedAlarmDOM.innerHTML = 'JD-SD51'
    versionDOM.innerHTML = 'v'+remote.app.getVersion(); 
}
