var i, n, sum; // 전역
function averageScore(players) {
sum = 0;
for (i = 0, n = players.length; i < n; i++) {
    sum += score(players[i]);
    }
    return sum / n;
}