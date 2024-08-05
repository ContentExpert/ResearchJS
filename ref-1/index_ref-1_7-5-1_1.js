// 현재 시간을 구합니다.
let date = new Date();

// 출력1
console.log(date); // 2024-08-05T09:25:06.274Z

// 시간을 더합니다.
date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 11);
date.setDate(date.getDate() + 3);

// 출력2
console.log(date); // 2026-07-08T09:25:06.274Z