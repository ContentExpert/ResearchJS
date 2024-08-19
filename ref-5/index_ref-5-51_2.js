var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
var result = Array.prototype.map.call(arrayLike, function(s) {
    return s.toUpperCase();
}); // ["A", "B", "C"]
