document.getElementById('registrationForm').addEventListener('submit',function(e){
    e.preventDefault();
    const password=document.getElementById('password').value;
    const confirm=document.getElementById('confirmPassword').value;
    const msg=document.getElementById('message');
    if(password!=confirm){
        msg.textContent = "Password Do not match";
        msg.style.color = 'red';
    }
    else{
        msg.textContent='Registration Successful';
        msg.style.color='green';
    }
})