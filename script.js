function register(){
    
    if(document.getElementById('name1').value == "" || document.getElementById('email1').value == "" || document.getElementById('password1').value == ""){
        alert ("Uzupełnij wszystkie pola!");
    }else{
        if(document.getElementById('password1').value.length < 8){
            alert ("Hasło musi mieć więcej niż 8 liter!");
        }else{
            alert ("Dziękujemy za rejestrację");
        }
        
    }
}
function login(){
    alert ("Tu kiedyś będzie logowanie");
}