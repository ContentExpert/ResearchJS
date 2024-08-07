CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        return line.split(this.regexp);
    }, this); // 외부 this 바인딩을 콜백으로 전달한다.
};
var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n"); // [["a","b","c"], ["d","e","f"]]