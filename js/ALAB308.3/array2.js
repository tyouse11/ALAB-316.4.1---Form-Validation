// //The concat() method allows us to quickly join two or more arrays together into a single array
// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
// let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

// let ourMovies = yourMovies.concat(myMovies);

// console.log(ourMovies);

// //You can also use this to repeat arrays by passing them into the concat method multiple times
// let yourMoviesManyTimes = yourMovies.concat(yourMovies, yourMovies, yourMovies);

// console.log(yourMoviesManyTimes); 

// //Or to copy an array by not passing any values into concat
// let yourMoviesCopy = yourMovies.concat();

// console.log(yourMoviesCopy); // ['Caddyshack', 'Interstellar', 'Scarface']

// let movieString = myMovies.join(" and ");

// console.log(movieString + " all walk into a bar..."); 

// let movies = ["The Incredibles", "Monsters Inc", "Elf"]
// //appends new elements to the end of an array
// movies.push('Trading Places', 'Antitrust');

// //add to the front of an array
// movies.unshift('Star Wars');
// console.log(movies)

// //remove an item from the end of an array
// let lastMovie = movies.pop();
// console.log(lastMovie)

// //remove fro the front of an array
// let movie = movies.shift();
// console.log(movies)

//splice adds and or removes any number of elements to/from and array
//splice has a syntax of: array.splice(start, deleteCount, newItem1, newItem2...)

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
// console.log(movies)

// let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
// // This starts at element 3 (Trading Places), removes 1 element, and adds Spaceballs and Alien.
// // removedMovies => ['Trading Places']
// // movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien']
// console.log(movies)


// removedMovies = movies.splice(0, 3);
// // This starts at element 0 and removes 3 elements.
// // removedMovies => ['Caddyshack', 'Interstellar', 'Scarface']
// // movies => ['Spaceballs', 'Alien']
// console.log(movies)


// removedMovies = movies.splice(1, 0, 'The Sting');
// // This starts at element 1 and does not remove anything, but adds The Sting.
// // removedMovies => []
// // movies => ['Spaceballs', 'The Sting', 'Alien']
// console.log(movies)


//splice extracts a section from an array and returns a new array
// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let middleMovies = movies.slice(1,3);
// middleMovies => ['Interstellar', 'Scarface']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// movies.forEach((movie) => {
// 	console.log(movie);
// });

// movies.forEach((movie, i) => {
// 	console.log(i + ') ' + movie);
// });

