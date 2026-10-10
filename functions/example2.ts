function addNumbers(a: number, b: number) {
    return a + b
}
// Here we giving the type of the variables

var res = addNumbers(5, 10) // 5 + 10 = 15
res = addNumbers("1", "2") // "!" + "2" = "12"
console.log(res)