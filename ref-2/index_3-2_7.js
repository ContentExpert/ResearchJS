const score = Number(prompt('학점을 입력해주세요.','학점'))
if (score === 4.5){
    alert('신')
  } else if (4.2 <= score) {
    alert('교수님의 사랑')
  } else if (3.5 <= score) {
    alert('현 체제의 수호자')
  } else if (2.8 <= score) {
    alert('일반인')
  } else if (2.3 <= score) {
    alert('일탈을 꿈꾸는 소시민')
  } else if (1.75 <= score) {
    alert('오락문화의 선구자')
  } else if (1.0 <= score) {
    alert('불가촉천민')
  } else if (0.5<= score) {
    alert('자벌레')
  } else if (0 <= score) {
    alert('플랑크톤')
  } else {
    alert('시대를 앞서가는 혁명의 씨앗')
}