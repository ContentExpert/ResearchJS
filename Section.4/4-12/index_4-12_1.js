const output = fizzBuzz(5);
console.log(output); // Buzz

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return NaN; 

  if (input % 3 === 0)
    return 'Fizz'; 

  if (input % 5 === 0)
    return 'Buzz'; 

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz'; 

  return input; 
}

