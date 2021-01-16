const firstName = document.querySelector(".container .form .first-name input");
const lastName = document.querySelector(".container .form .last-name input");
const email = document.querySelector(".container .form .email input");
const username = document.querySelector(".container .form .username input");
const password = document.querySelector(".container .form .password input");
const submit = document.querySelector(".container .form .submit");


function checkInputs() {
    let usernameInput = username.value;
    let usernameRegex = /((?=.*\d)(?=.*[A-Z]).{8,8})/;
    let passwordInput = password.value;
    let passwordRegex = /((?=.*\d)(?=.*\W).{10,10})/;
    let firstNameInput = firstName.value;
    let lastNameInput = lastName.value;
    let emailInput = email.value;
    let emailRegex = /\S+@\S+\.\S+/;

    function checkUsername() {
        if (!usernameRegex.test(usernameInput)) {
            alert("Whoops, you need to change your username to meet the character requirements.");
            username.value = "";
        }
    }

    function checkPassword() {
        if (!passwordRegex.test(passwordInput)) {
            alert("Whoops, you need to change your password to meet the character requirements.");
            password.value = "";
        } 
    }

    function checkFirstName() {
        if (firstNameInput === "") {
            alert("You need to enter a value for your first name.");
            firstName.value = "";
        }
    }

    function checkLastName() {
        if (lastNameInput === "") {
            alert("You need to enter a value for your last name.");
            lastName.value = "";
        }
    }

    function checkEmail() {
        if (emailInput === "") {
            alert("You need to enter a value for your email address.");
            email.value = "";
        }
        if (!emailRegex.test(emailInput)) {
            alert("Hmm, it looks like you haven't entered a correct email address.");
            email.value = "";
        }
    }

    checkFirstName();
    checkLastName();
    checkEmail();
    checkUsername();
    checkPassword();

    if (usernameRegex.test(usernameInput) && passwordRegex.test(passwordInput) && (firstNameInput !== "") && (lastNameInput !== "") && (emailRegex.test(emailInput))) {
        alert("Success! Thanks for signing up.");
    }
    username.value = "";
    password.value = "";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
}

submit.addEventListener('click', checkInputs);