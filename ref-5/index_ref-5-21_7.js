var buffer = {
    state: [],
    append: function() {
        for (var i = 0, n = arguments.length; i < n; i++) {
            this.state.push(arguments[i]);
        }
    }
};