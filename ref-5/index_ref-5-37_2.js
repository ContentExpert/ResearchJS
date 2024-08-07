CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        return line, split(this. regexp); // 오류!
    });
};
var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n"); // [["a,b,c"], ["d,e,f"]]