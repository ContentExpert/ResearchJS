const numbers = [1, 2, 3];

const atLeastOnePositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive); // true