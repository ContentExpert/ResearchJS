Diet.prototype.pick = function() {
    for (var key in this.elements) {
        if (this.has(key)) {
        return key;
        }
    }
    throw new Error("empty dictionary");
};
WorkSet.prototype.pick = function() {
    return this.entries.pick();
}