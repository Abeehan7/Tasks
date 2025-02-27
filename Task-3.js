let email = document.getElementById('email')
let err = document.getElementById('err')

let emailRegX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

function getValue() {
    if (emailRegX.test(email.value)) {
        err.style.display = 'none'
        email.style.outlineColor = '#00c8ff'
    } else {
        email.style.outlineColor = 'red'
        err.style.display = 'block'
    }
};

let password = document.getElementById('password')
let err2 = document.getElementById('err2')

let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

function getValue2() {
    if (passwordRegX.test(password.value)) {
        err2.style.display = 'none'
        password.style.outlineColor = '#00c8ff'
    } else {
        err2.style.display = 'block'
        password.style.outlineColor = 'red'
    }
};

let confirmPassword = document.getElementById('confirmPassword');
let err3 = document.getElementById('err3');

function getValue3() {
    if (password.value == confirmPassword.value) {
        err3.style.visibility = 'hidden'
        confirmPassword.style.outlineColor = '#00c8ff'
    } else {
        err3.style.visibility = 'visible'
        confirmPassword.style.outlineColor = 'red'
    }
};
