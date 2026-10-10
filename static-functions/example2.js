"use strict";
class User1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        return age >= 18;
    }
}
console.log(User1.isAdult(30), '30');
console.log(User1.isAdult(15), '15');
