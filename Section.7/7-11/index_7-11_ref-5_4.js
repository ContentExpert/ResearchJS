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
source.forEach(buffer.add, buffer);

console.log(buffer.concat()); // 867-5309