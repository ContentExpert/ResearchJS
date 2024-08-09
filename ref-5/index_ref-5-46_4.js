var total = 0, count = 0;
for (var key in ratings) { // 예측 불가능한 순서
    total += ratings[key];
    count++;
}
total /= count;
total; // ?