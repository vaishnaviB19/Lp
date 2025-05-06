document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault();
    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value.trim();
    const msg=document.getElementById('message');
    if(email=="user@gmail.com" && password=="12345"){
        msg.textContent = "Login successful";
        msg.style.color="green";
    }
    else{
        msg.style.color="red";
        msg.textContent = "Email / password is wrong";
    }
});