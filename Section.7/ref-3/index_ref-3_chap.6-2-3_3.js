var _proto = Object.create(null);
_proto.getValue = function(Key) {
    return this[key];
};
var obj = Object.create(_proto);
obj.a = 1;
console.log(obj.getValue('a')); // 1
console.dir(obj);
