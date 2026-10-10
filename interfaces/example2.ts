interface User {
    firstName: string;
    lastName: string;
    age: number;
    middleName: string
}

function greetUser(user: User) {
    return (`Hello ${user.firstName} ${user.lastName}`)
}

function logUserDetails(user: User) {
    console.log(`Hello ! I'm ${user.firstName} ${user.middleName} ${user.lastName}. I'm ${user.age} years old.`)
}

let user2 = {firstName: "John", lastName: "Doe", middleName: "Francis", age: 25}
console.log(greetUser(user2))
logUserDetails(user2)