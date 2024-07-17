var x = "global";
function test() {
    var x = "local";
    return eval("x"); // 직접적인 eval
}
test(); // "local"