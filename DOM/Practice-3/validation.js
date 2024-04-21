

// validation.js
(() => {
  'use strict';

  // Fetch the form element
  const form = document.getElementById('form-response');
  let database = []


  // Function to sign up user
  function SignUp() {
      // Retrieve form field values
      let fname = document.getElementById('firstName').value;
      let lname = document.getElementById('lastName').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('pwd').value;
      let address = document.getElementById('address').value;
      let city = document.getElementById('city').value;
      let state = document.getElementById('state').value;
      let res = document.getElementById('res');

      // Check if user already exists in the database
      let user = database.find(item => item.email === email);
      if (!user) {
          // Add user data to the database array
          database.push({
              fname: fname,
              lname: lname,
              email: email,
              password: password,
              address: address,
              city: city,
              state: state
          });
          res.innerText = "Successful Sign Up";
      } else {
          res.innerText = "User Already Exists";
      }
  }

  // Add event listener for form submission
  form.addEventListener('submit', event => {
      // Prevent form submission if it's invalid
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }

      // Call SignUp function to save user data
      SignUp();

      // Add 'was-validated' class to the form for Bootstrap styling
      form.classList.add('was-validated');
  });
})();
