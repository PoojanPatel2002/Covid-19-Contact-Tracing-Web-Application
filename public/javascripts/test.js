function SignUp(){
    reset();
    var login = document.getElementById("login");
    login.style.display = "none";
    var signup = document.getElementById("signup");
    signup.style.display = "block";
}

function LogIn(){
    reset();
    var login = document.getElementById("login");
    login.style.display = "block";
    var signup = document.getElementById("signup");
    signup.style.display = "none";
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    var id_token = { token: googleUser.getAuthResponse().id_token };

    var xhttp = new XMLHttpRequest();

/*    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerText = this.responseText;
        }
    };*/

    xhttp.open("POST", "/users/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(id_token));
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
var selectId;
function select(id){
    reset();
    var box = document.getElementById(id);
    box.style.backgroundColor = "coral";
    selectId = id;
    console.log(selectId);
}

function Signup(){
    var box1 = document.getElementById('user1');
    var box2 = document.getElementById('manager1');
    selectID = "none";

    let user = {
        firstName: document.getElementById('firstName').value,
        familyName: document.getElementById('familyName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('passwrd').value,
        samepassword: document.getElementById('samepassword').value
    };

    var statement = document.getElementById('print');

    if (user.password != user.samepassword) {
        statement.innerHTML = "Passwords do not match. Please try again!";
    } else if (user.firstName == "" || user.familyName == "" || user.email == "" || user.password == "" || user.samepassword == "") {
        statement.innerHTML = "Required field is empty. Please try again!";
    } else if ((user.password != user.samepassword) && (user.firstName == "" || user.familyName == "" || user.email == "" || user.password == "" || user.samepassword == "")) {
        statement.innerHTML = "Passwords not matching & Required field is empty. Please try again!";
    } else if (user.password.length < 8 ) {
        statement.innerHTML = "Passwords too short. Please try again!";
    } else  {
        users.push(user) ;
        LogIn();
        // document.getElementById('firstName').value = '';
        // document.getElementById('familyName').value = '';
        // document.getElementById('email').value = '';
        // document.getElementById('passwrd').value = '';
        // document.getElementById('samepassword').value = '';
    }

    let a = document.getElementById('firstName').value;
    let b = document.getElementById('familyName').value;
    let c = document.getElementById('email').value;
    let d = document.getElementById('passwrd').value;

    let  data = {'a': a, 'b': b,'c': c, 'd': d};

    if(box1.style.backgroundColor == "coral"){
        selectID = "user1";
    }else if(box2.style.backgroundColor == "coral"){
        selectID = "manager1";
    }

    let oReq = new XMLHttpRequest();

    if(selectId=="user1")
    {
      oReq.open("POST", "/add-user");
    }
    else if(selectId=="manager1")
    {
      oReq.open("POST", "/add-manager");
    }

   oReq.setRequestHeader("Content-type", "application/json");
   oReq.send(JSON.stringify(data));

}

function reset(){
    var box = document.getElementById('user');
    box.style.backgroundColor = "lightseagreen";
        var box1 = document.getElementById('manager');
    box1.style.backgroundColor = "lightseagreen";
        var box2 = document.getElementById('admin');
    box2.style.backgroundColor = "lightseagreen";
        var box3 = document.getElementById('user1');
    box3.style.backgroundColor = "lightseagreen";
        var box4 = document.getElementById('manager1');
    box4.style.backgroundColor = "lightseagreen";
}


function log () {
    var user = document.getElementById('user');
    var admin = document.getElementById('admin');
    var manager = document.getElementById('manager');
    var login = document.getElementById('btnLog');


    let logintype;
     if (user.style.backgroundColor == 'coral') {
    //                    window.location.href = "./user.html";
                        logintype = 'user';
                    }
                    else if (admin.style.backgroundColor == 'coral') {
  //                      window.location.href = "./admin.html";
                        logintype = 'admin';
                    } else if (manager.style.backgroundColor == 'coral') {
//                        window.location.href = "./manager.html";
                        logintype = 'manager';
                    } else {
                        alert('Please select account type Or enter correctly');
                    }

  let person = {
         user: document.getElementById("username").value,
         type: logintype,
         pass: document.getElementById("password").value,
    };

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var username = this.responseText;
             if (user.style.backgroundColor == 'coral') {
                        window.location.href = "./user.html";
    //                    logintype = 'user';
                    }
                    else if (admin.style.backgroundColor == 'coral') {
                      window.location.href = "./admin.html";
  //                      logintype = 'admin';
                    } else if (manager.style.backgroundColor == 'coral') {
                      window.location.href = "./manager.html";
//                        logintype = 'manager';
                    } else {
                        alert('Please select account type Or enter correctly');
                    }
         }
    };

    xhttp.open("POST", "/users/log", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(person));

}

function logout () {
    var xhttp = new XMLHttpRequest();
/*    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerText = this.responseText;
        }
    };*/

    xhttp.open("POST", "/users/logout", true);
    xhttp.send();
}


const getactors = () => {

      let oReq = new XMLHttpRequest();
      oReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           const response = JSON.parse(this.response);
           let res = "";
           for(let item of response)
           {
               res += `<tr><td>${item.Radius}</td><td>${item.Time}</td><td>${item.Latitude},${item.Longitude}</td></tr>`;
           }
           let ul = document.getElementById("tbody");
           ul.innerHTML=res;
        }
    };
     oReq.open("GET", "/radius");

    // sending a request
    oReq.send();
};



const addvenue = () => {

};


function addVenues(){
    var main = document.getElementById("main");
    var ask = document.getElementById("ask");
    main.style.display = "none";
    ask.style.display = "block";

}

function showVenues(){
    var main = document.getElementById("main");
    var ask = document.getElementById("ask");
    ask.style.display = "none";
    main.style.display = "block";
}

var venues = [];
var num_venues = 0;


function addVenue() {

    var venue = {
        venueName: document.getElementById('name').value,
        streetNum: document.getElementById('s_num').value,
        streetName: document.getElementById('s_name').value,
        suburb: document.getElementById('suburb').value,
        postcode: document.getElementById('postcode').value
    } ;

    venues.push(venue) ;

    var postDiv = document.createElement("DIV");
    postDiv.classList.add("venue");

    num_venues += 1;

    postDiv.innerHTML = `<div class="post">
                            </br>
                            <h2>Venue ${num_venues}</h2>
                            <p>Venue Name: ${venue.venueName} </p>
                            <p>Street Number: ${venue.streetNum}</p>
                            <p>Street Name: ${venue.streetName}</p>
                            <p>Suburb: ${venue.suburb}</p>
                            <p>Postcode: ${venue.postcode}</p>
                        </div>`;

    document.getElementById("venue-list").appendChild(postDiv);

    document.getElementById('name').value = '';
    document.getElementById('s_num').value = '';
    document.getElementById('s_name').value = '';
    document.getElementById('suburb').value = '';
    document.getElementById('postcode').value = '';

    showVenues();

    let a = document.getElementById('name').value;
    let b = document.getElementById('s_num').value;
    let c = document.getElementById('s_name').value;
    let d = document.getElementById('suburb').value;
    let e = document.getElementById('postcode').value;

    let  data = {'a': a, 'b': b,'c': c, 'd': d,'e': e};
    console.log(data);
    let oReq = new XMLHttpRequest();
    oReq.open("POST", "/users/add-venue");
    oReq.setRequestHeader("Content-type", "application/json");

    // sending a request
    oReq.send(JSON.stringify());

    let oReq1 = new XMLHttpRequest();
    oReq1.open("POST", "/users/add-venueAdd");
    oReq1.setRequestHeader("Content-type", "application/json");

    // sending a request
    oReq1.send(JSON.stringify(data));
}

var users = [];
// function signUp(){
//     let user = {
//         firstName: document.getElementById('firstName').value,
//         familyName: document.getElementById('familyName').value,
//         email: document.getElementById('email').value,
//         password: document.getElementById('passwrd').value,
//         samepassword: document.getElementById('samepassword').value
//     };

//     var statement = document.getElementById('print');

//     if (user.password != user.samepassword) {
//         statement.innerHTML = "Passwords do not match. Please try again!";
//     } else if (user.firstName == "" || user.familyName == "" || user.email == "" || user.password == "" || user.samepassword == "") {
//         statement.innerHTML = "Required field is empty. Please try again!";
//     } else if ((user.password != user.samepassword) && (user.firstName == "" || user.familyName == "" || user.email == "" || user.password == "" || user.samepassword == "")) {
//         statement.innerHTML = "Passwords not matching & Required field is empty. Please try again!";
//     } else if (user.password.length < 8 ) {
//         statement.innerHTML = "Passwords too short. Please try again!";
//     } else  {
//         users.push(user) ;
//         LogIn();
//         document.getElementById('firstName').value = '';
//         document.getElementById('familyName').value = '';
//         document.getElementById('email').value = '';
//         document.getElementById('passwrd').value = '';
//         document.getElementById('samepassword').value = '';
//         var xhttp = new XMLHttpRequest();

//     /*    xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.getElementById("output").innerText = this.responseText;
//             }
//         };*/

//         xhttp.open("POST", "/users/signupUsers", true);
//         xhttp.setRequestHeader("Content-type", "application/json");
//         xhttp.send(JSON.stringify(user));
//     }

//     console.log(user);
//     console.log(users);
// }

function signUp(){

    let a = document.getElementById('firstName').value;
    let b = document.getElementById('familyName').value;
    let c = document.getElementById('email').value;
    let d = document.getElementById('passwrd').value;

    let  data = {'a': a, 'b': b,'c': c, 'd': d};


    console.log("data got");

    let oReq = new XMLHttpRequest();

    oReq.open("POST", "/add-admin");

   oReq.setRequestHeader("Content-type", "application/json");
   oReq.send(JSON.stringify(data));

}


var num_venue = 0;
function showVenueDetails() {
    var venuesPeople = document.getElementById('venues');

    num_venue += 1;

    venuesPeople.innerHTML = `<h2>Venue ${num_venue}</h2>
                                <table id="myTable" class="history-table" style="width: 900px">
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Family Name</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody id="tbody">
                                      <tr>
                                        <td>Parth</td>
                                        <td>Vyas</td>
                                        <td>vyas@gmail.com</td>
                                      </tr>
                                      <tr>
                                        <td>Poojan</td>
                                        <td>Patel</td>
                                        <td>p.patel2002@gmail.com</td>
                                      </tr>
                                      <tr>
                                        <td>Karan</td>
                                        <td>Gupta</td>
                                        <td>karan@gmail.com</td>
                                      </tr>
                                      <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>jil@gmail.com</td>
                                      </tr>
                                    </tbody>
                                </table>`;
}


/*function checkinHistory() {
    var venueName = document.getElementsByName('h2');
    venueName.innerHTML = venue.venueName;
}*/
/*
             <h2>Venue Name</h2>
                <table id="myTable" class="history-table" style="width: 900px">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Family Name</th>
                        <th>Email</th>*/
