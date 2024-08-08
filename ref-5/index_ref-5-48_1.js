function Member(name) {
    this.name = name;
    this.friends = [];
}
var a = new Member("Alice"),
    b = new Member("Bob"),
    c = new Member("Carol"),
    d = new Member("Dieter"),
    e = new Member("Eli"),
    f = new Member("Fatima");
a. friends.push(b);
b. friends.push(c);
c. friends.push(e);
d. friends.push(b);
e. friends.push(d, f);