const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = { ...circle };

console.log(another); // {radius: 1, draw: [Function: draw]}
