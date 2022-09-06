
const email = document.getElementById("mail");
let c = 0;
email.addEventListener("input", (event) => {
    if (event.inputType == "insertText"){
        c++;
    }else if (event.inputType=="deleteContentBackward"){
        c--;
    }
    console.log(c);
    if (c > 5){
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I am expecting an e-mail address!");
            email.reportValidity();
        } else {
            email.setCustomValidity("");
        }
    }
});

