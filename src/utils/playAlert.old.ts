import * as eu from "electron-util";
import * as path from "path";
import * as Player from "play-sound";


export class MyPlayer {
    public file: string;
    
    private player = Player({player: eu.fixPathForAsarUnpack(path.join(__dirname, "../../player/cmdmp3.exe"))});
    private audio: { kill: () => void; } = null ;
    private loopFlag = true;


    public playLoop(): Promise<any> {
        this.loopFlag = true;
        return new Promise<any>(async (resolve, reject) => {
            while (this.loopFlag) {
                await this.play();
            }
            resolve(null);
        });

    }


    public play(): (Promise<any>) {

        if (this.player === null) {
            this.initializer();
        }
        return new Promise<any>((resolve, reject) => {
                this.audio = this.player.play(this.file, (err: any) => {
                    if (err) { reject(err); }
                    resolve(this.player);
                    });

        });
    }

    public kill() {
        this.loopFlag = false;
        return new Promise<any>((resolve, reject) => {
            if (this.audio !== null) {
                this.audio.kill();
            }
            this.player = null;
            resolve(null);
        });
    }

    private initializer() {
        this.player = Player({player: eu.fixPathForAsarUnpack(path.join(__dirname, "../../player/cmdmp3.exe"))});
    }
}

