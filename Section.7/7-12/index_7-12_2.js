console.log(sum([1, 2, 3, 4])); // [1, 2, 3, 4]

function sum(...items) {
    console.log(items); // [[1, 2, 3, 4]]
    return items.reduce((a, b) => a + b);
}