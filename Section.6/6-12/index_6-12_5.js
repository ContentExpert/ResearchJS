const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];

courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    //a === b => 0
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(courses); // [ { id: 1, name: 'Node.js' }, { id: 2, name: 'javaScript' } ]