function test(x) {
    eval("var y = x;"); // 동적인 바인딩
    return y;
    }
    test("hello"); // "hello"
