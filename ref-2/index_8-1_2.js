document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1')
  if (h1) {
    h1.textContent = '안녕하세요'
  } else {
    console.log('h1 태그를 추출할 수 없습니다.')
  }
})