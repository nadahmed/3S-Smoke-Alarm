import * as path from "path";
import * as Player from "play-sound";

export class MyPlayer {
    public file: string;
    private player = Player({player: path.join(__dirname, "../assets/cmdmp3.exe")});
    private audio: { kill: () => void; } ;
    private loopFlag = true;

    public play(file?: string): (Promise<any>) {
        if (!file) {
            if (!this.file) {
                throw TypeError;
            } else {
                file = this.file;
            }
        } else {
            this.file = file;
        }
        return new Promise<any>((resolve, reject) => {
                this.audio = this.player.play(file, (err: any) => {
                    if (err) { reject(err); }
                    resolve(this.player);
                    });

        });
    }

    public playLoop(file?: string): Promise<any> {
        if (!file) {
            if (!this.file) {
                throw TypeError;
            } else {
                file = this.file;
            }
        } else {
            this.file = file;
        }
        this.loopFlag = true;
        return new Promise<any>(async (resolve, reject) => {
            while (this.loopFlag) {
                try {
                    await this.play(file);
                } catch (e) {
                    break;
                }
            }
            resolve(null);
        });

    }


    public kill() {
        this.loopFlag = false;
        try {
            this.audio.kill();
        } catch (e) {
            if (e.name !== "TypeError") {
                throw Error(e);
            }
        }

    }
}
