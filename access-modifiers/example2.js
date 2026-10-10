"use strict";
// With access modifiers
class User1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
const user1 = new User1("Alice", 30);
console.log(user1.getName());
console.log(user1.getAge());
user1.setName("Bob");
user1.setAge(50);
console.log(user1.getName());
console.log(user1.getAge());
