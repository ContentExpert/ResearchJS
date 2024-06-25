let x = {value: 10};
let y = x;

x.value = 20;

console.log(x); // {value: 20}
console.log(y); // {value: 20}