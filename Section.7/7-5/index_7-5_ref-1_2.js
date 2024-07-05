function print(name, count = 1) {
    count || 1; // 짧은 조건문을 이용한 초기화
    count = typeof(count) != 'undefined' ? count : 1; // 조건 연산자를 활용한 초기화

    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과') // 사과이/가 1개 있습니다.