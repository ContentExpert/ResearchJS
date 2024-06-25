const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({
    color: 'yellow'
}, circle);

console.log(another); // {color: 'yellow', radius: 1, draw: [Function: draw]}
