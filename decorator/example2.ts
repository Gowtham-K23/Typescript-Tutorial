function LogOperation(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(
            `Calling ${propertyKey} method with arguments ${args.join(" and ")}`
        );

        const result = originalMethod.apply(this, args);

        console.log(`Result: ${result}`);

        return result;
    };

    return descriptor;
}

class Calculators {
    @LogOperation
    add(a: number, b: number): number {
        return a + b;
    }

    @LogOperation
    subtract(a: number, b: number): number {
        return a - b;
    }
}

const calci1 = new Calculators();

calci1.add(10, 20);
calci1.subtract(10, 20);

// execute command
// tsc example2.ts --experimentalDecorators --target es2020