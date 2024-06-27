const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        const e = new Error();
        throw e;

        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = null;

console.log(person);