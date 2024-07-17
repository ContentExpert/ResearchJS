function f(x, y) {
    with (Math) {
        return min( round(x), sqrt(y)); // 모호한 참조
    }
}