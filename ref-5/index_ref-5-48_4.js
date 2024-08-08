function WorkSet() {
    this.entries = new Dict();
    this.count = 0;
}
WorkSet.prototype.isEmpty = function() {
    return this.count === 0;
};
WorkSet.prototype.add = function(key, val) {
    if (this.entries.has(key)) {
        return;
    }
    this.entries.set(key, val);
    this.count++;
};
WorkSet.prototype.get = function(key) {
    return this.entries.get(key);
};
WorkSet.prototype.remove = function(key) {
    if (!this.entries.has(key)) {
        return;
    }
    this.entries.remove(key);
    this.count--;
};