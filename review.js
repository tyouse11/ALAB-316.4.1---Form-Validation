/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let myVariable = "Hello, there!"
console.log(myVariable)

// 2.) Change the value of this variable
myVariable = "Goodbye!"
console.log(myVariable)

// 3.) Change the data type of this variable
myVariable = 52
console.log(myVariable)

// 4.) Create another variable and the one from above to concatenate
let concat = "apples"
console.log(myVariable + " " + concat)
// 5.) Use any of the variables above or create new ones and print using string interpolation
let greeting = `Hello, I have ${myVariable} ${concat}!`
console.log(greeting)
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let name = "Sabrina"
let letterI = name.charAt(4)
console.log(letterI)

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// Unicode - a standardized encoding system for text - it assigns a unique numerical value to each characher
let word = "Teddy"
let unicodeOfThirdCharacter = word.charCodeAt(2)
console.log(unicodeOfThirdCharacter)

// Using fromCharCode() - make it readable for us :). You'll see!
let characterFromUnicode = String.fromCharCode(unicodeOfThirdCharacter)
console.log(characterFromUnicode)

// Take your first and last name and concat()
let firstName = "Tiffany"
let lastName = "Youse"
let fullName = firstName.concat(" " + lastName)
console.log(fullName)

// Create a string and make it return true using startsWith()
let myString = "Baltimore Ravens are the best NFL team!"
let startsWithBaltimoreRavens = myString.startsWith("Baltimore Ravens")
console.log(startsWithBaltimoreRavens)

// Now use any variable with endsWith() and return false
let endsWithFalse = myString.endsWith("team")
console.log(endsWithFalse)

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
const completedSentence = ozgur + 'wondering how it gets so bright'
const includesMoon = completedSentence.includes('Moon')
console.log(includesMoon)

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
const cow = joshHadALittleLambOopsCow.indexOf("cow")
console.log(cow)

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
const laserbeam = vanessa.lastIndexOf("Vanessa")
console.log(laserbeam)

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
const length = noWeCantTeo.length
console.log(length)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
const replacement = replaceGokuWithVegeta.replace("Goku", "Vegeta")
console.log(replacement)

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
const rightWifey = joshIsLookingForWifey.search("wifey")
console.log(rightWifey)

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
const otherHalf = pizzaSentence.slice(pizzaSentence.indexOf("other"))
console.log(otherHalf)

// Now using the pizza sentence, return only pizza (before the comma)
const pizza = pizzaSentence.slice(0,5)
console.log(pizza)

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
const splitArray = splitTheBill.split(', ')
console.log(splitArray)

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
const charSplitArray = splitTheBill.split('')
console.log(charSplitArray)

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
const lowercaseAngry = angry.toLowerCase()
console.log(lowercaseAngry)

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const angryTuan = "I WAS SAVING THAT PIZZA FOR WHEN I GOT HOME"
const chillTuan = angryTuan.toLowerCase()
console.log("You meant to say it like this... " + chillTuan)

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
const respectedJuhlun = jahlunSaidToPutSomeRespectToHisName.toUpperCase()
console.log(respectedJuhlun)

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
const substringEll = basicGreeting.substring(1, 4)
console.log(substringEll)

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
const substringJavaScript = ohReally.substring(0, 11)
console.log(substringJavaScript)

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
const aolcom = aslDays.substring(aslDays.length - 7)
console.log(aolcom)

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let stringWithExtraSpaces = "     Some extra loving on both sides     "
let trimmedString = stringWithExtraSpaces.trim()
console.log(trimmedString)

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d !== a)
console.log(a != 15)
console.log(a < b < c)
console.log(c > b > a !== d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
let ken = "The room is spinning... "

for (let spinCount = 1; spinCount <= 10; spinCount++) {
    ken += "Spin " + spinCount + "... "
}

console.log(ken)

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
let teo = "My vision is spinning... "

for (let spinCount = 1; spinCount <= 20; spinCount++) {
    teo += "Spin " + spinCount + "... "
}

console.log(teo)

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let sorryCount = 1
let teoApology = ""

while (sorryCount <= 20) {
    teoApology += "I'm sorry. "
    sorryCount++
}

console.log(teoApology)

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}

for (let key in whateverQueenBeySaid) {
    console.log(whateverQueenBeySaid[key])
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']

for (let index in lana) {
    console.log(index)
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

for (let element of tia) {
    console.log(element)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']

perscholas.forEach(name => {
    const psAdded = name + " PS"
    console.log(psAdded)
})

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() - adds one or more elements to the end of an array and returns the new length of the array
// pop() - removes the last element from an array and returns that element
// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
// shift() - removes the first element from an array and returns that element
// concat() - combines two or more array or values into a new array
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// slice() - returns a shallow copy of a portion of an array into a new array object
// sort() - sorts the elements of an array in place. By defaults the elements are converted to strings and sorted as strings
// includes() - determines whether an array includes a certain element, returning "true" or "false" as appropriate
// indexOf() -  returns the first index at which a givent element can be found in the array, or -1 if not present
// length - property that returns the number of elements in an array

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
const joinedFruit = fruits.join(' ')
console.log(joinedFruit)

// Remove orange
const popOrange = fruits.pop()
console.log(popOrange)
console.log(fruits)

// Add strawberry, kiwi, and grapes at the end
fruits.push("strawberry" , "kiwi" , "grapes")
console.log(fruits)

// Remove apple
fruits.shift()
console.log(fruits)

// Add mango at the beginning of the array
fruits.unshift("mango")
console.log(fruits)

// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, "lemon", "grapefruit")
console.log(fruits)

// Remove banana and strawberry
fruits.splice(3,2)
console.log(fruits)

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
let exoticFruits = ["papaya", "guava", "starfruit"]
let concatFruits = fruits.concat(exoticFruits)

console.log(concatFruits)

// Print the last two exotic fruits without altering the newly concatenated array.
const lastTwo = concatFruits.slice(-2)
console.log(lastTwo)
console.log(concatFruits)

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort()
console.log(monalissaIsMessy)

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
mirrorMirrorOnTheWall.reverse()
console.log(mirrorMirrorOnTheWall)

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const badWords = ['badword']
console.log(badWords)
const wordsArray = RafaelNoBadWords.split(' ')
console.log(wordsArray)
const filteredWords = wordsArray.filter(word => !badWords.includes(word.toLowerCase()))
console.log(filteredWords)
const cleanedSentence = filteredWords.join(' ')
console.log(cleanedSentence)

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const total = numbersToAddUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(total)

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const originalArray = [1, 2, 3, 4, 5]
const copiedArray = [...originalArray]
console.log(copiedArray)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];

const connectedArray = [...array1, ...array2];

console.log(connectedArray);

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const withAddedElement = [...connectedArray, 'd']
console.log(withAddedElement)

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const begAddedElement = [0, ...connectedArray]
console.log(begAddedElement)

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log("Anthony wants " + donutShop[1][0][1])
// Tosi wants ihatethis. :) Print!
console.log(`Tosi wants ${donutShop[2][0][0][1][0]}`)

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
const person = 'Teo'
const gender = "male"
const hungry = false

if (person === 'Teo') {
  console.log("Teo is a person!")
  if (gender === 'male') {
    console.log('You got it right!')
    if (hungry === true) {
      console.log(`Let's buy Teo some tacos!`)
    } else if (hungry === false) {
      console.log("He doesn't need to eat")
    } else {
      console.log('If Teo is not hungry, am I hungry?')
    }
  } else {
    console.log('Wrong. Teo is going to remove you from the class.')
  }
} else {
  console.log('Teo is not a person')
} 

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const coolest = 'Gustavo'

const resultMessage = coolest === 'Gustavo' ? 'You got that right!' : `James wants to argue. He says he's the best!`

console.log(resultMessage)

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting() {
  console.log(`Hello, ma'amsir!`)
}

sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function customMessage(stringParam) {
  console.log(`This is my ${stringParam}`)
}

customMessage('function that takes in a string as a parameter.')

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(num1, num2, num3) {
  const result = num1 + num2 + num3
  console.log(`The sum is ${result}`)
}
number1 = 100
number2 = 77
number3 = 23

add(number1, number2, number3)

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name) {
  if (name === 'Teo') {
    return '1st rule: You do not talk about Fight Club.'
  } else if (name === 'Manara') {
    return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB'
  } else if (name === 'Liv') {
    return '3rd rule: If someone yells "Stop!", goes limp, taps, out, the fight is over.'
  } else if (name === 'Devin') {
    return '4th rule: Only two guys to a fight.'
  } else {
    return 'No shirts'
  }
}

console.log(fightClub('Teo'))
console.log(fightClub('Manara'))
console.log(fightClub('Liv'))
console.log(fightClub('Devin'))
console.log(fightClub('John'))

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
  console.log('Hello')

  return function() {
    console.log('Goodbye')
  }
}

const goodbyeFuntion = hello()
goodbyeFuntion()

// Create a function expression with your first name as the variable and then print your first and last name
const myFirstName = function() {
  const myLastName = 'Youse'
  console.log('My name is Tiffany ' + myLastName)
}

myFirstName()
// Create an arrow function that accepts a number and have it return that number doubled
const doubleNumber = (number) => {
  return number * 2
}

const doubleNumberResult = doubleNumber(25)
console.log(doubleNumberResult)

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
var human = {
  name: "John Doe",
  age: 25,
  location: "Bmore"
}



// Access the name using dot notation
console.log(human.name)

// Access the age using square brackets
console.log(human["age"])

// Use object destructuring to access location
const {location} = human
console.log(location)

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability)

// Print cut
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!!!
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7

console.log(bulbasaur)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1

console.log(bulbasaur)

// Print an array that contains every single properties in bulbasaur
const propertiesArray = Object.keys(bulbasaur)

console.log(propertiesArray)

// Print every single properties one by one in the console
for (const property in bulbasaur) {
  if (bulbasaur.hasOwnProperty(property)) {
    console.log(property + ": " + bulbasaur[property])
  }
}

// Print an array that contains every single values in bulbasaur
const valuesArray = Object.values(bulbasaur)

console.log(valuesArray)