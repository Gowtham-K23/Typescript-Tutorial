"use strict";
// Without using generics 
class NumberStack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
class StringStack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new NumberStack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
console.log(numberStack.pop());
const stringStack = new StringStack();
stringStack.push('Hello');
stringStack.push('World');
console.log(stringStack.pop());
console.log(stringStack.pop());
