function validateEmail(input) {
      var email = input.value;
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var isValid = pattern.test(email);
      var errorElement = document.getElementById("emailError");

      if (isValid) {
        input.style.borderColor = 'green';
        errorElement.textContent = '';
      } else {
        input.style.borderColor = 'red';
        errorElement.textContent = 'Invalid email address';
      }
    }



  function validatePassword() 
    {
      var password = document.getElementById("password").value;
      var passwordError = document.getElementById("passwordError");
      if(password.trim() == "")
      {
           passwordError.innerHTML = "Password is required";
      }
      else if (password.length<=5) 
      {
        passwordError.innerHTML = "Enter valid password with 5 or more characters";
      
  }
}

