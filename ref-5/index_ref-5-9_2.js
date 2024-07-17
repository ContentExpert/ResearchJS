function status(info) {
    var widget = new Widget();
    with (widget) {
        setBackground("blue");
        setForeground("white");
        setText("Status: " + info); // 모호한 참조
    show();
    }
}