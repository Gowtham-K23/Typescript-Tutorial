// With access modifiers
class User1 {
    private name: string;
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }

    public setName(name: string) {
        this.name = name
    }

    public setAge(age: number) {
        this.age = age
    }
}

const user1 = new User1("Alice", 30)
console.log(user1.getName())
console.log(user1.getAge())

user1.setName("Bob")
user1.setAge(50)
console.log(user1.getName())
console.log(user1.getAge())