const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1)); // true

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}