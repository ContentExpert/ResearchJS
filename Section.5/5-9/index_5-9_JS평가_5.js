const myArray = [3, [1], 2];
const copyArray = myArray.concat();

myArray[1].push(2);
console.log(copyArray); // [3, [1, 2], 2]