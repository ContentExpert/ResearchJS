let user = {
    name: "John",
    age: 30
};
  
// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, age:30이 차례대로 출력
}