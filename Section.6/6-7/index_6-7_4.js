let numbers = [1, 2, 3, 4];
let another = numbers;

numbers.splice(0, numbers.length);

console.log(numbers); // []
console.log(another); // []