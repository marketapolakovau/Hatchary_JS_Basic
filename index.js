let registerButton = document.getElementById("register-button");
let username = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm");
let email = document.getElementById("email");

// Set restriction for user name - minimum of 4 and a maximum of 64 characters
username.addEventListener("keypress", () => {
  if (username.value.length < 4 || username.value.length > 64) {
    let message = document.getElementById("invalid-username");
    message.innerHTML = "Enter value between 4 and 64 characters!";
  } else {
    let message = document.getElementById("invalid-username");
    message.innerHTML = "";
  }
});

// Set restriction for password - minimum of 4 and a maximum of 64 characters.
password.addEventListener("keyup", () => {
  if (password.value.length < 8 || password.value.length > 64) {
    let message = document.getElementById("invalid-password");
    message.innerHTML = "Enter value between 8 and 64 characters!";
  } else {
    let message = document.getElementById("invalid-password");
    message.innerHTML = "";
  }
  // Check if password is equal to password in confirmation field
  if (password.value !== confirmPassword.value) {
    let message = document.getElementById("invalid-confirm-password");
    message.innerHTML = "Values are not equal!";
  } else {
    let message = document.getElementById("invalid-confirm-password");
    message.innerHTML = "";
  }
});

// Check if confirmation password is equal to password
confirmPassword.addEventListener("keyup", () => {
  if (password.value !== confirmPassword.value) {
    let message = document.getElementById("invalid-confirm-password");
    message.innerHTML = "Values are not equal!";
  } else {
    let message = document.getElementById("invalid-confirm-password");
    message.innerHTML = "";
  }
});

// Check correct form of email
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

email.addEventListener("keyup", () => {
  if (regex.test(email.value) === false) {
    let message = document.getElementById("invalid-email");
    message.innerHTML = "Enter valid email address";
  } else {
    let message = document.getElementById("invalid-email");
    message.innerHTML = "";
  }
});

function clearInput() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm").value = "";
}

function registrateFunction() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm").value;
  // Check if inputs are valid
  if (
    !(
      username.length < 4 ||
      (username.length > 64 && password.length < 8) ||
      (password.length > 64 && password !== confirmPassword)
    )
  ) {
    // Show user's name, email and date after click on registration button

    const node = document.createElement("p");

    const newRegistration = document.createTextNode(
      username + " - " + email + " - " + date
    );

    node.appendChild(newRegistration);

    document.querySelector(".user-list").appendChild(node);

    clearInput();
  } else {
    alert("Error. Please check the inputs");
  }
  document.getElementById("empty").remove();
}

registerButton.addEventListener("click", registrateFunction);
