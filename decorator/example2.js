"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogOperation(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} method with arguments ${args.join(" and ")}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };
    return descriptor;
}
class Calculators {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
}
__decorate([
    LogOperation
], Calculators.prototype, "add", null);
__decorate([
    LogOperation
], Calculators.prototype, "subtract", null);
const calci1 = new Calculators();
calci1.add(10, 20);
calci1.subtract(10, 20);
