const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = true;

console.log(person); // UncaughtTypeError: value.split is not a function