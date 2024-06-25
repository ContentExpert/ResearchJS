function createCircle() {
    return {
        radius : 1,
        location : {
            x : 1,
            y : 1
        },
        isVisible : true,
        draw : function() {
            console.log('draw');
        }
    };
}
