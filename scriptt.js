



function nameValid(){
    var name=document.getElementById("nameText").value 
    var nameSpan=document.getElementById("nameSpan");
    var letters= /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;;
    if(name==""){
        nameSpan.innerHTML="Filed is required"
        return false;}
    else if(name.match(letters)){
        nameSpan.innerHTML="";
        return true;
    }
    else{
        nameSpan.innerHTML="use only characters";
        return false;
    }
}
function PhoneValid(){
    var phone=document.getElementById("phoneText").value 
    var phoneSpan=document.getElementById("phoneSpan");
    var letters= /^\d+$/;
    
    if(phone==""){
        phoneSpan.innerHTML="Filed is required"
        return false;}
    else if(phone.match(letters)&& (phone.length==10)){
        phoneSpan.innerHTML="";
        return true;
    }
    else if(phone.length<10)
        {
            if(phone.match(letters))
            {
                phoneSpan.innerHTML="enter the 10 numbers";
                return false;

            }
            else
            {
                phoneSpan.innerHTML="use numbers";
                return false;
            }

            
        }
    else if(phone.length>10)
    {
        if(phone.match(letters))
        {
            phoneSpan.innerHTML="please enter 10 numbers";
            return false;
        }
        else
        {
            phoneSpan.innerHTML="use numbers";
            return false;
        }
    
        
    }
    
    
    

    else{
        phoneSpan.innerHTML="invalid number";
        return false;
    }
    
}
function emailValid(){
    var name=document.getElementById("emailText").value 
    var emailSpan=document.getElementById("emailSpan");
    var letters=  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(name==""){
        emailSpan.innerHTML="Filed is required"
        return false;}
    else if(name.match(letters)){
        emailSpan.innerHTML="";
        return true;
    }
    else{
        emailSpan.innerHTML="invalid email";
        return false;
    }
 
}
function MessageValid(){
    var name=document.getElementById("messageText").value 
    var messageSpan=document.getElementById("messageSpan");
    
    if(name==""){
        messageSpan.innerHTML="Filed is required"
        return false;
    }
    else if(name.length<=10){
        messageSpan.innerHTML="Enter minimum 10 character";
        return false;
    }
    else{
        messageSpan.innerHTML="";
        return true;
    }
 
}
// $('.navbar-collapse').click(function(){
//     $(".navbar-collapse").hide('hide');
// });
// $('.navbar-toggler').click(function(){
//     $(".navbar-collapse").show('hide');
// });