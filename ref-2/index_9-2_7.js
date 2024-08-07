// 사각형 클래스
class Square {
  #length

  constructor (length) {
    if (length <= 0) {
      throw '길이는 0보다 커야 합니다.'
    }
    this.#length = length
  }
  getPerimeter () { return 4 * this.#length }
  getArea () { return this.#length * this.#length }
}

// 클래스 사용하기
const square = new Square(10)
square.length = -10
console.log(`정사각형의 둘레: ${square.getPerimeter()}`) // 정사각형의 둘레: 40
console.log(`정사각형의 넓이: ${square.getArea()}`) // 정사각형의 넓이: 100