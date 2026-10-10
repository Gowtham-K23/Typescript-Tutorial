"use strict";
var concat = function (a, b, c = "cat") {
    return a + b + c;
};
console.log(concat("a", "b", "c"));
console.log(concat("a", "b"));
