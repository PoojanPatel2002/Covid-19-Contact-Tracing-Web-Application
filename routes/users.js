var express = require('express');
var router = express.Router();

const CLIENT_ID = '906464303990-ug5bc35fu4h4d7aq6jg97qqen9v26k02.apps.googleusercontent.com';
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let users = {
  a: 'f',
  Parth: 'pass2',
  Devansh: 'password4'
};

var Users = [];

router.post('/signupUsers', function(req, res, next) {
  Users.push(req.body);
  console.log(Users);
  res.end();
});

router.post('/login', function(req, res, next) {
/*  console.log(req.body.user);
  console.log(req.body.pass);*/

    if ('user' in req.body) {
        if (req.body.user in users) {
            if(users[req.body.user] == req.body.pass) {
                req.session.user = req.body.user; // assign a session to the user logged in
                res.send(req.session.user);
                console.log("signed-in");
            } else {
                res.sendStatus(401);
                console.log("Not able to sign in");
            }
        } else {
            res.sendStatus(401);
            console.log("Not able to sign in");
        }
    } else if ('token' in req.body) {
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: req.body.token,
              audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                                    // Or, if multiple clients access the backend:
                                    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT  _ID_3]
          });
          const payload = ticket.getPayload();
          req.session.user = payload['email'];
          console.log("signed-in with google");
          // If request specified a G Suite domain:
          // const domain = payload['hd'];
        }
        verify().catch(res.sendStatus(401));
    }
});

router.post('/logout', function(req, res, next) {
  delete req.session.user ;
  res.send();
  console.log("signed-out");
});


router.post('/add-venue', function(req, res) {

    req.pool.getConnection(function(err,connection) {
        // req1=req.body.a;
        // req2=req.body.b;
        // req3=req.body.c;
        // req4=req.body.d;
        // req5=req.body.e;
        // if (err) {
        //     res.sendStatus(500);
        //     return;

        // }
        console.log('*1');
        // let query = 'insert into VenueAddress (VenueCode,StreetNumber,StreetName,Subrub,PostCode,Longitude,Latitude,VenueName) values ((select VenueCode from Venue),?,?,?,?,"325","463",?)';
        let query = 'insert into Venue (ManagerID) values ((select ManagerID from Manager where Email="pp@gmail.com"))';
        let values = [];
        connection.query(query, values, function (err, rows, fields) {
          console.log('2');

        if (err) {
            res.sendStatus(500);
            return;
        }
        res.end();

        });
    });
});

router.post('/add-venueAdd', function(req, res) {

    req.pool.getConnection(function(err,connection) {
        req1=req.body.a;
        req2=req.body.b;
        req3=req.body.c;
        req4=req.body.d;
        req5=req.body.e;
        if (err) {
            res.sendStatus(500);
            return;

        }
        console.log('-1');
    //     let query = 'insert into VenueAddress (VenueCode, VenueName, StreetNumber, StreetName, Suburb, Postcode) values ((select VenueCode from Venues where ManagerId=(Select ManagerID from Manager where Email="pp@gmail.com")),?,?,?,?,? )';
    //     let values = [req1, req2, req3, req4, req5];
    //     connection.query(query, values, function (err, rows, fields) {
    //       console.log('2');

    //     if (err) {
    //         res.sendStatus(500);
    //         return;
    //     }
    //     res.end();

    //     });
     });
});

router.post('/log', function(req, res, next) {

    var type = req.body.type;

    if (type == "manager") {
        manager = 1;
    } else if (type == "admin") {
        admin = 1;
    }

    if ('user' in req.body && 'pass' in req.body) {
        req.pool.getConnection(function(err,connection) {
            req6=req.body.user;
            req7=req.body.pass;

            if (err) {
                res.sendStatus(500);
                return;
            }

            let email = req.body.user;
            let pass = req.body.pass;

            if (type == "user"){

                    var query = `SELECT UserID,Email,Password from User where Email = ?`;

            }else if (type == "manager") {

                  var query = `SELECT ManagerID,Email,Password from Manager where Email = ?`;
            }
            else if(type == "admin")
            {
                 var query = `SELECT AdminID,Email,Password from Admin where Email = ?`;

            }
            let values = [req6];
            connection.query(query, values, function (err, rows, fields) {

            if (rows.length == 0 || rows[0].Password != pass || email == "") {
                res.sendStatus(401);
            }
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.end();

            });
        });
    }
});


router.post('/add-hotspot', function(req, res) {

    req.pool.getConnection(function(err,connection) {
        req1=req.body.lat;
        req2=req.body.lng;
        req3=req.body.radius;
        req4=req.body.time;

        if (err) {
            res.sendStatus(500);
            return;

        }
        console.log('1');
        let query = 'insert into Hotspots (Latitude, Longitude, Radius, Time) values (?,?,?,?)';
        let values = [req1, req2, req3, req4];
        connection.query(query, values, function (err, rows, fields) {
          console.log('2');

        if (err) {
            res.sendStatus(500);
            return;
        }
        res.end();

        });
    });
});


module.exports = router;

