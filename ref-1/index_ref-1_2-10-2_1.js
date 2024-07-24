// 변수를 선언합니다.
let nan = Number("안녕하세요");
let undefinedVariable;

// 부정 연산자를 두 번 사용합니다.
console.log(!!0); // false
console.log(!!nan); // false
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefinedVariable); // false