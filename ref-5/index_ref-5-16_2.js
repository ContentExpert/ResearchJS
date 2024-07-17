var y = "global";
function test(x) {
    if (x) {
        eval("var y = 'local';"); // dynamic binding // 동적인 바인딩
    }
    return y;
}
test(true); // "local"
test(false); // "global"
