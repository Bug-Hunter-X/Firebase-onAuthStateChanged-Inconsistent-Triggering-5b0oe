//Original buggy code (authBug.js)
firebase.auth().onAuthStateChanged(user => {
  // Update UI based on user
  if (user) {
    // User is signed in...
  } else {
    // User is signed out...
  }
});

//Solution (authSolution.js)
let userIsLoggedIn = false; //Track authentication state independently
firebase.auth().onAuthStateChanged(user => {
  userIsLoggedIn = !!user; //Update our tracker
  updateUiBasedOnAuthStatus(userIsLoggedIn);
});

//Helper Function
function updateUiBasedOnAuthStatus(isLoggedIn) {
  if (isLoggedIn) {
    // Update UI
  } else {
    // Update UI
  }
}
//Debouncing mechanism can also be added here if needed.