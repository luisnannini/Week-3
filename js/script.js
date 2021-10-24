// Arrays
const inputValues = []
const inputErrors = []

// Name Validator
var nameInput = document.getElementById('name')
var nameInputError = document.getElementById('input-error-name')
function nameOnBlur() {    
    var x = nameInput.value
    if (x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') >= x.length) {        
        nameInput.classList.add('error-border')        
        nameInputError.style.opacity = '1'
        inputErrors[0] = nameInputError.textContent
        return false
    } else {
        nameInput.classList.remove('error-border')
        nameInputError.style.opacity = '0'
        inputValues[0] = 'Full Name: ' + x
        inputErrors[0] = ''
        return true
    }
}
function nameOnFocus() {
    nameInput.classList.remove('error-border')
    nameInputError.style.opacity = '0'
    nameInput.select()
}
nameInput.addEventListener('blur', nameOnBlur)
nameInput.addEventListener('focus', nameOnFocus)

// Email Validator
var emailInput = document.getElementById('email')
var emailInputError = document.getElementById('input-error-email')
function emailOnBlur() {    
    var x = emailInput.value
    if (x.indexOf('@') == -1 || x.indexOf('.') == -1 || x.includes(' ') || 
        x.indexOf('@') == 0 || x.indexOf('.') == email.length) {        
        emailInput.classList.add('error-border')        
        emailInputError.style.opacity = '1'
        inputErrors[1] = emailInputError.textContent
        return false
    } else {
        emailInput.classList.remove('error-border')
        emailInputError.style.opacity = '0'
        inputValues[1] = 'Email: ' + x
        inputErrors[1] = ''
        return true
    }
}
function emailOnFocus() {
    emailInput.classList.remove('error-border')
    emailInputError.style.opacity = '0'
    emailInput.select()
}
emailInput.addEventListener('blur', emailOnBlur)
emailInput.addEventListener('focus', emailOnFocus)

// Password Validator
var passwordInput = document.getElementById('password')
var passwordInputError = document.getElementById('input-error-password')
function passwordOnBlur() {    
    var x = passwordInput.value
    if (x.length < 8 || x.search(/[a-z]/) < 0 || x.search(/[0-9]/) < 0 || x.search(/\W/) != -1) {        
        passwordInput.classList.add('error-border')        
        passwordInputError.style.opacity = '1'
        inputErrors[2] = passwordInputError.textContent
        return false
    } else {
        passwordInput.classList.remove('error-border')
        passwordInputError.style.opacity = '0'
        inputValues[2] = 'Password: ' + x
        inputErrors[2] = ''
        return true
    }
}
function passwordOnFocus() {
    passwordInput.classList.remove('error-border')
    passwordInputError.style.opacity = '0'
    passwordInput.select()
}
passwordInput.addEventListener('blur', passwordOnBlur)
passwordInput.addEventListener('focus', passwordOnFocus)

// Password Repeat Validator
var passwordRepeatInput = document.getElementById('repeat-password')
var passwordRepeatInputError = document.getElementById('input-error-repeat-password')
function passwordRepeatOnBlur() {
    var x = passwordRepeatInput.value
    if (x != passwordInput.value) {        
        passwordRepeatInput.classList.add('error-border')        
        passwordRepeatInputError.style.opacity = '1'
        inputErrors[3] = passwordRepeatInputError.textContent
        return false
    } else {
        passwordRepeatInput.classList.remove('error-border')
        passwordRepeatInputError.style.opacity = '0'
        inputValues[3] = 'Password Repeat: ' + x
        inputErrors[3] = ''
        return true
    }
}
function passwordRepeatOnFocus() {
    passwordRepeatInput.classList.remove('error-border')
    passwordRepeatInputError.style.opacity = '0'
    passwordRepeatInput.select()
}
passwordRepeatInput.addEventListener('blur', passwordRepeatOnBlur)
passwordRepeatInput.addEventListener('focus', passwordRepeatOnFocus)

// Age Validator
var ageInput = document.getElementById('age')
var ageInputError = document.getElementById('input-error-age')
function ageOnBlur() {
    var x = ageInput.value
    if (x < 18) {        
        ageInput.classList.add('error-border')        
        ageInputError.style.opacity = '1'
        inputErrors[4] = ageInputError.textContent
        return false
    } else {
        ageInput.classList.remove('error-border')
        ageInputError.style.opacity = '0'
        inputValues[4] = 'Age: ' + x
        inputErrors[4] = ''
        return true
    }
}
function ageOnFocus() {
    ageInput.classList.remove('error-border')
    ageInputError.style.opacity = '0'
    ageInput.select()
}
ageInput.addEventListener('blur', ageOnBlur)
ageInput.addEventListener('focus', ageOnFocus)

// Phone Validator
var phoneInput = document.getElementById('phone')
var phoneInputError = document.getElementById('input-error-phone')
function phoneOnBlur() {
    var x = phoneInput.value
    if (x.length < 7 || isNaN(x) || x.includes('.') || x.includes(' ')) {        
        phoneInput.classList.add('error-border')        
        phoneInputError.style.opacity = '1'
        inputErrors[5] = phoneInputError.textContent
        return false
    } else {
        phoneInput.classList.remove('error-border')
        phoneInputError.style.opacity = '0'
        inputValues[5] = 'Phone Number: ' + x
        inputErrors[5] = ''
        return true
    }
}
function phoneOnFocus() {
    phoneInput.classList.remove('error-border')
    phoneInputError.style.opacity = '0'
    phoneInput.select()
}
phoneInput.addEventListener('blur', phoneOnBlur)
phoneInput.addEventListener('focus', phoneOnFocus)

// Address Validator
var addressInput = document.getElementById('address')
var addressInputError = document.getElementById('input-error-address')
function addressOnBlur() {
    var x = addressInput.value
    if (x.length < 5 || x.search(/[a-z]/) < 0 || x.search(/[0-9]/) < 0 || x.indexOf(' ') == -1) {        
        addressInput.classList.add('error-border')        
        addressInputError.style.opacity = '1'
        inputErrors[6] = addressInputError.textContent
        return false
    } else {
        addressInput.classList.remove('error-border')
        addressInputError.style.opacity = '0'
        inputValues[6] = 'Address: ' + x
        inputErrors[6] = ''
        return true
    }
}
function addressOnFocus() {
    addressInput.classList.remove('error-border')
    addressInputError.style.opacity = '0'
    addressInput.select()
}
addressInput.addEventListener('blur', addressOnBlur)
addressInput.addEventListener('focus', addressOnFocus)

// City Validator
var cityInput = document.getElementById('city')
var cityInputError = document.getElementById('input-error-city')
function cityOnBlur() {
    var x = cityInput.value
    if (x.length < 3) {        
        cityInput.classList.add('error-border')        
        cityInputError.style.opacity = '1'
        inputErrors[7] = cityInputError.textContent
        return false
    } else {
        cityInput.classList.remove('error-border')
        cityInputError.style.opacity = '0'
        inputValues[7] = 'City: ' + x
        inputErrors[7] = ''
        return true
    }
}
function cityOnFocus() {
    cityInput.classList.remove('error-border')
    cityInputError.style.opacity = '0'
    cityInput.select()
}
cityInput.addEventListener('blur', cityOnBlur)
cityInput.addEventListener('focus', cityOnFocus)

// Postal Code Validator
var postalInput = document.getElementById('postal')
var postalInputError = document.getElementById('input-error-postal')
function postalOnBlur() {
    var x = postalInput.value
    if (x.length < 3 || x.search(/[0-9]/) < 0) {        
        postalInput.classList.add('error-border')        
        postalInputError.style.opacity = '1'
        inputErrors[8] = postalInputError.textContent
        return false
    } else {
        postalInput.classList.remove('error-border')
        postalInputError.style.opacity = '0'
        inputValues[8] = 'Postal Code: ' + x
        inputErrors[8] = ''
        return true
    }
}
function postalOnFocus() {
    postalInput.classList.remove('error-border')
    postalInputError.style.opacity = '0'
    postalInput.select()
}
postalInput.addEventListener('blur', postalOnBlur)
postalInput.addEventListener('focus', postalOnFocus)

// DNI Validator
var dniInput = document.getElementById('dni')
var dniInputError = document.getElementById('input-error-dni')
function dniOnBlur() {
    var x = dniInput.value
    if (x.length < 7 || x.length > 8 || x.search(/[a-z]/) > 0) {        
        dniInput.classList.add('error-border')        
        dniInputError.style.opacity = '1'
        inputErrors[9] = dniInputError.textContent
        return false
    } else {
        dniInput.classList.remove('error-border')
        dniInputError.style.opacity = '0'
        inputValues[9] = 'DNI: ' + x
        inputErrors[9] = ''
        return true
    }
}
function dniOnFocus() {
    dniInput.classList.remove('error-border')
    dniInputError.style.opacity = '0'
    dniInput.select()
}
dniInput.addEventListener('blur', dniOnBlur)
dniInput.addEventListener('focus', dniOnFocus)

// Autocomplete Name
function nameGreet() {
    var titleName = document.getElementById('name-greet')
    titleName.style.opacity = '1'
    titleName.innerText = 'Hello ' + nameInput.value
}
nameInput.addEventListener('keydown', nameGreet)
nameInput.addEventListener('keyup', nameGreet)

///////////////////////////////////////////////////////// Button
var button = document.getElementById('button')
function clickButton() {
    // Call every function update value/error state when clicking again the button
    nameOnBlur(), emailOnBlur(), passwordOnBlur(), passwordRepeatOnBlur(), ageOnBlur(),
    phoneOnBlur(), addressOnBlur(), cityOnBlur(), postalOnBlur(), dniOnBlur()
    //Validate inputs and call corresponding function
    if (nameOnBlur() && emailOnBlur() && passwordOnBlur() && passwordRepeatOnBlur() && ageOnBlur()
        && phoneOnBlur() && addressOnBlur() && cityOnBlur() && postalOnBlur() && dniOnBlur()
       ){
        fetching()
    } else {
        modalFillErrors()
    }
}
button.addEventListener('click', clickButton)
////////////////////////////////////////////////////Modal and Fetch
// Modal Show/hide
var modal = document.getElementById('myModal')
var span = document.getElementsByClassName('close')[0]
button.onclick = function() {// When the user clicks on the button, open the modal
  modal.style.display = 'block'
}
span.onclick = function() {// When the user clicks on <span> (x), close the modal
  modal.style.display = 'none'
}
window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
// Modal Fill Functions
var ulModal = document.getElementById('ul-modal')
function modalFillValues() {
    ulModal.innerHTML = '<p>Succes !</p>'
    for (let i = 0; i < inputValues.length; i++) {
        ulModal.innerHTML = ulModal.innerHTML + '<li>' + inputValues[i] + '</li>'
    }
}
function modalFillErrors() {
    ulModal.innerHTML = 'Error: '
    for (let i = 0; i < inputErrors.length; i++) {
        ulModal.innerHTML = ulModal.innerHTML + '<li>' + inputErrors[i] + '</li>'
    }
}
function networkError(err) {
    ulModal.innerHTML = 'Newtwork Error: ' + err
}
// URL Fetch
function fetching() {
    var url = 'https://curso-dev-2021.herokuapp.com/newsletter?name=' + nameInput.value + '&email=' + emailInput.value
            + '&password=' + passwordInput.value + '&passwordR=' + passwordRepeatInput.value
            + '&age=' + ageInput.value + '&phone=' + phoneInput.value + '&address=' + addressInput.value
            + '&city=' + cityInput.value + '&postalcode=' + postalInput.value + '&dni=' + dniInput.value
    fetch(url)
        .then(function(res) {
            if (res.status === 200) {
                return res.json()
            } else {
                throw res.status
            }
        })
        .then (function(data) {
            console.log(data)
            modalFillValues()
            sendToStorage()
        })
        .catch(function(err) {
            networkError(err)
            console.log(err)
        })
}
// localStorage Send
function sendToStorage() {
    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('email', emailInput.value)
    localStorage.setItem('password', passwordInput.value)
    localStorage.setItem('passwordR', passwordRepeatInput.value)
    localStorage.setItem('age', ageInput.value)
    localStorage.setItem('phone', phoneInput.value)
    localStorage.setItem('address', addressInput.value)
    localStorage.setItem('city', cityInput.value)
    localStorage.setItem('postalcode', postalInput.value)
    localStorage.setItem('dni', dniInput.value)
}
// localStorage Get
function getItems() {
    if (localStorage.getItem('name') != '') nameInput.value = localStorage.getItem('name')
    if (localStorage.getItem('email') != '') emailInput.value = localStorage.getItem('email')
    if (localStorage.getItem('password') != '') passwordInput.value = localStorage.getItem('password')
    if (localStorage.getItem('passwordR') != '') passwordRepeatInput.value = localStorage.getItem('passwordR')
    if (localStorage.getItem('age') != '') ageInput.value = localStorage.getItem('age')
    if (localStorage.getItem('phone') != '') phoneInput.value = localStorage.getItem('phone')
    if (localStorage.getItem('address') != '') addressInput.value = localStorage.getItem('address')
    if (localStorage.getItem('city') != '') cityInput.value = localStorage.getItem('city')
    if (localStorage.getItem('postalcode') != '') postalInput.value = localStorage.getItem('postalcode')
    if (localStorage.getItem('dni') != '') dniInput.value = localStorage.getItem('dni')
}
window.onload = getItems()