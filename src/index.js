
// const codeEl = document.querySelector("code");
// console.log(codeEl);

// const app = document.querySelector("#app");
// console.log(app);

// const firstSelect = document.querySelector("input[type=checkbox]");
// console.log(firstSelect);

// console.log(codeEl.parentNode) // parent of this element
// console.log(codeEl.childNodes) //children of this element
// console.log(codeEl.nextElementSibling) // the next sibling

// const parentNode = document.querySelector("code").parentNode

// const body = document.querySelector("body")
// const div1 = document.createElement('div')
// const div2 = document.createElement('div')
// body.appendChild(div1)
// body.appendChild(div2)

// // add the ordered list and list items to div1
// // create the ordered list
// const ol = document.createElement('ol')
// div1.appendChild(ol)
// for (let i =0; i< 3; i++){
    
//     ol.appendChild(document.createElement('li'))
// }

// // add the unordered list and list items to div2
// const ul = document.createElement('ul')
// div2.appendChild(ul)
// for (let i =0; i< 3; i++){
    
//     ul.appendChild(document.createElement('li'))
// }



// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Part 1
const mainEl = document.querySelector("main");

//Set the background color of mainEl to the values stored in the --main-gb CSS custom property
//Assign a string that uses the CSS var() function like this: 'var'(--main-bg)'
mainEl.style.backgroundColor = "var(--main-bg)";

//Set the content of mailEl to to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//Add a class of flex-ctr to mainEl
//Use the Element.classList API
mainEl.classList.add("flex-ctr");

//Part 2
//Select and cache the <nav id="top-menu"> element is a variable named topMenuEl
const topMenuEl = document.getElementById("top-menu");

//Set the height of the topMenuEl elementto be 100%
topMenuEl.style.height = "100%";

//Set the background color of topMenuEl to the value stored in the --top-menu-gh CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

//Part 3
//iterate over the entire menuLinks array and for each "link" object...
menuLinks.forEach((link) => {
  //create an <a> element
  const anchorEl = document.createElement("a");

  //on the new element, add an href attribute with its value set to the href property of the "link" object
  anchorEl.href = link.href;
  //set the new element's content to the value of the text property of the "link" object
  anchorEl.textContent = link.text;

  //append the new element to the topMenuEl element
  topMenuEl.appendChild(anchorEl);
});

function checkGuess() {
  const userInput = parseInt(window.prompt("Guess a number between 1 and 50:"));
}

checkGuess();
