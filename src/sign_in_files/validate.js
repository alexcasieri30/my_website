import './sign_up.css';

const email = document.getElementById("email-input");
let c = 0;
if (email != null){
    email.addEventListener("input", (event) => {
        if (event.inputType == "insertText"){
            c++;
        }else if (event.inputType=="deleteContentBackward"){
            c--;
        }
        if (c > 8){
            if (email.validity.typeMismatch) {
                email.setCustomValidity("I am expecting an e-mail address!");
                email.reportValidity();
            } else {
                email.setCustomValidity("");
            }
        }
    });
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


const dob = document.getElementById("dob");
let n = 0;
if (dob != null){
    dob.addEventListener('input', (event) =>{
        if (event.inputType == "insertText"){
            n++;
        }else if (event.inputType=="deleteContentBackward"){
            n--;
        }
        if ((n==3 || n==6) && event.data!="-"){
            dob.setCustomValidity("Please follow placeholder format (XX-XX-XXXX)");
            dob.reportValidity();
        } else if (n>=0 && n<=10 &&n!=3 &&n!=6 && !isNumeric(event.data)){
            dob.setCustomValidity("Date must be numeric value");
            dob.reportValidity();
        } else {
            dob.setCustomValidity("");
        }
    });
}


let password = document.getElementById('password');
let confirm = document.getElementById('confirm-password');

let k = 0;
if (password!=null&&confirm!=null){
    confirm.addEventListener('input', (event)=>{
        console.log('confirm')
        if (event.inputType == "insertText"){
            k++;
        }else if (event.inputType=="deleteContentBackward"){
            k--;
        }
        console.log(password.value[k-1]);
        console.log(event.data);
        if (event.data != password.value[k-1]){
            confirm.setCustomValidity("Must match password");
            confirm.reportValidity();
        }else {
            confirm.setCustomValidity("");
        }
    })
}
