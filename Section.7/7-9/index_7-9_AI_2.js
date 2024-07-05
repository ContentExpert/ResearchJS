// ES5
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;  // `this` refers to global object, not Person instance
  }, 1000);
}

// ES6
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;  // `this` refers to Person instance
  }, 1000);
}
