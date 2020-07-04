import { Decoder } from './decoder';
import { JDSD51DecodeError } from './jdsd51.error';

export enum ButtonStatus {
    Normal = 'Normal',
    Test = 'Test',
    Silenced = 'Silenced',
}

export interface IStatus {
    version: string;
    isSmokeDetected: boolean;
    isFaulty: boolean;
    isLowBattery: boolean;
    isTampered: boolean;
    buttonStatus: ButtonStatus;
}

export class JDSD51 extends Decoder {

    public status: IStatus;
    private versionByte: number;
    private detectionTypeByte: number;
    private statusByte: number;
    

    constructor(base64Data: string) {
        super(base64Data);
        this.decode(this.byteArray);
    }

    private getVersion(): string {
        return this.versionByte.toPrecision(3);
    }

    private isSmokeDetected() {
        const smokeDetected = this.detectionTypeByte & 0x04;
        return !!smokeDetected;
    }

    private isFaulty() {
        const fault = this.statusByte & 0x40;
        return !!fault;
    }

    private isLowBattery() {
        const lowBattery = this.statusByte & 0x10;
        return !!lowBattery;
    }

    private isTampered() {
        const tampered = this.statusByte & 0x08;
        return !!tampered;
    }

    private getButtonStatus(): ButtonStatus {
            if (!!(this.statusByte & 0x01)) {
                return ButtonStatus.Test;
            } else if (!!(this.statusByte & 0x02)) {
                return ButtonStatus.Silenced;
            } else {
                return ButtonStatus.Normal;
            }
    }

    private decode(byteArray: ArrayBufferLike): void {

        const data = new DataView(byteArray);

        if (byteArray.byteLength !== 3) {
            throw new JDSD51DecodeError();
        }
        this.versionByte = data.getUint8(0);
        this.detectionTypeByte = data.getUint8(1);
        this.statusByte = data.getUint8(2);

        if (this.versionByte !== 2) {
            throw new JDSD51DecodeError();
        }

        this.status = {
            buttonStatus: this.getButtonStatus(),
            isFaulty: this.isFaulty(),
            isLowBattery: this.isLowBattery(),
            isSmokeDetected: this.isSmokeDetected(),
            isTampered: this.isTampered(),
            version: this.getVersion(),
        };
    }
}



