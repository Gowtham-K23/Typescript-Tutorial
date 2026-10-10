var concat = function(a: string, b: string, c: string = "cat") {
    return a + b + c
}

console.log(concat("a", "b", "c")) //abc
console.log(concat("a", "b")) //abcat