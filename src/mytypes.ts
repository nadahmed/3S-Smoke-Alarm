declare interface IServer {
    
        "host": string;
        "port": number;
        "username": string;
        "password": string;
}

declare interface ITopic {
        "application_id": string;
}

export declare interface IConfig {
    "server": IServer;
    "topic": ITopic;
}