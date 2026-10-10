"use strict";
// Without inheritance
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
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return `${this.age}`;
    }
}
class Admin {
    firstName;
    lastName;
    age;
    role;
    constructor(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
    greet() {
        return `Hello ${this.firstName} ${this.lastName}, Role: ${this.role}`;
    }
    getAge() {
        return `${this.age}`;
    }
    manageUser() {
        return `Managing users with role ${this.role}`;
    }
}
let user1 = new User("John", "Doe", 24);
let admin1 = new Admin("Jane", 'Smith', 27, "Administrator");
console.log(user1.greet());
console.log(user1.getAge());
console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUser());
