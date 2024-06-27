const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`; 
    }
};

// getters => access properties
// setters => change (mutate) them

console.log(person.fullName()); // Mosh Hamedani