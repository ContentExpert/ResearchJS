function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1); 
console.log(circle1); // {radius: 1, draw: [Function: draw]}

const circle2 = createCircle(2);
console.log(circle2) // {radius: 2, draw: [Function: draw]}