// 자료를 생성합니다.
const data = [{
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
},{
    name: 'HTML5 웹 프로그래밍 입문',
    price: 26000,
    publisher: '한빛아카데미'
}]

// 자료를 JSON으로 변환합니다.
console.log(JSON.stringify(data))
console.log(JSON.stringify(data, null, 2))