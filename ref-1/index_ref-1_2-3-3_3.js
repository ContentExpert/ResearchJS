let hours = (new Date()).getHours(); // 현재 시간을 구하는 코드입니다.
console.log(hours < 3 || 8 < hours); // true
console.log(3 <= hours && hours <= 8); // false