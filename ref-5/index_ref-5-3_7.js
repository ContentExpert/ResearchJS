var a = NaN;
a !== a; // true
var b = "foo";
b !== b; // false
var c = undefined;
c !== c; // false
var d = {};
d !== d; // false
var e = { valueOf: "foo" };
e !== e; // false