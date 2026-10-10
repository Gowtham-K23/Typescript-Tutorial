// type TypeName = Type

// Without type alias
// let user1: {
//     id: number
//     name: string
// }

// let user2: {
//     id: number
//     name: string
// }

type User = {
    id: number
    name: string
    email: string
}

let user1: User = {
    id: 101,
    name: "Gowtham",
    email: "gowthamkbala7@gmail.com"
}

console.log(user1)