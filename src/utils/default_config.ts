import { IConfig, IConfigV2 } from './config.type';

const defaultConfig: IConfig = {
    server:
    {
        host: '192.168.0.1',
        port: 1883,
        username: 'loraadm',
        password: 'URloraadm123456',
    },
    topic: {
        application_id: '1',
    },
};


export const defaultConfigV2: IConfigV2 = {
    server: {
        mqtt:
        {
            host: '192.168.0.3',
            port: 1883,
            username: 'loraadm',
            password: 'URloraadm123456',
        },
        restApi:
        {
            host: '192.168.0.3',
            uriLogin: '/api/internal/login',
            username: 'apiuser',
            password: 'password',
            uri: '/api',
            port: 8080,
            scheme: 'https://',
        },
    },
    meta: {
        applicationId: '4',
    },
};
