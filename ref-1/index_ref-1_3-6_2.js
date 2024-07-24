let test;

if (typeof(test) != 'undefined') {
    test = "초기화_1" // undefined
}
console.log(test)

if (typeof(test) != 'undefined') {
    test = "초기화_2"
}
console.log(test) // undefined