// Nav Bar Menu
let menuLinks = [
    { text: "home", href: "/home" },
    {
      text: "about",
      href: "#",
      subLinks: [
        { text: "me", href: "/about/me" },
        { text: "you", href: "/about/you" },
        { text: "us", href: "//about/us" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "register", href: "/account/register" },
        { text: "login", href: "/account/login" },
      ],
    },
  ]
  
  
  const main = document.querySelector("main")
  //Set the background color of main to the values stored in the --main-gb CSS custom property
  //Assign a string that uses the CSS var() function like this: 'var'(--main-bg)'
  main.style.backgroundColor = "var(--main-bg)"
  //Set the content of main to to <h1>DOM Manipulation</h1>.
  main.innerHTML = "<h1>Lorem Ipsum</h1>"
  //Add a class of flex-ctr to main
  //Use the Element.classList API
  main.classList.add("flex-ctr")
  
  //Select and cache the <nav id="top-menu"> element is a variable named topMenu
  const topMenu = document.getElementById("top-menu")
  // //Set the height of the topMenu elementto be 100%
  topMenu.style.height = "100%"
  // //Set the background color of topMenu to the value stored in the --top-menu-gh CSS custom property
  topMenu.style.backgroundColor = "var(--top-menu-bg)"
  //Add a class of flex-around to topMenu
  topMenu.classList.add("flex-around")
  
  // //Part 3
  // //iterate over the entire menuLinks array and for each "link" object...
  menuLinks.forEach((link) => {
    //create an <a> element
    const anchor = document.createElement("a")
    //on the new element, add an href attribute with its value set to the href property of the "link" object
    anchor.href = link.href
    //set the new element's content to the value of the text property of the "link" object
    anchor.textContent = link.text
    //append the new element to the topMenu element
    topMenu.appendChild(anchor)
  })
  
  
  //Select and cache the <nav id="sub-menu"> element in a variable named subMenu
  const subMenu = document.getElementById("sub-menu")
  
  //Set the height subMenu element to be "100%"
  subMenu.style.height = "100%"
  //Set the background color of subMenu to the value stored in the --sub-menu-bg CSS custom property
  subMenu.style.backgroundColor = "var(--sub-menu-bg)"
  //Add the class of flex-around to the subMenu element
  subMenu.classList.add("flex-around")
  //Set the CSS position property of subMenu to the value of absolute
  subMenu.style.position = "absolute"
  //Set the CSS top property of subMenu to the value of 0
  subMenu.style.top - "0"
  
  //Part 2.4 & 5
  //Select and cache all of the <a> elements inside of topMenu in a variable named topMenuLinks.
  const topMenuLinks = topMenu.querySelectorAll("a")
  
  //helper function called buildSubmenu
  function buildSubmenu(subLinks) {
    //Clear the current contents of subMenu
    subMenu.innerHTML = ""
  
    //Iterate over the subLinks array, passed as an argument
    subLinks.forEach((link) => {
      //Create an <a> element
      const subLink = document.createElement("a")
  
      //Add an href attribute to the <a>, with the value set by the href property of the "link" object
      subLink.href = link.href
  
      //Set the element's content to the value of the text property of the "link" object
      subLink.textContent = link.text
  
      //Append the new element to the subMenu
      subMenu.appendChild(subLink)
    })
  }
  
  //Attach a delegated 'click' event listener to topMenu
  topMenu.addEventListener("click", function (event) {
    //Call the event object's preventDefault()method
    event.preventDefault()
  
    //Immediately return if the element clicked was NOT an <a> element
    if (!event.target.matches("a")) return
  
    //Log the content of <a> to verify the handler is working
    console.log(event.target.textContent)
  
    // If the Home link is clicked, an <h1>Home</h1>should be displayed
    const clickedText = event.target.textContent.toLowerCase()
  
    if (clickedText === "home") {
    main.innerHTML = "<h1>Home</h1>"
    }
  
    //Create and cache a 'link' object. This iterates through the 'menuLinks' array and stores the object whose 'text' property matches the lowercase text content of the clicked '<a>' element & is later evaluated to check if the clicked link has an associated sublink
    const clickedLink = menuLinks.find(
      (link) => link.text.toLowerCase() === event.target.textContent.toLowerCase()
    )
  
    //Toggle the 'active' class on the clicked <a> element
    event.target.classList.toggle("active")
  
    //Check to see if the <a> element is active
    if (event.target.classList.contains("active")) {
      //If the link has sublinks, set the CSS top property of subMenu to 100%
      if (clickedLink && clickedLink.subLinks) {
        subMenu.style.top = "100%"
        buildSubmenu(clickedLink.subLinks)
      } else {
        //If the link doesn't have subLinks, set the CSS top property of subMenu to 0
        subMenu.style.top = "0"
      }
    } else {
      //If the clicked <a> element is not active, set the CSS top property of subMenu to 0
      subMenu.style.top = "0"
    }
  
    //Iterate over all of the <a> elements in topMenuLinks
    topMenuLinks.forEach((link) => {
      //Remove the 'active' class for all <a> elements
      if (link != event.target) {
        link.classList.remove("active")
      }
    })
  })
  
  //Attach a delegated 'click' event listener to subMenu
  subMenu.addEventListener("click", function (subEvent) {
    //Call the event object's preventDefault() method
    subEvent.preventDefault()
  
    //return if the element clicked was not an <a> element
    if (!subEvent.target.matches("a")) return
  
    //Log the content of the <a> to verify the handler is working
    console.log(subEvent.target.textContent)
  
    //Set the CSS top property of subMenu to 0
    subMenu.style.top = "0"
  
    //Remove the active class from each <a> element in topMenuLinks
    topMenuLinks.forEach((link) => {
      link.classList.remove("active")
    })
    // //Update the contents of main, within an <h1>, to the contents of the <a> element clicked within subMenu
    const clickedContent = subEvent.target.textContent.toLowerCase()
    
    if (clickedContent === "register" || clickedContent === "login") {
      openModal()
      if (closeModalButton) {
        closeModalButton.addEventListener("click", function (event) {
          event.preventDefault()
          const confirm = window.confirm('Are you sure you want to close this window')
          if(confirm) {
          closeModal()
          }
        })
      }
    }
    
  
    let updatedContent = ""
  
    updatedContent = clickedContent.toUpperCase()
  
    main.innerHTML = `<h1>${updatedContent}</h1>`
  
  })
  
  // Get references to the elements
  const openModalLink = document.getElementById("openModal")
  const formContainer = document.getElementById("formContainer")
  const closeModalButton = document.getElementById("closeModal")
  
  
  // Function to open the modal
  function openModal() {
    formContainer.style.display = "block"
  }
  
  // Function to close the modal
  function closeModal() {
    formContainer.style.display = "none"
  }
  
  
  const register = document.getElementById("registration")
  const username = register.elements["username"]
  const email = register.elements["email"]
  const password = register.elements["password"]
  const passwordCheck = register.elements["passwordCheck"]
  const terms = register.elements["terms"]
  const login = document.getElementById("login")
  const loginUsername = login.elements["username"]
  const loginPassword = login.elements["password"]
  const persist = login.elements["persist"]
  
  //Event listener for Register form
  register.addEventListener("submit", validateInput)
  
  // Event listener for Login form
  login.addEventListener('submit', function (event) {
    event.preventDefault()
  
    const loginVal = validateLogin()
    if (loginVal) {
      
      console.log(persist.checked)
      const successMessage = 'Login successful'
      if (persist.checked) {
        alert(`${successMessage} - Keep me logged in checked`)
      } else {
        alert(successMessage)
      }
      login.reset() // Function to clear form fields
    }
  })
  
  
  function validateInput(event) {
    event.preventDefault()
    const nameVal = validateUsername()
    if (nameVal === false) {
      return false
    }
  
    const emailVal = validateEmail()
    if (emailVal === false) {
      return false
    }
  
    const passwordVal = validatePassword()
    if (passwordVal === false) {
      return false
    }
  
    const termsVal = validateTerms()
    if (termsVal === false) {
      return false
    }
    
    // Create a newUser to store their information converted to lowercase
    const newUser = {
      username: nameVal.toLowerCase(),
      email: emailVal.toLowerCase(),
      password: passwordVal,
    }
  
    // Store the new user object in an array in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
  
    alert(
      `Username: ${nameVal}
    Email: ${emailVal}
    Password: ${passwordVal}`)
  
    // Clear form fields
    register.reset()
  
    // Show success message
    alert('Registration successful!')
  
    //return true
  }
  
  
    function validateUsername() {
      // //Check to see if username is already taken
      const storedUsers = JSON.parse(localStorage.getItem('users')) || []
      // Convert to lowercase
      const enteredUsername = username.value.toLowerCase();
    
      const isUsernameTaken = storedUsers.some(user => user.username === enteredUsername)
      if (isUsernameTaken) {
        alert('That username is already taken')
        username.focus()
        return false
      }
  
      // Check if username is blank
      if (username.value === "") {
        alert("Please provide a username")
        username.focus()
        return false
      }
  
      // Check if username is at least four characters long
      if (username.value.length < 4) {
        alert("Username must be at least four characters long")
        username.focus()
        return false
      }
  
      // Check if the username has at least two unique character
      let uniqueChars = new Set(username.value)
      if (uniqueChars.size <2) {
        alert("Username must contain at least two unique characters")
        username.focus()
        return false
      }
  
      // Check if the username contains any special characters or whitespace
      let alphanum = /^[a-zA-Z0-9]+$/
      if (!alphanum.test(username.value)) {
        alert("Username cannot contain any special characters or whitespace")
        username.focus()
        return false
      }
  
      return username.value
    }
  
    function validateEmail(){
      // Check if email is blank
      if (email.value === "") {
        window.alert("Please provide an email")
        email.focus()
        return false
      }
  
      // Check if the email format is valid
      let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailFormat.test(email.value)) {
        window.alert("Please provide a valid email address");
        email.focus()
        return false;
      }
  
      // Check if the email domain is not "example.com"
      if (email.value.toLowerCase().endsWith('@example.com')) {
        window.alert("Email from 'example.com' domain is not allowed")
        email.focus()
        return false
    }
  
      return email.value
    }
  
    function validatePassword() {
      // Check if the password is blank
      if (password.value === "") {
        alert("Please provide a password")
        password.focus()
        return false
      }
  
      // Check if the password length is at least 12 characters
      if (password.value.length < 12) {
        window.alert("Password must be at least 12 characters long")
      password.focus()
      return false   
      }
  
      //check for uppercase, lowercase, number, and special character
      let uppercase = /[A-Z]/
      let lowercase = /[a-z]/
      let number = /[0-9]/
      let specialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
  
      if (!uppercase.test(password.value) || !lowercase.test(password.value) || !number.test(password.value) || !specialChar.test(password.value)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        password.focus();
        return false;
      }
  
      // Check if the password contains the word "password" or the username
      if (password.value.toLowerCase().includes("password") || password.value.toLowerCase().includes(username.value.toLowerCase())) {
        alert("Password cannot contain the word 'password' or your username")
        password.focus()
        return false
      }
    
      // Check if both passwords match
      if (password.value !== passwordCheck.value) {
        alert("Passwords do not match")
        password.focus()
        return false
    }
  
    return password.value  
  }
  
    function validateTerms() {
      if (!terms.checked) {
        alert("Please agree to the Terms of Use")
        terms.focus()
        return false
      }
    }
  
    // Validate username and password against localStorage for login
  function validateLogin() {
    // Convert username to all lowercase
    const enteredUsername = loginUsername.value.toLowerCase(); 
    const enteredPassword = loginPassword.value;
  
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === enteredUsername);
  
    if (!user) {
      alert('Username does not exist')
      return false;
    }
  
    if (user.password !== enteredPassword) {
      alert('Incorrect password')
      return false
    }
    // If all validation passes
    return true
  }
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css" />
    <script
    src="https://kit.fontawesome.com/d8f052c6cf.js"
    crossorigin="anonymous"
    ></script>
    <title>DOM SBA</title>
  </head>
  <body>
    <header>
      <nav id="top-menu"></nav>
      <nav id="sub-menu"></nav>
    </header>
    
    <!-- Container for entire form. -->
    <div id="formContainer" class="form-container" style="display: none;">
      <!-- Registration Side -->
      <div>
        <h1>Register</h1>
        <p>Please provide your information below.</p>
  
        <!-- Registration Form -->
        <form id="registration">
          <input name="username" type="text" placeholder="Username" />
          <span class="input-icon"><i class="fa-solid fa-user"></i></span><br />
  
          <input name="email" type="text" placeholder="Email" />
          <span class="input-icon"><i class="fa-solid fa-envelope"></i></span
          ><br />
  
          <input name="password" type="text" placeholder="Password" />
          <span class="input-icon"><i class="fa-solid fa-key"></i></span><br />
  
          <input
            name="passwordCheck"
            type="text"
            placeholder="Repeat Password"
          />
          <span class="input-icon"><i class="fa-solid fa-key"></i></span
          ><br /><br />
  
          <div class="flex-row">
            <input name="terms" type="checkbox" />
            <label for="terms"
              >I agree to the&nbsp;<a href="#">Terms of Use</a>.</label
            >
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
  
      <!-- Login Side -->
      <div>
        <h1>Login</h1>
        <p>Login using your account information.</p>
  
        <!-- Login Form -->
        <form id="login" style="border-bottom: 1px solid lightgray;">
          <input name="username" type="text" placeholder="Username" />
          <span class="input-icon"><i class="fa-solid fa-user"></i></span><br />
  
          <input name="password" type="text" placeholder="Password" />
          <span class="input-icon"><i class="fa-solid fa-key"></i></span
          ><br /><br />
  
          <div class="flex-row">
            <input name="persist" type="checkbox" />
            <label for="persist">Keep me logged in.</label>
            <input type="submit" value="Login" />
          </div>
          <br /><br />
        </form>
  
        <p>Forgot your <a href="#">Username</a> or <a href="#">Password?</a></p>
      </div>
      <button id="closeModal">Close</button>
    </div>
  
    <!-- Error Display Container -->
    <div id="errorDisplay"></div>
    <main></main>
    <script src='/index.js'></script>
  </body>
  </html>
  