"use strict";
// Without union types
// let val: any
// val = "Hello"
// val = 100
// val = true
// With union type
let value;
value = "Hello";
value = 100;
// value = true
// this will be false - because the value is string and number only
function findProduct(proId) {
    console.log(`Searching Product: ${proId}`);
}
findProduct(101);
findProduct('PRO-101');
