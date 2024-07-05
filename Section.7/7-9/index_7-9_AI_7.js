// ES6
let sym = Symbol("description");
let obj = {
  [sym]: "value"
};
console.log(obj[sym]);  // "value"
