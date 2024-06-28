const myArray = [[1]];
const copyArray = Object.assign([], myArray);

myArray[0].push(2);
console.log(copyArray); // [[1]] 
