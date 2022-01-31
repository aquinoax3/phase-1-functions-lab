

function distanceFromHqInBlocks(pickBlock){
    const hqLocation = 42;
    return Math.abs(pickBlock - hqLocation);
}



function distanceFromHqInFeet(feetFromHq) {
    const feet = distanceFromHqInBlocks(feetFromHq);
    return feet * 264;

}


function distanceTravelledInFeet(start, destination) {
    const manhattanBlockInFeet = 264;
    return Math.abs(destination - start) * manhattanBlockInFeet;
}

function calculatesFarePrice(start, destination) {
    const data = distanceTravelledInFeet(start, destination);

    if(data < 400){
        return 0
    } else if (data > 2500) {
        return 'cannot travel that far';
    } else if (data >= 2000) {
        return 25
    } else if (data < 2000) {
        return ((data) - 400) * .02 
    }

}
