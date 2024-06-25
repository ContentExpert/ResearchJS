function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

let name = Circle.name;
let length = Circle.length;
let constructor = Circle.constructor;

console.log(name); // Circle
console.log(length); // 1
console.log(constructor); // [Function: Function]