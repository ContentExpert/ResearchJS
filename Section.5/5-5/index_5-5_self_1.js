function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

let x = another.constructor;
let y = circle.constructor;
console.log(x); // [Function: Circle]
console.log(y); // [Function: Object]