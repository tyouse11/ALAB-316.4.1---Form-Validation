//The total distance of the trip is 1500 miles
const trip = 1500;


//Car's fuel efficiency is as follows:
const at55mph = 30;
const atsixtymph = 28;
const atseventyfivemph = 23;

//How many gallons of gas needed per speed
let trip1 = trip/at55mph;
console.log("Trip @ 55mph - Gallons needed: " + trip1);
let trip2 = trip/atsixtymph;
console.log("Trip @ 60 mph -Gallons needed: " + trip2);
let trip3 = trip/atseventyfivemph;
console.log("Trip @ 75 -Gallons needed: " + trip3);

//The average cost of fuel is $3
//the following calculation takes the number of gallons
//needed per speed and multiplies it by the cost of gas
//to find the total amount needed per speed
const gas = 3;

let trip1cost = trip1 * gas;
console.log("Cost of fuel at 55mph is $" + trip1cost);
let trip2cost = trip2 * gas;
console.log("Cost of fuel at 60mph is $" + trip2cost);
let trip3cost = trip3 * gas;
console.log("Cost of fuel at 75mph is $" + trip3cost);

//budget
//This calculation will tell which speed is valid for the budget
const budget = 175;
const isTrip1valid = trip1cost <= budget;
console.log("Your budget will cover your trip at 55mph: " + isTrip1valid);
const isTrip2valid = trip2cost <= budget;
console.log("Your budget will cover your trip at 60mph: " + isTrip2valid);
const isTrip3valid = trip3cost <= budget;
console.log("Your budget will cover your trip at 75mph: " + isTrip3valid);

//How long the trip will take
let trip1length = trip/55;
console.log("The length of the trip at 55mph will be " + trip1length + " hours long.");
let trip2length = trip/60;
console.log("The length of the trip at 60mph will be " + trip2length + " hours long.");
let trip3length = trip/75;
console.log("The length of the trip at 75mph will be " + trip3length + " hours long.");

