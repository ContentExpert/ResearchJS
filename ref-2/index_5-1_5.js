function sumAll(a,b) {
  let output = 0
  for (let i = a; i <= b; i++) {
    output += i
  }
return output
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`) // 1부터 100까지의 합: 5050
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`) // 1부터 500까지의 합: 125250