let pi = 3.14
console.log(`파이 값은 ${pi}입니다.`) // 파이 값은 3.14입니다.

// 블록을 사용한 스코프 생성
{
let pi = 3.141592
console.log(`파이 값은 ${pi}입니다.`) // 파이 값은 3.141592입니다.
}
console.log(`파이 값은 ${pi}입니다.`) // 파이 값은 3.14입니다.

// 함수 블록을 사용한 스코프 생성
function sample() {
let pi = 3.141592
console.log(`파이 값은 ${pi}입니다`) // 파이 값은 3.141592입니다.
}

sample()
console.log(`파이 값은 ${pi}입니다.`) // 파이 값은 3.14입니다.