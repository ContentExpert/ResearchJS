function sum(...args) {
    let total = 0
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10)); // 25