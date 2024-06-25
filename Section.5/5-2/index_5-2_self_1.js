function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}


const circle1 = createCircle(1);
circle1.draw();