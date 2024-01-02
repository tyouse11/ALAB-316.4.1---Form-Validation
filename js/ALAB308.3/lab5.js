//Part 1

//Take an array of numbers and return the sum
const numbers = [3, 7, 1, 15, 9, 23, 52, 89]

function calclulateSum(n) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
const sumResult = calclulateSum(numbers)
console.log("Sum: " + sumResult)



//Take an array of numbers and return the average
function calclulateAverage(n) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length
}
const averageResult = calclulateAverage(numbers)
console.log("Average: " + averageResult)


//Take an array of strings and return the longest string
const stringArray = ["pickles", "chicken", "pizza", "treefrog", "moss", "javascript is the wild, wild, west"]

function findLongestString() {
    let longest = ''

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > longest.length) {
            longest = stringArray[i]
        }
    }
    return longest
}

const longestString = findLongestString(stringArray)
console.log("Longest String: " + longestString)


//Take an array of strings, and a number and return an array of the strings that are longer than the given number

let minLength = 6

function stringsByLength(strings, minLength) {
    const stringsLongerThan = []

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > minLength) {
            stringsLongerThan.push(strings[i])
        }
    }
    return stringsLongerThan
}
  
const stringsLongerThan = stringsByLength(stringArray, minLength)
console.log("Strings longer than " + minLength + ": " + stringsLongerThan)

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
const givenNumber = 9

function printNumbers(n) {
    if (n <= 0) {
      return
    }
  
    printNumbers(n - 1)
    console.log(n)
  }
  
  
  printNumbers(givenNumber)
  


  //Part 2

  //sort an objects array by age

  let objArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function sortByAge(a, b) {
    return a.age - b.age
}

const sortedByAge = objArray.slice().sort(sortByAge)

console.log("Sorted by age: ", sortedByAge)


//filter the array to remove entries with an age greater than 50

function filterByAgeGreaterThan50(obj) {
    return obj.age >= 50
}

const filteredByAge = objArray.filter(filterByAgeGreaterThan50)
console.log("Ages greater than 50:", filteredByAge)

//map the array to change the "occupation" key to "job" and increment every age by 1

function changeOandA(object) {
    return {
        id: object.id,
        name: object.name,
        job: object.occupation,
        age: parseInt(object.age) + 1
    }
}

const transformedKV = objArray.map(changeOandA)

console.log("Updated array:", transformedKV)


//Use the reduce method to calculate the sum of the ages
//Then use the result to calculate the average age

function sumOfObjectAges(a, o) {
    return a + parseInt(o.age)
}

const objectAgesTotal = objArray.reduce(sumOfObjectAges, 0)
console.log("Sum of Ages:", objectAgesTotal)

const objectAgesAverage = objectAgesTotal / objArray.length
console.log("Average of Ages:", objectAgesAverage)


//Part 3
//develop function that takes an object and increments its age field

function incrementAgeInArray(arr, incrementValue) {
    arr.forEach(person => {
      if (typeof person.age === 'number') {
        person.age += incrementValue
      }
    })
  }
  
  const people = [{ id: "42", name: "Bruce", occupation: "Knight", age: 41 },
  { id: "48", name: "Barry", occupation: "Runner", age: 0 },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
  { id: "7", name: "Bilbo", occupation: "None", age: 111 }]
  

  console.log("Before increment:", people)
  incrementAgeInArray(people, 5)
  console.log("After increment:", people)


//Take an object, make a copy, and increment the age field of the copy. Return the copy

function incrementAgeAndReturnCopy(obj, incrementValue) {
  
    const copiedObject = { ...obj }
  
    if (typeof copiedObject.age === 'number') {
      copiedObject.age += incrementValue
    }
  
    return copiedObject
  }
  
  const person = { id: "48", name: "Barry", occupation: "Runner", age: 0}
  const updated_at = new Date()
  

  const modifiedPerson = incrementAgeAndReturnCopy(person, 5)
  console.log("Original:", person)
  console.log("Modified copy:", modifiedPerson, "Updated at: " + updated_at)
