declare interface IServer {
    
    'host': string;
    'port': number;
    'username': string;
    'password': string;
}

declare interface ITopic {
    'application_id': string;
}

export declare interface IConfig {
'server': IServer;
'topic': ITopic;
}

export declare interface IConfigV2 {
    server: {
        mqtt?:
        {
            host?: string;
            port?: number;
            username?: string;
            password?: string;
        };
        restApi?:
        {
            host?: string;
            uriLogin?: string;
            username?: string;
            password?: string;
            uri?: string;
            port?: number;
            scheme?: string;
        };
    };
    meta?: {
        applicationId?: string;
    };
}

export interface MqttMessage {
    applicationID: string;
    applicationName: string;
    deviceName: string;
    devEUI: string;
    rxInfo: Array<{
        mac: string;
        rssi: number;
        loRaSNR: number;
        name: string;
        latitude: number;
        longitude: number;
        altitude: number;
    }>;
    txInfo: {
        frequency: number;
        dataRate: {
            modulation: string;
            bandwidth: number;
            spreadFactor: number;
        };
        adr: boolean;
        codeRate: string;
    };
    fCnt: number;
    fPort: number;
    data: string;
}

export interface MqttEvent extends MqttMessage {
    _id?: number;
    time: string;
}
