function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            let color = 'red'
        }
    }

    console.log(color); // ReferenceError: color is not defined
}

start();