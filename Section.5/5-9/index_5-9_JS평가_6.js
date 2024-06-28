const myArray = [3, [1], 2];
const copyArray = Array.from(myArray);

myArray[1].push(2);
console.log(copyArray); // [3, [1, 2], 2]