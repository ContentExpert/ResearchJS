a = Boolean(0);
b = Boolean(NaN);
c = Boolean('');
d = Boolean(null);
e = Boolean(undefined);

console.log(a); // false
console.log(b); // false
console.log(c); // false
console.log(d); // false
console.log(e); // false

x = typeof(a);
y = typeof(b);
z = typeof(c);
m = typeof(d);
n = typeof(e);

console.log(x); // boolean
console.log(y); // boolean
console.log(z); // boolean
console.log(m); // boolean
console.log(n); // boolean
