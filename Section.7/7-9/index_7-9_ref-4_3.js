function getStudents() {
    try {
        // 실제로 블록 스코프가 아닙니다.
        var records = fromCache("학생");
    }
    catch (err) {
        // 앗, 기본값으로 재할당됩니다.
        var records = [];
    }
    // ...
}