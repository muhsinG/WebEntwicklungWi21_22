function initialView(){
    document.getElementById("adminPage").style.display="block";
    document.getElementById("studentsList").style.display="none";
    document.getElementById("staffList").style.display="none";
    document.getElementById("studentFormContainer").style.display="none";
    document.getElementById("staffFormContainer").style.display="none";
    disableFutureDate();
    dobValidation();
    joinDateValidation();
}

function showStudentList(){
    document.getElementById("adminPage").style.display="block";
    document.getElementById("studentsList").style.display="block";
    document.getElementById("staffList").style.display="none";
    document.getElementById("studentFormContainer").style.display="none";
    document.getElementById("staffFormContainer").style.display="none";
}

function showStaffList(){
    document.getElementById("adminPage").style.display="block";
    document.getElementById("studentsList").style.display="none";
    document.getElementById("staffList").style.display="block";
    document.getElementById("studentFormContainer").style.display="none";
    document.getElementById("staffFormContainer").style.display="none";
}

function showStudentForm(){
    document.getElementById("adminPage").style.display="block";
    document.getElementById("studentsList").style.display="block";
    document.getElementById("staffList").style.display="none";
    document.getElementById("studentFormContainer").style.display="block";
    document.getElementById("staffFormContainer").style.display="none";
}

function showStaffForm(){
    document.getElementById("adminPage").style.display="block";
    document.getElementById("studentsList").style.display="none";
    document.getElementById("staffList").style.display="block";
    document.getElementById("studentFormContainer").style.display="none";
    document.getElementById("staffFormContainer").style.display="block";
}
function getInputDateFormat(date){
    return date.toISOString().split('T')[0];
}

function disableFutureDate(){
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()-1);
    document.getElementById("StudentDob").setAttribute('max', maxDate.toISOString().split('T')[0]);
}

function dobValidation(){
    var today = new Date();
    var minAge = new Date;
    var maxAge = new Date;
    minAge.setFullYear(today.getFullYear()-17);
    maxAge.setFullYear(today.getFullYear()-60);
    document.getElementById("StudentDob").setAttribute('max', getInputDateFormat(minAge));
    document.getElementById("StudentDob").setAttribute('min', getInputDateFormat(maxAge));
}

function joinDateValidation(){
    var minJoinDate = new Date();
    minJoinDate.setFullYear(2015);
    minJoinDate.setDate(1);
    minJoinDate.setMonth(1);

    document.getElementById("dateJoined").setAttribute('min', getInputDateFormat(minJoinDate))
    document.getElementById("dateJoined").setAttribute('max', getInputDateFormat(new Date()))

}