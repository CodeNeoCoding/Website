// setup materialize components

const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();  

  //get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // Signup the user
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

  })




