// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// //count down from 10 to 1
// for (let i =10; i > 0; i--){
// 	console.log(i)
// }

// //output odd numbers from 1 to 10
// for (let i = 0; i < 10; i++){
// 	if (i%2 !== 0){
// 		console.log(i)
// 	}
// }

// //output even numbers from 1 to 10
// for (let i = 0; i < 10; i++){
// 	if (i%2 == 0){
// 		console.log(i)
// 	}
// }

// //output multiples of 3, starting at 6 and ending at 60
// for (let i = 6; i <= 60; i++){
// 	if (i%3 == 0){
// 		console.log(i)
// 	}
// }

// //output an increasing number of # symbols, from 1 to 7
// for (let i = 0; i <= 7; i++){
// 	console.log('#'.repeat(i))
// }

//attempt to go through odds, evens, and prime numbers
// for (let i = 0; i <= 20; i++){
// 	if (i%2 == 0){
// 		console.log(i + " even")
// 	}else if (i%2 !== 0){
// 		console.log(i + " odd")
// 	}
// }

//Looping through iterables
// const str = "Hello World";
// console.log(str.length)

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

//For ... In Loops
// console.log("For ...In Loop...")
// const str2 = "Hello World";

// for (const i in str2) {
// 	console.log(str2[i]);
// }

//For ... Of Loop
// console.log("For ...Of Loop...")
// const str3 = "Hello World";

// for (const c of str3) {
// 	console.log(c);
// }




//the continue statement jumps to the afterthought expression...in this case it's saying to continue for each "l"
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

//In a for...in or for...of loop, the continue statement simply jumps to the next iteration (since there is no afterthought expression):
// const str = "Hello World";

// for (const i in str) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// for (const c of str) {
// 	if (c == "l") {
// 		continue;
// 	}

// 	console.log(c);
// }

//while loop
// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }

//same this but with for loop
// let y = 30;

// for (y = y/2 - 1; y >= 0; y = y/2 - 1) {
// 	if (y % 1 != 0) {
// 		break;
// 	}

// 	console.log(y);
// }

//count down to 0 from a given number
// let num = 10

// while(num >= 0){
// 	console.log(num)
// 	num--
// }

//log integers in multiples of 3 as long as they are less than 35
// let c = 0

// while (c <35 ){
// 	if (c % 3 === 0){
// 		console.log(c)
// 	}
// 	c++
// }

//log integers in multiples of 5 as long as they are less than 100
// let d = 0

// while (d <100 ){
// 	if (d % 5 === 0){
// 		console.log(d)
// 	}
// 	d++
// }

//Print integers between 0 and 20 with the following conditions: 
// All numbers divisible by 2 should be multiplied by 3 before they are output, All other integers should not be output.

// let num = 0

// while (num <= 20){
// 	if (num % 2 ){
// 		console.log(num*3)
// 	}
// 	num++
// }

//print all prime numbers between 0 and 20 - needs work

// let prime = 0

// while (prime <= 20){
// 	if (prime % 2 == 0){
// 		console.log(prime)
// 		}else if (prime % prime == 0 && prime % 1 == 0){
// 			console.log(prime + " is prime")
// 		}
// 		prime++
// 	}


//do while loop

// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while (x > 50);

//Labeled statements
let x = 1;
let y = 1;

myLoop: while (true) {
	console.log(`Outer loop ${x}.`);
	x++;

	while (true) {
		console.log(`Inner loop ${y}.`);
		y++;

		if (x == 5 && y % 5 == 0) {
			break myLoop;
		} else if (y % 5 == 0) {
			continue myLoop;
		}
	}
}