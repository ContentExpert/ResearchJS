let address = new Address('a', 'b', 'c');

console.log(address); // Address { street: 'a', city: 'b', zipCode: 'c' }

function createddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}