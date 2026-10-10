// With inheritance

class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet()
    {
        return `Hello ${this.firstName} ${this.lastName}`
    }

    getAge()
    {
        return `${this.age}`
    }
}

class Users extends Person {

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age)
    }
}

class AdminA extends Person {
    role: string;
    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age)
        this.role = role
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}, Role: ${this.role}`
    }

    manageUser() 
    {
        return `Managing users with role ${this.role}`;
    }
}

let userA = new Users("John", "Doe", 24)
let adminA = new AdminA("Jane", 'Smith', 27, "Administrator")

console.log(userA.greet())
console.log(userA.getAge())

console.log(adminA.greet())
console.log(adminA.getAge())
console.log(adminA.manageUser())