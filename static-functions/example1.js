"use strict";
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}
const user = new User("Alice", 30);
console.log(user.isAdult());
