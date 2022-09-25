function validateForm() 
{    
    var name = document.contactForm.name.value;		 
	var email = document.contactForm.email.value; 
	var messageTitle = document.contactForm.messageTitle.value; 
    var message = document.contactForm.message.value; 

if(name.length <= 4){
    alert("Name must be greater than 4 characters");
    return false;
}else if(email.length <= 7){
    alert("Enter a Valid Email");
    return false;
}else if(message.length < 20){
    alert("Message must be 20 characters or more");
    return false;
}
}