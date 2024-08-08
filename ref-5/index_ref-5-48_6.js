Member.prototype.inNetwork = function(other) {
    var visited = {};
    var workset = new WorkSet();
    workset.add(this.name, this);
    while (!workset.isEmpty()) {
        var name = workset.pick();
        var member = workset.get(name);
        workset.remove(name);
        if (name in visited) { // 멤버에 다시 접근하지 않음
            continue;
        }
        visited[name] = member;
        if (member === other) { // 찾았으면?
            return true;
        }
        member.friends.forEach(function(friend) {
            workset.add(friend.name, friend);
        });
    }
    return false;
};