class MyIterable {
    constructor() {
        this.items = new Set();
    }

    add(value) {
        this.items.add(value); // ignores duplicates automatically
    }

    has(value) {
        return this.items.has(value);
    }

    del(value) {
        this.items.delete(value);
    }

    get length() {
        return this.items.size;
    }

    *[Symbol.iterator]() {
        for (let item of this.items) {
            yield item;
        }
    }
}

// Decorator to track used arguments
function myDecorator(fn) {
    const usedArgs = new MyIterable();

    return function (...args) {
        const key = args.join(",");
        if (usedArgs.has(key)) {
            console.log("arguments already used:", key);
            return;
        }
        usedArgs.add(key);
        return fn(...args);
    };
}

// Test
let sum = function (...args) {
    return args.reduce((a, b) => a + b, 0);
};

let dfn = myDecorator(sum);

console.log(dfn(2, 3, 4)); // 9
console.log(dfn(4, 5));    // 9
console.log(dfn(2, 3, 4)); // arguments already used: 2,3,4
console.log(dfn(4, 5));    // arguments already used: 4,5