// server call -> returns weather data (only three vales ->sunny,cloudy,rainy)
let weather='rainy'

// frontend display logic
// if-else flow
if (weather==='cloudy') {
    console.log("jacket le jana")
}else if(weather==='rainy'){
    console.log("raincoat phen ke jana")
}else{
  console.log("wear cotton clothes, garmi ha ji")
}

// assigning conditionsals to variable
let result= weather==='cloudy';
console.log("result: ",result);