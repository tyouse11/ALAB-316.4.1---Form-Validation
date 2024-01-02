//Part 1
//old code
const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26`

for (const s of str) {
 	if (s == ",") {
 		continue
 	}else if (s == "\r" || "\n"){
        console.log("\n")
    }
	console.log(str);
    break
}

//new code
//Part 1

let csvArray = [`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`]

for (let i = 0; i < csvArray.length; i++){
    console.log(csvArray[i])
}
  

  //Part 2
  //Declare a variable that stores the number of columns in each row of data within the CSV.
 
  let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

  // Split the CSV data into rows based on newline character '\n'
  let rows = csvData.split('\n');
  
  // Initialize a two-dimensional array to store CSV data
  let csvArray2 = [];
  
  // Process each row to split columns and store in the array
  rows.forEach(row => {
    let columns = row.split(','); // Split each row into columns based on the commas ','
    csvArray2.push(columns);
  });
  
  console.log(csvArray2);


//Part 3: Transforming Data

//create an array of objects
let objectsArray = []
//make the keys the first row of the array and lowercase
let keys = csvArray2[0] 
let lcKeys = keys.map(obj => obj.toLowerCase())
console.log(lcKeys)


//loop through the remaining rows to create objects
for (let i = 1; i < csvArray2.length; i++) {
    let object = {}
    for (let j = 0; j < lcKeys.length; j++) {
        object[lcKeys[j]] = csvArray2[i][j] //create the object properties
    }
    objectsArray.push(object) //push everything to the object array
}

console.log(objectsArray)


//Part 4: Sorting and Manipulating Data

//remove the last element from the sorted array
objectsArray.pop()
console.log(objectsArray)
//csvArray2.pop()
//console.log(csvArray2)

//insert an object at index1
let barry = objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
console.log(objectsArray)

//adding an object to the end of an array
let bilbo = objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(objectsArray)

//using the values of each object to find the average age of the group using a loop
let sumOfAges = 0

for (let k = 0; k < objectsArray.length; k++) {
    sumOfAges += parseInt(objectsArray[k].age)  //convert ages to Int
}
let averageAge = sumOfAges / objectsArray.length


console.log(objectsArray.length)
console.log(sumOfAges)
console.log(averageAge)


//part 5: full circle

//convert back to csv format
function convertToCSV(data) {
    let csv = ''


let headerRow = Object.keys(data[0]).join(',')
csv += headerRow

    for (let obj of data) {
        let values = Object.values(obj).join(',')
        csv += values
    }
    return csv
}

let csvString = convertToCSV(objectsArray);
console.log(csvString); 