function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function(j) {
            result[i] = function() { return a[j]; };
    })(i);
    }
    return result;
}