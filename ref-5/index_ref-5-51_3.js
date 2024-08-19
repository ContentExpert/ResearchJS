var result = Array.prototype.map.call("abc", function(s) {
    return s.toUpperCase();
}); // ["A", "B", "C"]