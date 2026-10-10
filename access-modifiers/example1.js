"use strict";
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new User("Alice", 30);
console.log(user.name);
console.log(user.age);
user.name = "Bob";
user.age = 35;
console.log(user.name);
console.log(user.age);
