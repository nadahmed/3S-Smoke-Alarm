export class JDSD51DecodeError extends Error {

    

    constructor() {
        super();
        this.name = 'JDSD51DecodeError';
        this.message = 'The data does not seem like it\'s comming from JD-SD51 model';
        Object.setPrototypeOf(this, JDSD51DecodeError.prototype);
    }

}
