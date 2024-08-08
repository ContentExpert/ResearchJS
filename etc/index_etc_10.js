let x = 'a';
let y = 'b';

[x,y] = [y,x]; // swap

assert.equal(x, 'b');
assert.equal(y, 'a');