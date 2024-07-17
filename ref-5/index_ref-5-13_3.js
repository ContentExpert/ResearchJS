function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function() {
            var j = i;
            result[i] = function() { return a[j]; };
    })();
    }
    return result;
}