// String primitive
const message = 'This is my first message';

// String object
const another = new String('hi');

let replaceWords = message.replace('first', 'second');

console.log(replaceWords); // This is my second message
console.log(message); // This is my first message