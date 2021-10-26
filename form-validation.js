function firstNameValidation (first) {
    var firstNameFormat = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
    if(first.value.match(firstNameFormat)) {
        document.getElementById('firstNameMessage').style="visibility:hidden";
        return true;
    }
    if(first.value == "") {
        document.getElementById('firstNameMessage').style="visibility:visible";
        document.getElementById('error1').style="visibility:visible";
        return false;
    }
    else {
        document.getElementById('firstNameMessage').style="visibility:visible"
        document.getElementById('error1').style="visibility:visible";
        return false;
    }
}

function lastNameValidation (last) {
    var lastNameFormat = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
    if(last.value.match(lastNameFormat)) {
        document.getElementById('lastNameMessage').style="visibility:hidden";
        return true;
    }
    if(last.value == "") {
        document.getElementById('lastNameMessage').style="visibility:visible";
        document.getElementById('error2').style="visibility:visible";
        return false;
    }
    else {
        document.getElementById('lastNameMessage').style="visibility:visible";
        document.getElementById('error2').style="visibility:visible";
        return false;
    }
}

function emailValidation (email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (email.value.match(mailFormat)) {
        document.getElementById('emailMessage').style="visibility:hidden";
        return true;  
    }
    if(email.value == "") {
        document.getElementById('emailMessage').style="visibility:visible";
        document.getElementById('error3').style="visibility:visible";
        return false;
    }
    else {
        document.getElementById('emailMessage').style="visibility:visible";
        document.getElementById('error3').style="visibility:visible";
        return false;
    }
}

function passwordValidation (password) {
    var passwordRequirment = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/;
    if (password.value.match(passwordRequirment)) {
        document.getElementById('passwordMessage').style="visibility:hidden";
        return true;
    }
    if (password.value == "") {
        document.getElementById('passwordMessage').style="visibility:visible";
        document.getElementById('error4').style="visibility:visible";
        return false;
    }
    else {
        document.getElementById('passwordMessage').style="visibility:visible";
        document.getElementById('error4').style="visibility:visible";
        return false;
    }    
}
