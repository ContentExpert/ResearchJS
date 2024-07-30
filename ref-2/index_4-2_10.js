// 반복문
for (let i = 0; true; i++) {
  alert(i + '번째 반복문입니다.')

  // 진행 여부를 물어봅니다.
  const isContinue = confirm('계속하시겠습니까?')
  if (!isContinue) {
      break
  }
}

// 프로그램의 종료를 확인합니다.
alert('프로그램 종료')