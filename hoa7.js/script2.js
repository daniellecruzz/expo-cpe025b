function myDecorator(fn) {
    const cache = new Set();

    return function(...args) {
        // Convert arguments array to a string key
        const key = args.join(",");

        if (cache.has(key)) {
            console.log(`arguments already used: ${args}`);
            return;
        }

        cache.add(key);
        return fn(...args);
    };
}

// Test function
let sum = function(...args) {
    return args.reduce((a, b) => a + b, 0);
};

let dfn = myDecorator(sum);

console.log(dfn(2, 3, 4)); // 9
console.log(dfn(4, 5));    // 9
console.log(dfn(2, 3, 4)); // arguments already used: 2,3,4
console.log(dfn(4, 5));    // arguments already used: 4,5