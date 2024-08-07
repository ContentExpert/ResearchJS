function f() {
    "use strict";
    return f.caller;
}
f(); // 오류 : caller는 스트릭트 함수에서 접근할 수 없음