function saveInput() { // Save Input in local storage

    var name1 = document.getElementById("newUsr").value;
    var pw = document.getElementById("newPw").value;

    var loginUsr = { // Create an object named user from input 
        loginName: name1,
        Password: pw,   
    }

    var id = "user" + (localStorage.length);

    localStorage.setItem(id, JSON.stringify(loginUsr));
}

// check if stored data from register-form is equal to entered data in the login-form
function check() {



    // stored data from the register-form
    var storedName = localStorage.getItem('newUsr');
    var storedPw = localStorage.getItem('newPw');



    // entered data from the login-form
    var username = document.getElementById('enteredName').value;
    var userPw = document.getElementById('enteredPw').value;

    // check if stored data from register-form is equal to data from login form
    if(username.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
    
}

