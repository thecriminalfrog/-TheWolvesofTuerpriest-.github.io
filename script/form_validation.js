var form = document.getElementsByName('myForm');

function runValidation(form){
   firstNameValidation(form);
    lastNameValidation(form);
    emailValidation(form);
    dateValidation(form);

    if(firstNameValidation(form) && lastNameValidation(form) && emailValidation(form) && dateValidation(form)
    )return true;
    else
        return false;    
} 

function firstNameValidation(form){
    var fname = form.elements["firstname"];
    
    if(fname.validity.valueMissing){                 
        fname.setCustomValidity("Please enter your first name to join list");
        return false;
    }
    else{
        fname.setCustomValidity("");
        return true;
    }
} 


function lastNameValidation(form){
    var name = form.elements["lastname"];
    
    if(name.validity.valueMissing){                 
        name.setCustomValidity("Please enter your last name to join list");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }
} 


function emailValidation(form){
    var email = form.elements["email"];
    if (email.validity.valueMissing){
        email.setCustomValidity("Please enter and email adress to join list");
        return false;
    }
    else if(email.validity.typeMismatch){
        email.setCustomValidity("Your email adress is improperly formatted");
        return false;
    }
    else{
        email.setCustomValidity("")
        return true;
    }
}


function dateValidation(form){
var date = form.elements["date"];
    if (date.validity.valueMissing){
        date.setCustomValidity("Please enter a date to join list");
        return false;
    }
    else if(date.validity.rangeUnderflow || date.validity.rangeOverflow) {
        date.setCustomValidity("Please enter today's date to join list");
        return false;
    }
    else{
        date.setCustomValidity("")
        return true;
    }
}
