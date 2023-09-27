function Validatefname(fname) {
    var fname = document.getElementById("fname").value;
    var nerror = document.getElementById("nerror")
    if (fname.trim() == "")
    {
         nerror.innerHTML = "First name required";
    }
    else
    {
         nerror.innerHTML = ""
    }
    }
      

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
    
     function Validatesubject(subject) {
        var subject = document.getElementById("subject").value;
        var subjecterror = document.getElementById("subjecterror")
        if (subject.trim() == "")
        {
            subjecterror.innerHTML = "Mention Subject";
        }
        else
        {
            subjecterror.innerHTML = ""
        }
        }
     
        function validatePhnno()
        {
            var phone = document.getElementById("phone").value;
            var phnnoError = document.getElementById("phnnoError");
            if (phone.trim() == "")
            {
                  phnnoError.innerHTML = "Phone number is required";
             }
             else if (isNaN(phnno)) 
             {
                  phnnoError.innerHTML = "Please enter only a  number.";
             }
             else if (phnno.length != 10) 
             {
                  phnnoError.innerHTML = "Phone number must be 10 digits";
             }
        }