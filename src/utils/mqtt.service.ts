import * as mqtt from 'mqtt';
import { Observable } from 'rxjs';
import { IConfigV2 } from './config.type';

export class Mqtt {
    public client: mqtt.Client = null;

    public connect(config: IConfigV2) {
        this.client = mqtt.connect(null, {
            username: config.server.mqtt.username,
            password: config.server.mqtt.password,
            servers: [{
                host: config.server.mqtt.host,
                port: config.server.mqtt.port,
                protocol: 'mqtt',
            }],
        });
    }

    public onConnect(): Observable<boolean> {
        return new Observable((sub) => {
            this.client.on('connect', () => {
                if (this.client.connected) {
                    sub.next(true);
                }
            });
        });
    }

    public onDisconnect(): Observable<boolean> {
        return new Observable<boolean>((sub) => {
            this.client.on('close', () => {
                if (this.client.disconnected) {
                    sub.next(true);
                    sub.complete();
                }
            });
        });
    }


}
