var radius = 0;
function addRadius() {
    radius = document.getElementById("addMark").value;
}

var createCircle;
var lat;
var lng;
var cord;

function addVenue() {
    var add = document.getElementById("addDiv");
    var edit = document.getElementById("editDiv");

    if (edit.style.display == "block") {
        edit.style.display = "none";
    }

    if (add.style.display == "none") {
        add.style.display = "block";
    } else {
        add.style.display = "none";
    }

    var marker;
    marker = L.marker([-34.9085,138.6107], {
        draggable: true,
    }).addTo(mymap);

    marker.on('click', function(e) {
    cord = marker.getLatLng().toString();
    lat = marker.getLatLng().lat;
    lng = marker.getLatLng().lng;

    createCircle = L.circle([lat,lng], {
        olor: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: radius
    }).addTo(mymap);
    createCircle.bindPopup("Last Updated:, Radius:"+radius);

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var rad = row.insertCell(0);
    var time = row.insertCell(1);
    var location = row.insertCell(2);

    var date = new Date();

    rad.innerHTML = radius;
    time.innerHTML = date.getHours() + " at "+ date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    location.innerHTML = lat + ", " + lng;

    let  data = {'lat': lat, 'lng': lng, 'radius': radius, 'time': time.innerHTML};

    let oReq = new XMLHttpRequest();
    oReq.open("POST", "/users/add-hotspot");
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(data));
    });
}


var rad = 0;
 function editRadius() {
      rad = document.getElementById("editMark").value;
 }


function editVenue() {
    var edit = document.getElementById("editDiv");
    var add = document.getElementById("addDiv");

    if (add.style.display == "block") {
        add.style.display = "none";
    }

    if (edit.style.display == "none") {
        edit.style.display = "block";
    } else {
        edit.style.display = "none";
    }


    var changeRad = document.getElementById("radiusMark");
    var changeLoc = document.getElementById("locationMark");
    var del = document.getElementById("deleteMark");

    // radius
    createCircle.on('click', function(e) {
        createCircle.setRadius(rad);
    //     createCircle = L.circle([lat,lng], {
    //         color: 'red',
    //         fillColor: '#f03',
    //         fillOpacity: 0.2,
    //         radius: rad
    //     }).addTo(mymap);
    //     createCircle.bindPopup("Last Updated:, Radius:"+rad);
    let  data = {'lat': lat, 'lng': lng, 'radius': radius};

    let oReq = new XMLHttpRequest();
    oReq.open("POST", "/users/add-hotspot");
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(data));
     });


}

function removeCircle() {
    createCircle.on('click', function(e) {
    mymap.removeLayer(createCircle);
    });
}

function changeLocation() {

    createCircle.on('click', function(e) {
    mymap.removeLayer(createCircle);
    });

    if (mymap.hasLayer(createCircle) != true) {

        marker.on('click', function(e) {

        lat = marker.getLatLng().lat;
        lng = marker.getLatLng().lng;


        createCircle = L.circle([lat,lng], {
        olor: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: rad
    }).addTo(mymap);
    createCircle.bindPopup("Last Updated:, Radius:"+radius);
    let  data = {'lat': lat, 'lng': lng, 'radius': radius};

    let oReq = new XMLHttpRequest();
    oReq.open("POST", "/users/add-hotspot");
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(data));
    });
    }
}