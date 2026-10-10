"use strict";
// Without class
let user1 = { firstName: "John", lastName: "Doe", age: 25 };
let user2 = { firstName: "Jane", lastName: "Smith", age: 30 };
function greetUser(user) {
    return `Hello, ${user.firstName} ${user.lastName}`;
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
console.log(getUserAge(user1));
