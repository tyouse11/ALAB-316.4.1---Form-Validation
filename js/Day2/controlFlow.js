let num = -8

if(num > 0){
    console.log("Yay")
} else {
    console.log("Also, yay")
}


let ageOfUser = 19
let userOutfit = "black"

// if(ageOfUser >= 18 && userOutfit == "green"){
//     console.log("You can enter")
// } else {
//     console.log("Access Denied")
// }

 if(ageOfUser >=18){
    if(userOutfit == "green"){
    console.log("You may enter")
    } else {
        console.log("Wrong gear, my friend")
    }
} else {
    console.log("Access Denied")
}

//Exercise
let testnum = -111

// if(testnum >= 0){
//     if(testnum >100){
//         console.log("positive and >100")
//     }else if {
//         console.log("positive and <100")
//     }
// } else {
//     console.log("negative")
// }

//Exercise
let grade = 80

    if(grade >= 90){
        console.log("A")
    } else if(grade >= 80){
        console.log("B")
    }else if(grade >=70){
        console.log("C")
    }else if(grade >=60){
        console.log("D")
    }else {
        console.log("F")
    }

//ternary operator
//is the age >= 18 ...yes "you may enter" : no "Access denied"
    (ageOfUser >= 18) ? (console.log('You may enter')) : (console.log('Access Denied'))

//     let x = 10;

// try {
//     if (x < 0) {
//         console.log("Negative!");
//     } else {
//         throw "Error - I don't know what I'm doing.";
//     }
// } catch (error) {
//     console.log(error);
// }

// console.log("Does this log?");

let x = 10;

try {
	if (x > 0) {
		let isEven = (x % 2 == 0) ? true : false;
	} else if (x <= 0) {
		throw "Error - Value of 0 or below.";
	}

	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(x);
}