// ES5
function greet(name) {
    var name = name || "Guest";
    console.log("Hello, " + name);
  }
  
  // ES6
  function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }
  