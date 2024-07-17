var y = "global";
function test(src) {
    eval(src); // 아마도 동적으로 바인딩된다
    return y;
}
test("var y = 'local';")// "local"
test("var z = 'local';"); // "global"
