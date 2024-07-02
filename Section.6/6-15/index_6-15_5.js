const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => { value: n });

console.log(items); // [ undefined, undefined, undefined ]