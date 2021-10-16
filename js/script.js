var nameInput = document.getElementById("name")
var nameInputError = document.getElementById("input-error-name")
nameInput.addEventListener("blur", nameOnBlur)
function nameOnBlur() {    
    var x = nameInput.value
    if (x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') >= x.length) {        
        nameInput.classList.add("error-border")        
        nameInputError.style.opacity = "1"
    } else {
        nameInput.classList.remove("error-border")
        nameInputError.style.opacity = "0"
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
    } else {
        emailInput.classList.remove("error-border")
        emailInputError.style.opacity = "0"
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
    } else {
        passwordInput.classList.remove("error-border")
        passwordInputError.style.opacity = "0"
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
    } else {
        passwordRepeatInput.classList.remove("error-border")
        passwordRepeatInputError.style.opacity = "0"
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
    } else {
        ageInput.classList.remove("error-border")
        ageInputError.style.opacity = "0"
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
    } else {
        phoneInput.classList.remove("error-border")
        phoneInputError.style.opacity = "0"
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
    } else {
        addressInput.classList.remove("error-border")
        addressInputError.style.opacity = "0"
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
    } else {
        cityInput.classList.remove("error-border")
        cityInputError.style.opacity = "0"
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
    } else {
        postalInput.classList.remove("error-border")
        postalInputError.style.opacity = "0"
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
    } else {
        dniInput.classList.remove("error-border")
        dniInputError.style.opacity = "0"
    }
}
dniInput.addEventListener("focus", dniOnFocus)
function dniOnFocus() {
    dniInput.classList.remove("error-border")
    dniInputError.style.opacity = "0"
}

