// 변수를 선언합니다.
const input = prompt('숫자를 입력해주세요.', '')
const number = Number(input)

// 조건문
const result = (number >= 0 ? '0 이상의 숫자입니다.' : '0보다 작은 숫자입니다.')
alert(result)