function initialView(){
    document.getElementById("adminPage").style.display="block";
    document.getElementById("studentsList").style.display="none";
    document.getElementById("staffList").style.display="none";
    document.getElementById("studentFormContainer").style.display="none";
    document.getElementById("staffFormContainer").style.display="none";
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