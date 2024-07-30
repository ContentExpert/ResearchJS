// 단순하게 매개변수를 모두 출력하는 함수
function sample(...items) {
  console.log(items)
}

// 전개 연산자 사용 여부 비교하기
const array = [1, 2, 3, 4]
console.log(sample.apply(null, array))