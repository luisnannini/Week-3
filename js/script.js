// Arrays
const inputValues = []
const inputErrors = []

// Name Validator
var nameInput = document.getElementById("name")
var nameInputError = document.getElementById("input-error-name")
nameInput.addEventListener("blur", nameOnBlur)
function nameOnBlur() {    
    var x = nameInput.value
    if (x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') >= x.length) {        
        nameInput.classList.add("error-border")        
        nameInputError.style.opacity = "1"
        inputErrors[0] = nameInputError.textContent
        return false
    } else {
        nameInput.classList.remove("error-border")
        nameInputError.style.opacity = "0"
        inputValues[0] = "Full Name: " + x + '\n'
        return true
    }
}
nameInput.addEventListener("focus", nameOnFocus)
function nameOnFocus() {
    nameInput.classList.remove("error-border")
    nameInputError.style.opacity = "0"
}

// Email Validator
var emailInput = document.getElementById("email")
var emailInputError = document.getElementById("input-error-email")
emailInput.addEventListener("blur", emailOnBlur)
function emailOnBlur() {    
    var x = emailInput.value
    if (x.indexOf('@') == -1 || x.indexOf('.') == -1 || x.includes(' ') == true || 
        x.indexOf('@') == 0 || x.indexOf('.') == email.length) {        
        emailInput.classList.add("error-border")        
        emailInputError.style.opacity = "1"
        inputErrors[1] = emailInputError.textContent
        return false
    } else {
        emailInput.classList.remove("error-border")
        emailInputError.style.opacity = "0"
        inputValues[1] = "Email: " + x + '\n'
        return true
    }
}
emailInput.addEventListener("focus", emailOnFocus)
function emailOnFocus() {
    emailInput.classList.remove("error-border")
    emailInputError.style.opacity = "0"
}
// Password Validator
var passwordInput = document.getElementById("password")
var passwordInputError = document.getElementById("input-error-password")
passwordInput.addEventListener("blur", passwordOnBlur)
function passwordOnBlur() {    
    var x = passwordInput.value
    if (x.length < 8 || x.search(/[a-z]/) < 0 || x.search(/[0-9]/) < 0 || x.search(/\W/) != -1) {        
        passwordInput.classList.add("error-border")        
        passwordInputError.style.opacity = "1"
        inputErrors[2] = passwordInputError.textContent
        return false
    } else {
        passwordInput.classList.remove("error-border")
        passwordInputError.style.opacity = "0"
        inputValues[2] = "Password: " + x + '\n'
        return true
    }
}
passwordInput.addEventListener("focus", passwordOnFocus)
function passwordOnFocus() {
    passwordInput.classList.remove("error-border")
    passwordInputError.style.opacity = "0"
}
// Password Repeat Validator
var passwordRepeatInput = document.getElementById("repeat-password")
var passwordRepeatInputError = document.getElementById("input-error-repeat-password")
passwordRepeatInput.addEventListener("blur", passwordRepeatOnBlur)
function passwordRepeatOnBlur() {
    var x = passwordRepeatInput.value
    if (x != passwordInput.value) {        
        passwordRepeatInput.classList.add("error-border")        
        passwordRepeatInputError.style.opacity = "1"
        inputErrors[3] = passwordRepeatInputError.textContent
        return false
    } else {
        passwordRepeatInput.classList.remove("error-border")
        passwordRepeatInputError.style.opacity = "0"
        inputValues[3] = "Password Repeat: " + x + '\n'
        return true
    }
}
passwordRepeatInput.addEventListener("focus", passwordRepeatOnFocus)
function passwordRepeatOnFocus() {
    passwordRepeatInput.classList.remove("error-border")
    passwordRepeatInputError.style.opacity = "0"
}
// Age Validator
var ageInput = document.getElementById("age")
var ageInputError = document.getElementById("input-error-age")
ageInput.addEventListener("blur", ageOnBlur)
function ageOnBlur() {
    var x = ageInput.value
    if (x < 18 || isNaN(x) || !is_float(x) || x.includes('.')) {        
        ageInput.classList.add("error-border")        
        ageInputError.style.opacity = "1"
        inputErrors[4] = ageInputError.textContent
        return false
    } else {
        ageInput.classList.remove("error-border")
        ageInputError.style.opacity = "0"
        inputValues[4] = "Age: " + x + '\n'
        return true
    }
}
ageInput.addEventListener("focus", ageOnFocus)
function ageOnFocus() {
    ageInput.classList.remove("error-border")
    ageInputError.style.opacity = "0"
}
// Phone Validator
var phoneInput = document.getElementById("phone")
var phoneInputError = document.getElementById("input-error-phone")
phoneInput.addEventListener("blur", phoneOnBlur)
function phoneOnBlur() {
    var x = phoneInput.value
    if (x.length < 7 || isNaN(x) || !is_float(x) || x.includes('.') || x.includes(' ')) {        
        phoneInput.classList.add("error-border")        
        phoneInputError.style.opacity = "1"
        inputErrors[5] = phoneInputError.textContent
        return false
    } else {
        phoneInput.classList.remove("error-border")
        phoneInputError.style.opacity = "0"
        inputValues[5] = "Phone Number: " + x + '\n'
        return true
    }
}
phoneInput.addEventListener("focus", phoneOnFocus)
function phoneOnFocus() {
    phoneInput.classList.remove("error-border")
    phoneInputError.style.opacity = "0"
}
// Address Validator
var addressInput = document.getElementById("address")
var addressInputError = document.getElementById("input-error-address")
addressInput.addEventListener("blur", addressOnBlur)
function addressOnBlur() {
    var x = addressInput.value
    if (x.length < 5 || x.search(/[a-z]/) < 0 || x.search(/[0-9]/) < 0 || x.indexOf(' ') == -1) {        
        addressInput.classList.add("error-border")        
        addressInputError.style.opacity = "1"
        inputErrors[6] = addressInputError.textContent
        return false
    } else {
        addressInput.classList.remove("error-border")
        addressInputError.style.opacity = "0"
        inputValues[6] = "Address: " + x + '\n'
        return true
    }
}
addressInput.addEventListener("focus", addressOnFocus)
function addressOnFocus() {
    addressInput.classList.remove("error-border")
    addressInputError.style.opacity = "0"
}

// City Validator
var cityInput = document.getElementById("city")
var cityInputError = document.getElementById("input-error-city")
cityInput.addEventListener("blur", cityOnBlur)
function cityOnBlur() {
    var x = cityInput.value
    if (x.length < 3) {        
        cityInput.classList.add("error-border")        
        cityInputError.style.opacity = "1"
        inputErrors[7] = cityInputError.textContent
        return false
    } else {
        cityInput.classList.remove("error-border")
        cityInputError.style.opacity = "0"
        inputValues[7] = "City: " + x + '\n'
        return true
    }
}
cityInput.addEventListener("focus", cityOnFocus)
function cityOnFocus() {
    cityInput.classList.remove("error-border")
    cityInputError.style.opacity = "0"
}

// Postal Code Validator
var postalInput = document.getElementById("postal")
var postalInputError = document.getElementById("input-error-postal")
postalInput.addEventListener("blur", postalOnBlur)
function postalOnBlur() {
    var x = postalInput.value
    if (x.length < 3 || x.search(/[0-9]/) < 0) {        
        postalInput.classList.add("error-border")        
        postalInputError.style.opacity = "1"
        inputErrors[8] = postalInputError.textContent
        return false
    } else {
        postalInput.classList.remove("error-border")
        postalInputError.style.opacity = "0"
        inputValues[8] = "Postal Code: " + x + '\n'
        return true
    }
}
postalInput.addEventListener("focus", postalOnFocus)
function postalOnFocus() {
    postalInput.classList.remove("error-border")
    postalInputError.style.opacity = "0"
}

// DNI Validator
var dniInput = document.getElementById("dni")
var dniInputError = document.getElementById("input-error-dni")
dniInput.addEventListener("blur", dniOnBlur)
function dniOnBlur() {
    var x = dniInput.value
    if (x.length < 7 || x.length > 8 || x.search(/[a-z]/) > 0) {        
        dniInput.classList.add("error-border")        
        dniInputError.style.opacity = "1"
        inputErrors[9] = dniInputError.textContent
        return false
    } else {
        dniInput.classList.remove("error-border")
        dniInputError.style.opacity = "0"
        inputValues[9] = "DNI: " + x + '\n'
        return true
    }
}
dniInput.addEventListener("focus", dniOnFocus)
function dniOnFocus() {
    dniInput.classList.remove("error-border")
    dniInputError.style.opacity = "0"
}

// Button
var button = document.getElementById('button')
button.addEventListener('click', clickButton)

function clickButton() {
    if (
        nameOnBlur() == true &&
        emailOnBlur() == true &&
        passwordOnBlur() == true &&
        passwordRepeatOnBlur() == true &&
        ageOnBlur() == true &&
        phoneOnBlur() == true &&
        addressOnBlur() == true &&
        cityOnBlur() == true &&
        postalOnBlur() == true &&
        dniOnBlur() == true
        ) {
        alert(inputValues.join(" "))
    } else if (
        nameOnBlur() == false ||
        emailOnBlur() == false ||
        passwordOnBlur() == false ||
        passwordRepeatOnBlur() == false ||
        ageOnBlur() == false ||
        phoneOnBlur() == false ||
        addressOnBlur() == false ||
        cityOnBlur() == false ||
        postalOnBlur() == false ||
        dniOnBlur() == false
        ) {
        alert(inputErrors.join(" "))
    }
}