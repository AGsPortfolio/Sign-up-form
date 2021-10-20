function firstNameValidation (first) {
    var firstNameFormat = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
    if(first.value == "") {
        document.getElementById('first-name').value="First name field cannot be empty";
        return false;
    }
    if(first.value.match(firstNameFormat)) {
        document.getElementById('first-name').value=first.value;
        return true;
    }
    else {
        document.getElementById('first-name').value="Please enter a valid first name";
        return false;
    }
}

function lastNameValidation (last) {
    var lastNameFormat = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
    if(last.value == "") {
        document.getElementById('last-name').value="Last name field cannot be empty";
        return false;
    }
    if(last.value.match(lastNameFormat)) {
        document.getElementById('last-name').value=last.value;
        return true;
    }
    else {
        document.getElementById('last-name').value="please enter a valid last name";
        return false;
    }
}

function emailValidation (email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if(email.value == "") {
        document.getElementById('email-address').value="Email field cannot be empty";
        return false;
    }
    if (email.value.match(mailFormat)) {
        document.getElementById('email-address').value=email.value;
        return true;  
    }
    else {
        document.getElementById('email-address').value="Please enter a valid email address";
        return false;
    }
}

function passwordValidation (password) {
    if (password.value == "") {
        document.getElementById('password').value="Password field cannot be empty";
        return false;
    }
    if (password.value.length < 8 || password.value.length > 15) {
        document.getElementById('password').value="Password must be between 8 and 15 characters";
        return false;
    }
    else {
        document.getElementById('password').value=password.value;
        return true;
    }    
}
