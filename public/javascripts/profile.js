function password(){
    var initial = document.getElementById("first");
    var pass = document.getElementById("changepass");
    var edit = document.getElementById("changes");

     initial.style.display = "none";
     pass.style.display = "block";
     edit.style.display = "none";
}

function makeChanges(){
    var initial = document.getElementById("first");
    var pass = document.getElementById("changepass");
    var edit = document.getElementById("changes");

     initial.style.display = "block";
     pass.style.display = "none";
     edit.style.display = "block";
}

function save(){
var initial = document.getElementById("first");
    var pass = document.getElementById("changepass");
    var edit = document.getElementById("changes");

     initial.style.display = "block";
     pass.style.display = "none";
     edit.style.display = "none";
}