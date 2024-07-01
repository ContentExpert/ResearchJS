const myObject = {
    name: 'a',
    member: {
        1: 'b',
        2: 'c'
    }
};

const copyObject = { ...myObject };

myObject.member[3] = 'd'; 
console.log(copyObject.member); // { '1': 'b', '2': 'c', '3': 'd' }
