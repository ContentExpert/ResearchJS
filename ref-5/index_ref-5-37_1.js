function CSVReader(separators) {
    this.separators = separators || [","];
    this.regexp = new RegExp(this.separators.map(function(sep) {
        return "\\" + sep[0];
    }).join("|"));
}