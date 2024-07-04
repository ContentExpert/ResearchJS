const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 0, 1);

console.log(output); //[ 2, 1, 3, 4 ]

function move(array, index, offset) { 
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
}