// let 변수를 선언합니다.
let output = 0

// 반복문
for (let i = 1; i <= 10; i++) {
  // 조건문
  if (i % 2 === 1) {
    // 홀수면 현재 반복을 중지하고 다음 반복을 수행합니다.
    continue
  }
  output += i
}

// 출력합니다.
alert(output)