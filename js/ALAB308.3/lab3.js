//Part 1: Fizz Buzz

//Loop through all numbers from 1 to 100
//If a number is divisible by 3, log "Fizz"
//If a number is divisible by 5, log "Buzz"
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.
for (let i = 0; i <= 100; i++){
 	if (i % 3 === 0){
	 	console.log("Fizz")
	}else if (i % 5 === 0){
		console.log("Buzz")
	}else if (i % 3 === 0 && i % 5 === 0){
		console.log("Fizz Buzz")
	}else {
		console.log(i)
	}
}


//Part 2: Prime Time

//Decalare an arbitrary number, n
//Create a loop that searches for the next prime number, starting at n and incrementing from there
//As soon as you find the prime number, log that number and exit the loop.

let n = 2; 
while (n < 50) {
    let isPrime = true;
    let factor = 2;
    while (factor <= Math.sqrt(n)) {
        if (n % factor === 0) {
            isPrime = false;
            break;
        }
        factor++;
    }
    if (isPrime) {
        console.log(n);
    }
    n++;
}


//Part 3: Feeling Loopy
const str= `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26`;

for (const c of str) {
 	if (c == ",") {
 		continue
 	}else if (c == "\r" || "\n"){
        console.log("\n")
    }
	console.log(str);
    break
}

//Part 3 continued
const str2= `Index,Mass (kg),Spring 1 (m),Spring 2
(m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,
0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.20
4,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

for (const s of str2) {
 	if (s == ",") {
 		continue
 	}else if (s == "\r" || "\n"){
        console.log("\n")
    }
	console.log(str2);
    break
}