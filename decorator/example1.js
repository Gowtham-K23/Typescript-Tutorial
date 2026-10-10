"use strict";
class Calculator {
    add(a, b) {
        console.log(`Calling add method with arguments ${a} and ${b}`);
        const res = a + b;
        console.log(`Result: ${res}`);
        return res;
    }
    subtract(a, b) {
        console.log(`Calling add method with arguments ${a} and ${b}`);
        const res = a - b;
        console.log(`Result: ${res}`);
        return res;
    }
}
const calci = new Calculator();
calci.add(10, 20);
calci.subtract(10, 20);
