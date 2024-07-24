 // 변수를 선언합니다.
 const date = new Date()
 const hour = date.getHours()

 // if else if 조건문
 if (hour < 11) {
   // 표현식 hour < 11가 참일 때 실행합니다.
   alert('아침 먹을 시간입니다.')  
 } else if (hour < 15) {
   // 표현식 hour < 11가 거짓이고 표현식 hour < 15가 참일 때 실행합니다.
   alert('점심 먹을 시간입니다.')
 } else {
   // 표현식 hour < 15가 거짓일 때 실행합니다.
   alert('저녁 먹을 시간입니다.')
}