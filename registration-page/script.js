document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
  
    if (password !== confirm) {
      message.textContent = "Passwords do not match!";
    } else {
      message.style.color = 'green';
      message.textContent = "Registration Successful!";
      // Here you can send form data to server if needed
      this.reset();
    }
  });
  