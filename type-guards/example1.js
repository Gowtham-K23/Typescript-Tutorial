"use strict";
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log(value * value);
    }
}
printValue("Gowtham");
printValue(1000);
