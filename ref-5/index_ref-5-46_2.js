function report(highScores) {
    var result = "";
    for (var i = 0, n = highScores.length; i < n; i++) {
        var score = highScores[i];
        result += (i + 1) + ", " +
        score.name + ": " + score.points + "\n";
    }
    return result;
}
report([{ name: "Hank", points: 1110100 },
    { name: "Steve", points: 1064500 },
    { name: "Billy", points: 1050200 }]);
// "1. Hank: 1110100\n2. Steve: 1064500\n3. Billy: 1050200\n"