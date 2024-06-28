function diff(x, y) {
    if (x > y) {
        var tmp = x; // tmp는 함수 스코프입니다.
        x = y;
        y = tmp;
    }
    return y - x;
}