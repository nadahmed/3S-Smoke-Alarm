export abstract class Decoder {
    public base64Data: string;
    public byteArray: ArrayBufferLike;
    
    constructor(base64Data: string) {
        this.base64Data = base64Data;
        this.byteArray = this.base64decode(base64Data);
    }

    public base64decode(base64: string): ArrayBufferLike {
        const binaryString = Buffer.from(base64, "base64").toString();
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
        }
}
