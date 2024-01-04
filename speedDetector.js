//create a function that will handle speed detection
function speedDetection (){

    //use promot to get user to input speed of car, which is then converted to a number
    const userSpeed = prompt("Enter speed of the car in km/h:");
    const speed = parseFloat(userSpeed);

    //check if input is valid
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
        return;
    }


    const speedLimit = 70;
    const kmOverSpeedLimit = speed - speedLimit;

    if (kmOverSpeedLimit <= 0 ){
        console.log('OK');
    }else {
        const demeritPoints = Math.floor(kmOverSpeedLimit / 5);
        console.log(`Demerit Points : ${demeritPoints}`);

        //check if license should be suspended
        if (demeritPoints > 12){
            console.log("License suspended!");
        }
    }

}
speedDetection();