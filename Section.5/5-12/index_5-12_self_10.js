// String primitive
const message = '   This is my first message   ';

// String object
const another = new String('hi');

let trimMessage = message.trim();
let leftTrim = message.trimLeft();
let rightTrim = message.trimRight();

console.log(trimMessage); // This is my first message
console.log(leftTrim); // This is my first message   
console.log(rightTrim); //    This is my first message