//Part 1

let counter = 0

//function that increments a global counter and calls itself indefinitley
function recursiveFunction() {
    counter++
    recursiveFunction()
}

//attemps to catch the stack overflow error
try {
    recursiveFunction()
} catch (error) {
    console.error("Stack overflow error occurred")
    console.error("Counter value at time of error:" , counter)
}

//Part 2

//function checks each element of the array. If an element is an array istelf, it recursively calls 'flattenArray' on that element and concatenates the refult with the 'flattened' array. If an element is not an array, it directly pushes it to the 'flattened' array
function flattenArray(arr) {
    let flattened = []
  
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flattened = flattened.concat(flattenArray(element))
      } else {
        flattened.push(element)
      }
    });
  
    return flattened
  }
  
  //trampoline the recursive function...continuously applies 'flattenArray' until there are no nested arrays left
  //takes a function as an argument and returns a new function that continuously applies the original function until the result is no longer a function (turning a recursive function into an iterative one)
  function trampoline(fn) {
    return function (...args) {
      let result = fn.apply(this, args);
  
      while (typeof result === 'function') {
        result = result()
      }
  
      return result
    }
  }
  
  const trampolinedFlatten = trampoline(flattenArray)
  
//completely flatten 
const nestedArray = [1, [2, [3, 4, [5, 6, [7, 8, [9, [10]]]]]]];
const flattenedArray = trampolinedFlatten(nestedArray)
console.log(flattenedArray)

//Part 3
// Cache the HTML element into a JavaScript variable
const primeListElement = document.getElementById('primeList')

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true

  if (num % 2 === 0 || num % 3 === 0) return false

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false
    i += 6
  }

  return true
}

// Function to add prime numbers up to n to the HTML element
function addPrimeNumbersToElement(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  // Adding prime numbers list to the HTML element with delay between each number
  primeListElement.innerHTML = `<p>Prime numbers up to ${n}:</p>`
  const ul = document.createElement('ul')
  primes.forEach((prime, index) => { 
    setTimeout(() => {
      const li = document.createElement('li')
      li.textContent = prime
      ul.appendChild(li)
    })

    // Append the list to the HTML element after the last number
    if (index === primes.length - 1) {
      primeListElement.appendChild(ul)

  // Alert the user that the calculation is finished
      alert('Calculation of prime numbers up to ' + n + ' is finished.')
    }
  }, index * 10) // the delay
}

// Call the function with a parameter
addPrimeNumbersToElement(10000)

//this is a test
