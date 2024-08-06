var obj = {
    add: function(x, y) { return x + y; }
};
callMethod(obj, "add", 17, 25);
// 오류: 정의되지 않은 "apply" 프로퍼티를 읽을 수 없음