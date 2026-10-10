"use strict";
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
const stringStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
console.log(numberStack.pop());
stringStack.push('Hello');
stringStack.push('World');
console.log(stringStack.pop());
console.log(stringStack.pop());
