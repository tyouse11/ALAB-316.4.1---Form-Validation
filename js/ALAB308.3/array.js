// const names = ["John", "Abagail", "Jerome", "Cynthia"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// 	greetings[i] = "Hello, " + names[i] + "!";
// 	console.log(greetings[i]);
// }


//3 ways to create an array:

// Using a Class/Constructor Function (less common syntax)
let nums = new Array(2, 4, 18);
let nums1 = Array(2, 4, 18);
// Using Array Literal syntax (recommended best practice)
let nums2 = [2, 4, 18];


//create an array consisting of your favorite movies (strings) and assign it t a variable named movies
let movies = ["The Incredibles", "Monsters Inc", "Elf"]

//accessing elements in an array
let firstMovie = movies[0]
console.log(firstMovie)
console.log(movies.length)

//overwrites array index 1 as Batman
movies[1] = 'Batman'
//adds an empty string at the end of the movies array
movies[movies.length] = '';

//add a movie beyond the length of movies
movies[10] = 'Shrek';

//manipulating array length
movies.length = 50

movies.length = 4
console.log(movies); 

for (let i = 0; i < movies.length; i++) {
	console.log(movies[i]);
}
