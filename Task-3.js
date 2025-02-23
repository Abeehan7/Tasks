let email = document.getElementById('email')
let err = document.getElementById('err')

let emailRegX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

function getValue() {
    if (emailRegX.test(email.value)) {
        err.style.visibility = 'hidden'
    } else {
        err.style.visibility = 'visible'
    }
};

let password = document.getElementById('password')
let err2 = document.getElementById('err2')

let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

function getValue2() {
    if (passwordRegX.test(password.value)) {
        err2.style.visibility = 'hidden'
    } else {
        err2.style.visibility = 'visible'
    }
};

let confirmPassword = document.getElementById('confirmPassword');
let err3 = document.getElementById('err3');

function getValue3() {
    if (password === confirmPassword) {
        err3.style.visibility = 'hidden'
    } else {
        err3.style.visibility = 'visible'
    }
};
