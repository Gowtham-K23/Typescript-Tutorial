"use strict";
// Using closure
function createCounter() {
    let counterValue = 0;
    return {
        incrementCounter: function () {
            counterValue++;
        },
        getCounterValue: function () {
            return counterValue;
        }
    };
}
const counter1 = createCounter();
counter1.incrementCounter();
const counter2 = createCounter();
counter2.incrementCounter();
counter1.incrementCounter();
console.log(counter1.getCounterValue(), "COUNTER1");
console.log(counter2.getCounterValue(), "COUNTER2");
