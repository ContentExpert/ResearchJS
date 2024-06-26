function playVideo() {
    console.log(this);
}

playVideo.call({ name: 'Mosh' });