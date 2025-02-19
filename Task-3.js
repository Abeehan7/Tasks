let email = document.getElementById('email')
let err = document.getElementById('err')

let emailRegX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

function getValue() {
    if (emailRegX.test(email.value)) {
        err.style.visibility = 'hidden'
    } else {
        err.style.visibility = 'visible'
    }
}