let person = {
    name: 'Mosh',
    age: 30
};

// Dot notation
person.name = 'John';

// Bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name); // Mary