// let csvArray = [
//     "Name, Age, City" // Initial first row with 3 columns
//   ];
  
//   // Set the number of columns for the first row
//   let numberOfColumns = 5; // Define the number of columns you want
  
//   // Create a string with the specified number of columns
//   let newFirstRow = "";
//   for (let i = 0; i < numberOfColumns; i++) {
//     if (i < numberOfColumns - 1) {
//       newFirstRow += "Column" + (i + 1) + ", "; // Adding columns with labels
//     } else {
//       newFirstRow += "Column" + (i + 1); // Avoiding a trailing comma
//     }
//   }
  
//   csvArray[0] = newFirstRow; // Update the first row in the CSV array
  
//   console.log(csvArray);


// let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// // Split the CSV data into rows based on newline character '\n'
// let rows = csvData.split('\n');

// // Initialize a two-dimensional array to store CSV data
// let csvArray2 = [];

// // Process each row to split columns and store in the array
// rows.forEach(row => {
//   let columns = row.split(','); // Split each row into columns based on comma ','
//   csvArray2.push(columns);
// });

// console.log(csvArray2);

let data = [
    ['Name', 'Age', 'City'],
    ['John', 25, 'New York'],
    ['Alice', 30, 'San Francisco'],
    ['Bob', 28, 'Los Angeles']
  ];
  
  // Assuming the first row contains keys, create objects
  let objectsArray = [];
  let keys = data[0]; // Extract keys from the first row
  
  // Loop through the remaining rows to create objects
  for (let i = 1; i < data.length; i++) {
    let obj = {};
    for (let j = 0; j < keys.length; j++) {
      obj[keys[j]] = data[i][j]; // Create object properties with corresponding values
    }
    objectsArray.push(obj);
  }
  
  console.log(objectsArray);
  

/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"))
console.log(reverseString2("!dlroW olleH"))
console.log(reverseString3("!dlroW olleH"))
console.log(reverseString4("!dlroW olleH"))
console.log(reverseString5("!dlroW olleH"))


// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 }
//   // ... other objects
// ];

// function sortByAge(a, b) {
//   return a.age - b.age;
// }

// // Sorting the 'people' array by age using the 'sortByAge' callback function
// const sortedByAge = people.slice().sort(sortByAge);

// console.log("Sorted by age:", sortedByAge);


// const people = [
//   { name: 'Alice', age: 30, occupation: 'Engineer' },
//   { name: 'Bob', age: 25, occupation: 'Doctor' },
//   { name: 'Charlie', age: 35, occupation: 'Teacher' }
//   // ... other objects
// ];

// function transformPerson(person) {
//   return {
//     name: person.name,
//     age: person.age + 1,
//     job: person.occupation // Changing 'occupation' key to 'job'
//   };
// }

// // Mapping the 'people' array to transform each person object
// const transformedPeople = people.map(transformPerson);

// console.log("Transformed array:", transformedPeople);


function incrementAgeInArray(arr, incrementValue) {
  arr.forEach(person => {
    if (typeof person.age === 'number') {
      person.age += incrementValue;
    }
  });
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Chet', age: 7 },
];

console.log("Before increment:", people);
incrementAgeInArray(people, 5); // Incrementing age by 5 for each person
console.log("After increment:", people);
