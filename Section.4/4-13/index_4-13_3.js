function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('OK');
    else {
        let points = (speed - speedLimit) / kmPerPoint;
    }
}
