function commitAction() {
    do {
        let result = commit();
        var done = result && result.code == 1;
    } while (!done);
}
