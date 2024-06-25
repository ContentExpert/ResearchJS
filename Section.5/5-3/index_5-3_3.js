function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    return this;
}

const circle = new Circle(1);
