function sandwichMaker(magicingredient) {
    return function(filling) {
        return magicingredient + " and " + filling;
    };
}