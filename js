// User class created to implement features
class User {

  // The constructor for our class, which will allow us to create new objects of our class
    constructor(username, password) {
      this.username = username;
      this.password = this.hashPassword(password);
      this.setLastAccess();
    }
  
  // Initialize an empty array
  var users = JSON.parse(localStorage.getItem("users"));
  
  // Bind the button to a variable for later use
  var submit = document.getElementById('submit');
  
  // Bind the span for result text for later use
  var resultSpan = document.getElementById('loginResult');
  
  // counter in order to see if the user has tried to login too many times
  var counter = 3;
  
  // Bind the onClick-function to our own function
 
 if (submit !== null) {

  submit.onclick = function(){
  
    // Bind the two input fields and get the value
    var inputUsername = document.getElementById('username');
    var inputPassword = document.getElementById('password');


    if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
      // We set the resultspan with a new text and return false to get out of this function
      resultSpan.innerText = "Statee your email and password";
      return false;
    }

    console.log(users);
  
    // We loop through all our users and return true if we find a match
    for(var i = 0; i < users.length; i++) {
  
      // Bind user to a variable for easy use
      var userType = new User("test", "test");
      var user = users[i];

        // We try to create a variable with the hashed version of the inputPassword
        var hashedInputPassword = userType.hashPassword(inputPassword.value);

      // If username and password correct we have in put matches the one in our loop
      if(user.username == inputUsername.value && user.password == hashedInputPassword)  {
        return window.location.replace("file:///Users/VincentSchulin/Desktop/web-projects/Github/mainpage.html")
      }
        else {
      resultSpan.innerText = "Wrong username or password - Please try again";
    }
    }
    } 

  }

//Create an account - Link to sign-up form
if (onclick !== null)

document.getElementById("createaccount").onclick = function () {
    location.href = "signup1.html";
};


function lastModified() {
  var modiDate = new Date(document.lastModified);
  var showAs = modiDate.getDate() + "-" + (modiDate.getMonth() + 1) + "-" + modiDate.getFullYear();
  return showAs
}

function GetTime() {
  var modiDate = new Date();
  var Seconds

  if (modiDate.getSeconds() < 10) {
      Seconds = "0" + modiDate.getSeconds();
  } else {
      Seconds = modiDate.getSeconds();
  }

  var modiDate = new Date();
  var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds
  return CurTime
}

document.write("Last updated on ")
document.write(lastModified() + " @ " + GetTime());
document.write("");

// Sign up form

var signup = document.getElementById('signup');
if(signup !== null){
  signup.onclick = function(){

      var usernamesignup = document.getElementById("usernamesignup").value;
      var passwordsignup = document.getElementById("passwordsignup").value;

      var newUser = new User(usernamesignup, passwordsignup);
      users.push(newUser);
  
      localStorage.setItem("users", JSON.stringify(users)); 

      console.log(users);
  } 
}
