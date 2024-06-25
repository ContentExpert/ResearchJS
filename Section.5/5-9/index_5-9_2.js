const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({}, circle);

console.log(another); // {radius: 1, draw: [Function: draw]}
