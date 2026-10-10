"use strict";
// With class
class User {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return `${this.age}`;
    }
}
// Creating objects - instances
let userA = new User("John", "Doe", 25);
let userB = new User("Jane", "Smith", 30);
// calling functions
console.log(userA.greet());
console.log(userA.getAge());
