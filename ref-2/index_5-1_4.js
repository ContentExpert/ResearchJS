function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`) // 2020년은 윤년일까? === true
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`) // 2010년은 윤년일까? === false
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`) // 2000년은 윤년일까? === true
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`) // 1900년은 윤년일까? === false