// 변수를 선언합니다.
const date = new Date()
const hour = date.getHours()

// if 조건문
if (hour < 12) {
  // 표현식 hour < 12가 참일 때 실행합니다.
  alert('오전입니다.')  
} else {
  // 표현식 hour < 12가 거짓일 때 실행합니다.
  alert('오후입니다.')
}