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
}
