// ES5
asyncFunction(function(result) {
  asyncFunction2(result, function(result2) {
    asyncFunction3(result2, function(result3) {
      console.log(result3);
    });
  });
});

// ES6
asyncFunction()
  .then(result => asyncFunction2(result))
  .then(result2 => asyncFunction3(result2))
  .then(result3 => console.log(result3));
