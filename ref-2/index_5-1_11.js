// 단순하게 매개변수를 모두 출력하는 함수
function sample(...items) {
  console.log(items)
}

// 전개 연산자 사용 여부 비교하기
const array = [1, 2, 3, 4]

console.log('# 전개 연산자를 사용하지 않은 경우') // # 전개 연산자를 사용하지 않은 경우
sample(array) // [ [ 1, 2, 3, 4 ] ]
console.log('# 전개 연산자를 사용한 경우') // # 전개 연산자를 사용한 경우
sample(...array) // [ 1, 2, 3, 4 ]