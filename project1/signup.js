function Validatefname(input) {
  var fname = document.getElementById("fname").value;
  var ferror = document.getElementById("ferror")
  if (fname.trim() == "")
  {
       ferror.innerHTML = "First name required";
  }
  else
  {
       ferror.innerHTML = ""
  }
  }
          
function Validatelname() {
  var lname = document.getElementById("lname").value;
  var lerror = document.getElementById("lerror");
  if (lname.trim() == "") 
  {
       lerror.innerHTML = "last name required";
  }
  else
  {
       lerror.innerHTML = ""
  }
  }

  function Validateuname() {
     var uname = document.getElementById("uname").value;
     var uerror = document.getElementById("uerror");
     if (uname.trim() == "") 
     {
          uerror.innerHTML = "last name required";
     }
     else
     {
          uerror.innerHTML = ""
     }
     }

  


  function validatePhnno()
{
    var phnno = document.getElementById("phnno").value;
    var phnnoError = document.getElementById("phnnoError");
    if (phnno.trim() == "")
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



function validatepassword()
{
     var password = document.getElementById("password").value;
     var pswError = document.getElementById("pswError");
   if(password.trim() == "")
   {
      pswError.innerHTML = "Password is required";
   }
   else if (password.length<=5) 
   {
      pswError.innerHTML = "Enter valid password with 5 or more characters";
   }
}

function validateConfirmpassword()
{
 var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  var confirmpasswordError = document.getElementById("confirmpasswordError");
if(confirmpassword.trim() == "")
{
confirmpasswordError.innerHTML = "Confirmpassword is required";
}
else if(password !=confirmpassword)
{
        confirmpasswordError.innerHTML = "Password and Confirmpassword doen't match";
}
}

function ValidateUsername() {
  var uname = document.getElementById("uname").value;
  var uerror = document.getElementById("uerror")
  if (uname.trim() == "")
  {
       uerror.innerHTML = "Username required";
  }
  else
  {
       uerror.innerHTML = ""
  }
  }


  function onclickdate()
   {
          var inputdob=document.getElementById("dob").value;
          let dob = new Date(inputdob);
          let currentDate = new Date;
          var caldob=currentDate.getFullYear() - dob.getFullYear();
          document.getElementById("resultage").value=(caldob);
  }



// function validateDate() {
//     var day = document.getElementById("day").value;
//     var month = document.getElementById("month").value;
//     var year = document.getElementById("year").value;
//     var date = new Date(year, month - 1, day);
//     if ( date.getFullYear() != year ||
//     date.getMonth() + 1 != month ||
//     date.getDate() != day
//     ) {
//         document.getElementById("doberror").textContent = "Selected date is invalid.";
//         return true;
//     }
//     document.getElementById("doberror").textContent = "";
//     return true;
//     }
//     document.getElementById("day").addEventListener("change", validateDate);
//     document.getElementById("month").addEventListener("change", validateDate);
//     document.getElementById("year").addEventListener("change", validateDate);
    
// function calculateAge() {
//      var birthDay = document.getElementById("day").value;
//      var birthMonth = document.getElementById("month").value;
//      var birthYear = document.getElementById("year").value;
//      if (birthDay && birthMonth && birthYear) {
//      var currentDate = new Date();
//      var currentDay = currentDate.getDate();
//      var currentMonth = currentDate.getMonth() + 1;
//      var currentYear = currentDate.getFullYear();
//      var age = currentYear - birthYear;
//      if (currentMonth < birthMonth || (currentMonth == birthMonth && currentDay < birthDay)) {
//      age--;
//      }

//        document.getElementById("age").value = age;
//     } else {
//         document.getElementById("age").value = "";
//     }
//     }
//     function validatedob() {
   
//         const day = document.getElementById("day").value;
//         const month = document.getElementById("month").value;
//         const year = document.getElementById("year").value;
//         const errorDiv1 = document.getElementById("doberror");

//         if (day === "" || month === "" || year === "") {
//         errorDiv1.textContent = "Date of birth is required.";

//   }
// }





const cityMap = {
    tamilnadu: ["Chennai","Madurai", "Tirunelveli", "Trichy","Erode"],
    kerala: ["Kochin", "Pallakad", "Udupi","Thiruvanathapuram","Kollam"],
    karnataka:["Mangaluru", "Bengaluru","Ballari","Shivamogga"]

};

function updateCityDropdown() {
    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");
    const selectedState = stateDropdown.value;
    cityDropdown.innerHTML = "";

    const initialOption = document.createElement("option");
    initialOption.value = "select";
    initialOption.text = "Select a City";
    cityDropdown.appendChild(initialOption);

    const cities = cityMap[selectedState] || [];
    cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        cityDropdown.appendChild(option);
    });
}


updateCityDropdown();








//   function validatedob() {
             
//     const day = document.getElementById("day").value;
//     const month = document.getElementById("month").value;
//     const year = document.getElementById("year").value;
//     const errorDiv1 = document.getElementById("doberror");

//     if (day === "" || month === "" || year === "") {
//       errorDiv1.textContent = "Date of birth is required.";
//     }
//   }
