const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function playVideo() {
    console.log(this);
};

playVideo();