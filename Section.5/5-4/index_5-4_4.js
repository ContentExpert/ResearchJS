const circle = {
    radius : 1
};

circle = {}; // TypeError: Assignment to constant variable.

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);
