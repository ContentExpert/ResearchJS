const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    fullName() {
        return `${person.firstName} ${person.lastName}`; 
    }
};

console.log(person.fullName()); // Mosh Hamedani