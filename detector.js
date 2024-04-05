function calculateDemerits(){
    const speedLimit = 70;
    const maxDemerits = 12;
// The value is passed as an integer using parseInt
const speed = parseInt(document.getElementById("speed").value);
let points = 0;
//checks if speed is less than speed limit
if (speed <= 70) {
   console.log("Ok")
   result = "Ok";
}
// Driver is given 1 demerit point for every 5km/hr above 70km/hr
else if (
   points = Math.floor((speed - 70) / 5)) {
   console.log("Point:", points)
   result = "Point:" + points;
}
// If demerit points exceed 12, it prints "License Suspended" 
if (points > 12) {
   console.log("License Suspended")
   result = "License Suspended"
}
document.getElementById("result").textContent = `${result}`;
}
// Example usage
// calculateDemerits(80);
// calculateDemerits(69);
// calculateDemerits(150);