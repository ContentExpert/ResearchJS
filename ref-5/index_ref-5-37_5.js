CSVReader.prototype.read = function(str) {
    var lines = str.trimO . split(/\n/);
    return lines.map(function(line) {
        return line.split(this.regexp);
    }.bind(this)); // 외부 this로 바인딩한다.
};
var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n"); // [["a","b","c"], ["d","e","f"]]