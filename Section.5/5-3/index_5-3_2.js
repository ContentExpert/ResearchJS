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
}
