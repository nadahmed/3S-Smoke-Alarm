import { app } from 'electron';
import { MqttEvent } from './config.type';
import Datastore = require('nedb');
import * as eu from 'electron-util';
import * as path from 'path';

export class MQTTEventManager {

    private dbLocation = '';
    private db: Datastore;

    constructor(private databaseName = 'mqttManager.db') {
        // this.dbLocation = eu.fixPathForAsarUnpack(path.join(__dirname, '../../data/' + this.databaseName));
        this.dbLocation = app.getPath('userData') + '\\data\\' + this.databaseName;
        console.log( app.getName() , this.dbLocation);
        this.db = new Datastore({ filename: this.dbLocation, autoload: true });
    }

    public getDbLocation() {
        return this.dbLocation;
    }

    public insertData(data: MqttEvent, cb?: (err: Error, newDoc: MqttEvent) => void) {
        this.db.insert(data, cb);
    }

    public removeAll() {
        return new Promise((resolve, reject) => {
            this.db.remove({}, {multi: true}, (err: Error, n: number) => {
                if (err) {
                    reject(err);
                }
                resolve(n);
            });
        });
    }

    public count(): Promise<number> {
        return new Promise<number> ((resolve, reject) => {
            this.db.count({}, (err, count) => {
                if (err) {
                    reject(err);
                }
                resolve(count);
            });
        });
    }

    public all(): Promise<MqttEvent[]> {
        return new Promise<MqttEvent[]>((resolve, reject) => {
            this.db.find({}, (err: Error, data: MqttEvent[]) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
