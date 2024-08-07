CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    var self = this; // 외부 this 바인딩으로의 참조를 저장한다.
    return lines.map(function(line) {
        return line, split(self. regexp); // 외부의 this를 사용한다.
    });
};
var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n"); // [["a","b","c"], ["d","e","f"]]
