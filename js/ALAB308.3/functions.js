// function add(){ //function declaration
//     return(2+4)
// }

// let sum = add() //calling(invoking) the function

// console.log(sum)


// const sayHello = function(name){ //Function expression
//     console.log('Hello, ' + name + "!")
// } 

// fnDeclaration();  // thank you function declarations :)
// fnExpression();  // TypeError: fnExpression is not a function

// function fnDeclaration() {
// 	console.log("I'm coming from a function declaration.");
// }

// const fnExpression = function() {
// 	console.log("I'm coming from a function expression.");
// };

// // Function Declaration
// function add(a, b) {
// 	return a + b;
// }
// // Arrow Function
// const add2 = (a, b) => a + b;

// add(25, 100)


// //Exercise
// function areBothEven(n1, n2) {
//     return !(n1 % 2) && !(n2 % 2)
//   }

// console.log(areBothEven(4,6))

//Practice Activity 1: Function Declaration
// let w = 5
// let h = 6

// function computeArea(w, h){
//     return w * h
// }

// console.log("The area of a rectangle with a width of " + w + " and a height of " + h + " is " + computeArea(w,h) + " square units.")


// //Practice Activity 2: Function Expression
// const planetHasWater = (planet) => 
//     planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars'


// console.log(planetHasWater('Earth'))
// console.log(planetHasWater('mars'))
// console.log(planetHasWater('venus'))


// //functions as arguments
// var a = ['red', 'green', 'blue'];

// a.forEach(function(color) {
//   console.log(color); //prints out each color in the array
// });


// function hoist() {
// 	console.log(x);  // outputs ReferenceError
// 	let x = 25;
// 	console.log(x);
// }


// // //passBy Value
// // let myVar = 20;

// // function passBy(x) {
// //     x = x * 10;
// //     return x
// // }

// // console.log(passBy(myVar))


// let myVar = { value: 20, type: 'Number' }

// function passBy(x) {
//     x.value = x.value * 20;
//     return x.value
// }

// console.log(myVar);               // 20
// console.log(passBy(myVar));       // 400
// console.log(myVar);               // 400


let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];

function returnEven(array) {
    let newArray = [];

    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

let newArray = returnEven(numArray);



newArray[0].value += 10;        // adds 10 to 10 = 20

numArray[3].value = 67;         // -10 becomes 67

let myEvenValue = newArray[1].value;    //expecting 20
myEvenValue /= 2;       // expecting 10


console.log(myEvenValue)
console.log(numArray)
console.log(newArray)