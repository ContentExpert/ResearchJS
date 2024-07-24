// NaN 변수를 만듭니다.
let nan = Number("안녕하세요");

// nan끼리 비교합니다.
console.log(nan == nan); // false
console.log(nan != nan); // true

// isNaN() 함수로 NaN인지 확인합니다.
console.log(isNaN(nan)); // true