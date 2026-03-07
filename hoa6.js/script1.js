function getRandomSet(m, n, allowRepeat, sortResult) {
    let result = [];

    while (result.length < m) {
        let num = Math.floor(Math.random() * (n + 1));

        if (allowRepeat) {
            result.push(num);
        } else {
            if (!result.includes(num)) {
                result.push(num);
            }
        }
    }

    if (sortResult) {
        result.sort(function(a, b) {
            return a - b;
        });
    }

    return result;
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));