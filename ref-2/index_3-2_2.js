// 변수를 선언합니다.
const date = new Date()
const hour = date.getHours()

// 조건문
switch (true) {
  case hour < 11:
    // 표현식 hour < 11이 참일 때 실행합니다.
    alert('아침 먹을 시간입니다.')
    break
  case hour < 15:
    // 표현식 hour < 11이 거짓이고 표현식 hour < 15가 참일 때 실행합니다.
    alert('점심 먹을 시간입니다.')
    break
  default:
    // 위의 모든 것이 거짓일 때 실행합니다.
    alert('저녁 먹을 시간입니다.')
    break
}