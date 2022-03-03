// const disp = () => {

//       let oReq = new XMLHttpRequest();
//       oReq.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           const response = JSON.parse(this.response);
//           console.log(response);
//         }
//     };
//      oReq.open("GET", "/users");

//     // sending a request
//     oReq.send();
// };

var vueinst = new Vue({el : "#content" ,
    data:{
       name: 'Parth',
       lastname: 'Vyas',
       email: 'parth.vyas@gmail.com',
    }
});