// Code your solution in this file!
function distanceFromHqInBlocks(street) {
   if (street >= 42) {
    return (street-42);
} else {
  return (42-street);
}
}

function distanceFromHqInFeet (streetFeet) {
  if (streetFeet >= 42){
    return ((streetFeet-42) * 264);
  } else {
    return ((42-streetFeet) * 264);
  }
}

function distanceTravelledInFeet (number1,number2) {
  if (number1 >= number2){
    return ((number1-number2) * 264);
  } else {
    return ((number2-number1) * 264);
  }
}

function calculatesFarePrice (number1,number2) {
   if (number1 >= number2) {
   let feet = ((number1-number2) * 264)
   if (feet < 400) {
     return 0;
   }
     else if (feet > 400 && feet < 2000) {
       return ((feet-400)*0.02);
     }
     else if (feet > 2000 && feet < 2500) {
       return 25;
     }
     else if (feet > 2500) {
       return 'cannot travel that far';
     }
   } else {
    let feet = ((number2-number1) * 264);
    if (feet < 400) {
     return 0;
   }
     else if (feet > 400 && feet < 2000) {
       return ((feet-400)*0.02);
     }
     else if (feet > 2000 && feet < 2500) {
       return 25;
     }
     else if (feet > 2500) {
       return 'cannot travel that far';
     }
   }
}
