var buffer = {
    entries: [],
    add: function(s) {
        this.entries.push(s);
    },
    concat: function() {
        return this.entries.join('');
    }
};

var source = ['867', '-', '5309'];
source.forEach(function(s) {
    buffer.add(s);
});

console.log(buffer.concat()); // 867-5309