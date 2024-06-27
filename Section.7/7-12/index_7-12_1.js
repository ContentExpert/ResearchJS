console.log(sum(1, 2, 3, 4)); // 10

function sum(...items) {
    return items.reduce((a, b) => a + b);
}