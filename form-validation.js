function firstNameValidation (first) {
    var firstNameFormat = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
    if(first.value.match(firstNameFormat)) {
        document.getElementById('firstNameError').innerHTML="First name cannnot be empty";
        return true;
    }
    if(first.value == "") {
        document.getElementById('firstNameError');
        return false;
    }
    else {
        document.getElementById('first-name').value="Please enter a valid first name";
        return false;
    }
}

function lastNameValidation (last) {
    var lastNameFormat = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
    if(last.value.match(lastNameFormat)) {
        document.getElementById('last-name').value=last.value;
        return true;
    }
    if(last.value == "") {
        document.getElementById('last-name').value="Last name field cannot be empty";
        return false;
    }
    else {
        document.getElementById('last-name').value="please enter a valid last name";
        return false;
    }
}

function emailValidation (email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (email.value.match(mailFormat)) {
        document.getElementById('email-address').value=email.value;
        return true;  
    }
    if(email.value == "") {
        document.getElementById('email-address').value="Email field cannot be empty";
        return false;
    }
    else {
        document.getElementById('email-address').value="Please enter a valid email address";
        return false;
    }
}

function passwordValidation (password) {
    var passwordRequirment = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/;
    if (password.value.match(passwordRequirment)) {
        document.getElementById('password').value=password.value;
        return true;
    }
    if (password.value == "") {
        document.getElementById('password').value="Password field cannot be empty";
        return false;
    }
    else {
        document.getElementById('password').value="Password must contain at least 8 characters, a number, and 1 special character (!@#$%^&*)";
        return false;
    }    
}
