function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Mosh' } ,1, 2);
playVideo.apply({ name: 'Mosh' }, [1, 2]);
const fn = playVideo.bind({ name: 'Mosh' });
fn();

playVideo();