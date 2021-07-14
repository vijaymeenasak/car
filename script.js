const totalDistance = document.querySelector(".dist")
const petEl = document.querySelector(".petrol")
let distanceTravelled = 0 ;
let petrolConsumed = 0 ;
let petrolRefill = 30 ;
let petrolRemaining = 50 ;
let petrolPump = [3,7,9,11,15,19];


function start(){
    let initalDistance = Math.trunc(Math.random()*5+1)
    console.log("random distance between 1-6" + initalDistance);
    distanceTravelled = distanceTravelled + initalDistance ;
    //distanceTravelled += initalDistance ;
    //totalDistance.textContent = "Total Distance Travelled :" + distanceTravelled + "km";
   if (distanceTravelled >= 100 || petrolRemaining<=0) {
    totalDistance.textContent = "game over";
    distanceTravelled = 0 ;
   }else {
    totalDistance.textContent = "Total Distance Travelled :" + distanceTravelled + "km"} 

    let petrolUsed = initalDistance/0.5;

    petrolConsumed = petrolUsed + petrolConsumed ; 

    console.log( "petrol used " + petrolUsed);

    console.log("petrol consumed " + petrolConsumed);

    if(petrolPump.indexOf(distanceTravelled) !== -1) {
        petrolRemaining = petrolRemaining - petrolConsumed + petrolRefill;

        console.log(petrolRemaining + "petrol pump ");
    }else {
        petrolRemaining = petrolRemaining - petrolConsumed ;
        console.log(petrolRemaining + "petrol remaining");
    }

    

    //petEl.textContent = "petrol consumed :" + petrolRemaining + "L"

    if (petrolRemaining<= 0 || distanceTravelled >= 100){
        petEl.textContent = "game over"
        totalDistance.textContent = "game over";2

        //petrolRemaining = 50;

        //distanceTravelled =0 ;

    } else {
        petEl.textContent = "petrol consumed :" + petrolRemaining + "L"
    }

    /*if(petrolRemaining<=0){
        petEl.textContent = "game over";
        petrolRemaining = 50 ;
    }else{
        petEl.textContent = "petrol consumed :" + petrolRemaining + "L"
    } */




    





    
    
    
 }