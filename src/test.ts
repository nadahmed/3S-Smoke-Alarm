import { JDSD51 } from "./decoder/jdsd51.decoder";

const smokeAlarm = new JDSD51 ("AgQC");

console.log(smokeAlarm.status);
