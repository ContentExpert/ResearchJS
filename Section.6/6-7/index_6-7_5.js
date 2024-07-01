let numbers = [1, 2, 3, 4];
let another = numbers;

while (numbers.length > 0)
    numbers.pop();

console.log(numbers); // []
console.log(another); // []