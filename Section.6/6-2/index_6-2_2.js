const numbers = [3, 4];

numbers.push(5, 6);

numbers.unshift(1, 2);

numbers.splice(2, 0, 'a', 'b');

console.log(numbers); // [ 1, 2, 'a', 'b', 3, 4, 5, 6 ]