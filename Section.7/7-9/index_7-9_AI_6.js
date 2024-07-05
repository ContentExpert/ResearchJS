// ES5
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

// ES6
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
