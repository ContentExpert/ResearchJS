function report(highScores) {
    var result = "";
    var i = 1;
    for (var name in highScores) { // 예측 불가능한 순서
        result += i + ". " + name + ": " +
        highScores[name] + "\n";
        i++;
    }
    return result;
}
report([{ name: "Hank", points: 1110100 },
    { name: "Steve", points: 1064500 },
    { name: "Billy", points: 1050200 }]);
// ?