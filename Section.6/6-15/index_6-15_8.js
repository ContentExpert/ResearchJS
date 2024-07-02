const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1);


console.log(items); // [ { value: 2 }, { value: 3 } ]