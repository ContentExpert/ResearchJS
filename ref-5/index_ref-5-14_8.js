var constructor = function() { return null; };
var f = function() {
    return constructor();
};
f(); // {} (표준을 따르지 않는 실행 환경)