// step1: added click event handler with the submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
    //step2 : get email address
    const emailField = document.getElementById('user-email')
    const email = emailField.value; 
    // step3: get user password
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value; 
    
    // step4 : verify email & password
    if(email === 'saifmahin500@gmail.com' && password ==='mahin500'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invaild password')
    }
})