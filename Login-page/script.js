document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
  
    if (email === "user@example.com" && password === "123456") {
      message.style.color = "green";
      message.textContent = "Login successful!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid email or password.";
    }
  });
  