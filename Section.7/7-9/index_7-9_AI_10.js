(function() {
  var privateVariable = 'This is a private variable';

  function privateFunction() {
      console.log(privateVariable);
  }

  // Public API
  window.myModule = {
      publicFunction: privateFunction
  };
})();

// Usage
myModule.publicFunction(); // Output: This is a private variable
