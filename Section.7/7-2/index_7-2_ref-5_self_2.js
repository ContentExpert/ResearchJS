function isWinner(player, others) {
    var highest = 0;
    for (var i = 0, n = others.length; i < n; i++) {
        var otherPlayer = others[i];
        if (otherPlayer.score > highest) {
            highest = otherPlayer.score;
        }
    }
    return player.score > highest;
}

var player1 = {name: "Alice", score: 50};
var others = [{name: "Bob", score: 40}, {name: "Charlie", score: 45}];

console.log(isWinner(player1, others)); // true