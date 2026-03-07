let getPromiseArray = function (args) {
    return args.map(arg =>
        new Promise((resolve, reject) => {
            if (Number.isInteger(arg) && arg > 0) {
                setTimeout(() => {
                    resolve(arg);
                }, arg);
            } else {
                reject(new Error(`${arg} is not a positive integer`));
            }
        })
    );
};

// Test
let arr = getPromiseArray([1000, 2, -5, 300]);

arr.forEach(p =>
    p.then(res => console.log("Resolved:", res))
     .catch(err => console.log("Rejected:", err.message))
);