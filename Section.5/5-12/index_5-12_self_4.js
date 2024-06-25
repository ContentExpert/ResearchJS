// String primitive
const message = 'This is my first message';

// String object
const another = new String('hi');

let messageIncludesMy = message.includes('my');
let messageIncludesNot = message.includes('not');

console.log(messageIncludesMy); // true
console.log(messageIncludesNot); // false