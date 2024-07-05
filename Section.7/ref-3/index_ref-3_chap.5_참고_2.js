// ... (앞부분 삭제)
var partial3 = function () {
  // ... 생략 ...
  return function () {
    // ... 생략 . . .
    for(var i = 0; i < partialArgs.length; i++) {
    if (partialArgs[i] == Symbol.for( 'EMPTY_SPACE')) { // 바뀐 부분.
        partialArgs[i] = restArgs.shift();
      }
    }
    return func.apply(this, partialArgs.concat(restArgs));
  };
};
// ...생략...
var _ = Symbol.for('EMPTY_SPACE'); //  추가된 부분
var addPartial = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10));