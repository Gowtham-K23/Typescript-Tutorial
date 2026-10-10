"use strict";
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 2000);
    });
}
async function display() {
    console.log("Waiting...");
    const message = await getMessage();
    console.log(message);
}
display();
