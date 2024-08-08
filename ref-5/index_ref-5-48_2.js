Member.prototype.inNetwork = function(other) {
    var visited = {};
    var workset = {};
    workset[this.name] = this;
    for (var name in workset) {
        var member = workset[name];
        delete workset [name]; // 열거하는 동안 수정됨
        if (name in visited) { // 멤버에 다시 접근하지 않음
            continue;
        }
        visited[name] = member;
        if (member === other) { // 찾았으면?
            return true;
        }
        member.friends.forEach(function(friend) {
            workset[friend.name] = friend;
        });
    }
    return false;
};