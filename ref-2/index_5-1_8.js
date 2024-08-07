// 나머지 매개변수를 사용한 함수 만들기
function min(...items) {
  // 매개변수 items는 배열처럼 사용합니다.
  let output = items[0]
  for (const item of items) {
    if (output > item) {
      output = item
    }
  }
  return output
}

// 함수 호출하기
console.log('min(52,273,32,103,275,24,57)') // min(52,273,32,103,275,24,57)
console.log(`=${min(52,273,32,103,275,24,57)}`) // =24