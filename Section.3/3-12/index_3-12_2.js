let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a); // blue
console.log(b); // red
