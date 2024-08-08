Member.prototype.inNetwork = function(other) {
    var visited = {};
    var worklist = [this];
    while (worklist.length > 0) {
        var member = worklist.pop();
        if (member.name in visited) { // 다시 접근하지 않음
            continue;
        }
        visited[member.name] = member;
        if (member === other) { // 찾았으면?
            return true;
        }
        member.friends.forEach(function(friend) {
            worklist. push (friend); // 작업-목록에 추가
        });
    }
    return false;
};