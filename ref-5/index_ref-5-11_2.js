function sandwichMaker() {
    var magicingredient = "peanut butter";
    function make(filling) {
        return magicingredient + " and " + filling;
    }
    return make;
}
var f = sandwichMaker();
f("jelly"); // "peanut butter and jelly"
f("bananas"); // "peanut butter and bananas"
f("marshmallows"); // "peanut butter and marshmallows"