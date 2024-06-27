function earnings (name, wage=8590, hours=40) {
    console.log(`# ${name} 님의 급여 정보`)
    console.log(`- 시급: ${wage}원`)
    console.log(`- 근무 시간: ${hours}시간`)
    console.log(`- 급여: ${wage * hours}원`)
    console.log('')
  }

  // 최저 임금으로 최대한 일하는 경우
  earnings('구름')
  
  // 시급 1만원으로 최대한 일하는 경우
  earnings('별', 10000)

  // 시급 1만원으로 52시간 일한 경우
  earnings('인성', 10000, 52)
