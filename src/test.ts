import * as mqtt from 'mqtt';

const topic = 'application/3/device/004a770124008c3b/rx';

const client = mqtt.connect(null, {
    username: 'loraadm',
    password: 'URloraadm123456',
    servers: [{
        host: '192.168.0.3',
        port: 1883,
        protocol: 'mqtt',
    }],

});


client.on('connect', () => {
    console.log('Connected');
    publisher();
});



async function publisher() {
    const messages = [
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AgAB'}, // Button pressed
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AgQA'}, // Smoke detected
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AgQC'}, // Smoke detected and button pressed
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AgQA'}, // Smoke detected
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AgAA'}, // All Ok
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AQEADC4AJAUAAB0='}, // Smoke detected 
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AQEADC4ADwAAAB0='}, // smoke false 
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AQEADC4AJAUAAB0='}, // Smoke detected 
        { confirmed: true, devEUI: '004a770124008c3b', fPort: 10, data: 'AQIA'}, // button pressed
    ];
    
    for ( const message of messages) {
        await pub( JSON.stringify(message), 8000);
    }
    process.exit();
}

function pub(message: string, interval: number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            client.publish(topic, message);
            // console.log('Published');
            res();
        }, interval);
    });
}

process.on('exit', (code) => {
    return console.log(`About to exit with code ${code}`);
});

