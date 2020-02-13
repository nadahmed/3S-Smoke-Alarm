// import { ipcRenderer } from "electron";
// import { IConfig } from "./mytypes";

// // const submitFormButton = document.querySelector("myForm");
// // const responseParagraph = document.getElementById("response");

// function sendForm(event: any) {
//         event.preventDefault();   // stop the form from submitting
//         const host = (document.getElementById("host") as HTMLInputElement).value;
//         const port = (document.getElementById("port") as HTMLInputElement).value;
//         const username = (document.getElementById("username") as HTMLInputElement).value;
//         const password = (document.getElementById("password") as HTMLInputElement).value;
//         const appId = (document.getElementById("appId") as HTMLInputElement).value;
        
//         const formData: IConfig = {
//             server: {
//                 host,
//                 port: parseInt(port, 10),
//                 username,
//                 password,
//             },
//             topic: {
//                 application_id: appId,
//             },
//         };
//         ipcRenderer.send("form-submission", formData);
// }

// // ipcRenderer.on("form-received", (event, args) => {
// //     responseParagraph.innerHTML = args;
// //     /*
// //         you could choose to submit the form here after the main process completes
// //         and use this as a processing step
// //     */
// // });
