var constructor = function() { return null; };
var f = function f() {
    return constructor();
};
f(); // {} (ES3 실행 환경)