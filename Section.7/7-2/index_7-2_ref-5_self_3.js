function trimSections(header, body, footer) {
    for (var i = 0, n = header.length; i < n; i++) {
        header[i] = header[i].trim();
    }
    for (var i = 0, n = body.length; i < n; i++) {
        body[i] = body[i].trim();
    }
    for (var i = 0, n = footer.length; i < n; i++) {
        footer[i] = footer[i].trim();
    }
    return [header, body, footer];
}

var h = ["  Hello ", "  World  ", "  This is header  "];
var b = ["  This is ", "  the body  ", "  of the document  "];
var f = ["  This is ", "  the footer  ", "  of the document  "];

console.log(trimSections(h, b, f));