// nested if-else logic: inside if-else

// 1. Get the button and save it as a js obj var
let loginBtn = document.getElementById("login-btn");

// 2. Make the btn clickable to call a func
loginBtn.addEventListener("click", login);

// 3. Pet the 'Please Log In' heading:
let plsLogin = document.getElementById("pls-login");

// 4. Get the username and password input boxes:
let userBox = document.getElementById("username");
let pswdBox = document.getElementById("password");

// 5. Hard-code "correct" username and password:
let correctUser = "jesse";
let correctPswd = "Phoenix#430";

// 6. Get the response element, which is where the output goes:

let response = document.getElementById("response");

// 7. Write the function, passing in the event argument and calling the **event.preventDefault() method:

// function login(event) {
//   event.preventDefault();
// }

// 8. Get the inputted `username` and `password`. These are the `value` properties of their respective input objects. We just need the values--not the whole objects.

// function login(event) {
//   event.preventDefault();
//   let inputtedUser = userBox.value;
//   let inputtedPswd = pswdBox.value;
// }

// 9. Compare the entered username and password to the "correct" values. Since there are two conditions to evaluate, use the `&&` operator:
// end login function

// 10. If login was successful, output the welcome message and hide the form elements by setting their `display` property to `none`:

// end login function

// 11. Add an `else` part to run if either the username or password are incorrect:
function login(event) {
  event.preventDefault();

  let inputUser = userBox.value;
  let inputPswd = pswdBox.value;

  if (inputUser === correctUser && inputPswd === correctPswd) {
    response.style.fontSize = "1.5em";
    response.textContent = "Welcome, " + correctUser;
    userBox.style.display = "none"; // hide username field
    pswdBox.style.display = "none"; // hide password field
    loginBtn.style.display = "none"; // hide Log In button
    plsLogin.style.display = "none"; // hide Please Log In

    // Redirect to index.html
    window.location.href = "file:///C:/path/to/index.html";
  } else {
    response.textContent = "Log in failed. Try again.";
  }
} // end login function

// 12. Comment out the `event.preventDefault()`, reload the page and log in again. You will see the page flash as it reloads and the form fields will be reset.

// event.preventDefault();
