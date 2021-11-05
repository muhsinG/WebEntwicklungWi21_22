var admin1 = new User("Admin", "Admin", true);
var loginCount=0;

function User(username, password, isAdmin){
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
}

function loginAsAdmin(){
    var adminUsername="Admin";
    var adminPassword="Admin";

    var formUsername = document.getElementById("loginUsername").value;
    var formPassword = document.getElementById("loginPassword").value;

    if (formUsername==adminUsername && formPassword==adminPassword){
        loginCount=0;
        window.location.href='admin.html';
    }
    else{
        loginCount=loginCount+1;
        alert("Wrong Crendentials")
    }
    if(loginCount>2){
        document.getElementById("loginUsername").disabled=true;
        document.getElementById("loginPassword").disabled=true;
        document.getElementById("adminLogin").disabled=true;
        document.getElementById("staffLogin").disabled=true;
        alert("Locked Out: Failed Login 3 times")
    }
}

function loginAsStaff(){
    var adminUsername="Admin";
    var adminPassword="Admin";

    var formUsername = document.getElementById("loginUsername").value;
    var formPassword = document.getElementById("loginPassword").value;

    if (formUsername==adminUsername && formPassword==adminPassword){
        loginCount=0;
        window.location.href='staff.html';
    }
    else{
        loginCount=loginCount+1;
        alert("Wrong Crendentials")
    }
    if(loginCount>2){
        document.getElementById("loginUsername").disabled=true;
        document.getElementById("loginPassword").disabled=true;
        alert("Locked Out: Failed Login 3 times")
    }
}
