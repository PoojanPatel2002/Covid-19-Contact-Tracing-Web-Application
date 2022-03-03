var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/radius', function(req, res) {
    req.pool.getConnection(function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;

        }
        connection.query('SELECT Radius, Longitude, Time, Latitude FROM Hotspots', function (err, rows, fields) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(rows);

        });
    });
});


router.get('/users', function(req, res) {
    req.pool.getConnection(function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;

        }
        req1=req.query.user;
        console.log(req1);
        let query='SELECT FirstName,LastName,Email FROM User where Email = ?';
        let values=[req1];
        connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(rows);

        });
    });
});


module.exports = router;
