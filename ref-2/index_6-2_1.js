// power() 메소드를 추가합니다.
Number.prototype.power = function (n = 2) {
    return this.valueOf() ** n
}

// Number 객체의 power() 메소드를 사용합니다.
const a = 12
console.log('a.power():', a.power()) // a.power(): 144
console.log('a.power(3):', a.power(3)) // a.power(3): 1728
console.log('a.power(4):', a.power(4)) // a.power(4): 20736