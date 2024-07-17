var x = "global";
function test() {
    var x = "local";
    var f = eval;
    return f("x"); // 간접적인 eval
}
test(); // "global"