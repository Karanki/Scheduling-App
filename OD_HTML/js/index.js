window.onload = function(){
    document.getElementById("bBtn").style.visibility = "hidden";
};


function hideSignup(){

    document.getElementById("loginOD").style.visibility = "hidden";
    document.getElementById("signupOD").style.visibility = "hidden";
    document.getElementById("dLogin").style.visibility = "visible";
    document.getElementById("dLogin").style.display = "";
    document.getElementById("dMain").style.display = "none";
    document.getElementById("bBtn").style.visibility = "visible";
};



function hideLogin(){

    document.getElementById("loginOD").style.visibility = "hidden";
    document.getElementById("signupOD").style.visibility = "hidden";
    document.getElementById("dSignup").style.visibility = "visible";
    document.getElementById("dSignup").style.display = "";
    document.getElementById("dMain").style.display = "none";
    document.getElementById("bBtn").style.visibility = "visible";
};


$("#bBtn").click(
function showMain(){
    document.getElementById("loginOD").style.visibility = "visible";
    document.getElementById("signupOD").style.visibility = "visible";
    document.getElementById("dLogin").style.visibility = "hidden";
    document.getElementById("dLogin").style.display = "none";
    document.getElementById("dSignup").style.visibility = "hidden";
    document.getElementById("dSignup").style.display = "none";
    document.getElementById("dMain").style.display = "";
    document.getElementById("bBtn").style.visibility = "hidden";
 });