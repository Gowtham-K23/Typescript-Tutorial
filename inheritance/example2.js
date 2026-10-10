"use strict";
// With inheritance
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return `${this.age}`;
    }
}
class Users extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
}
class AdminA extends Person {
    role;
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }
    greet() {
        return `Hello ${this.firstName} ${this.lastName}, Role: ${this.role}`;
    }
    manageUser() {
        return `Managing users with role ${this.role}`;
    }
}
let userA = new Users("John", "Doe", 24);
let adminA = new AdminA("Jane", 'Smith', 27, "Administrator");
console.log(userA.greet());
console.log(userA.getAge());
console.log(adminA.greet());
console.log(adminA.getAge());
console.log(adminA.manageUser());
