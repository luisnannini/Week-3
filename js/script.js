var nameInput = document.getElementById("name");
nameInput.onblur = function() {nameOnBlur()};
function nameOnBlur() {
    if (nameInput.value.length < 7) {
        nameInput.classList.add("error-border")
    } else {
        false
    }



  }
console.log(nameInput)