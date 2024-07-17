function swap(a, i, j) {
    temp = a[i]; // 전역 변수
    a[i] = a[j];
    a[j] = temp;
}