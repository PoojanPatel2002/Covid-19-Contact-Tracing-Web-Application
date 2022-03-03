var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

var dbConnectionPool = mysql.createPool({  host: 'localhost',  database: 'TrackerApp'});

app.use(function(req, res, next) {  req.pool = dbConnectionPool;  next();});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'string',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/add-user', function(req, res) {

    req.pool.getConnection(function(err,connection) {
        req6=req.body.a;
        req7=req.body.b;
        req8=req.body.c;
        req9=req.body.d;
        
        if (err) {
            res.sendStatus(500);
            return;
        }
        // console.log(req6);
        let query = 'insert into User (FirstName,LastName,Email,Password) values (?,?,?,?)';
        let values = [req6, req7, req8, req9];
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


app.post('/add-manager', function(req, res) {

    req.pool.getConnection(function(err,connection) {
        req10=req.body.a;
        req11=req.body.b;
        req12=req.body.c;
        req13=req.body.d;
        console.log("Connecting error");
        if (err) {
            res.sendStatus(500);
            return;

        }
        console.log(req10+"*12345");
        let query = 'insert into Manager (FirstName,LastName,Email,Password,PhoneNumber) values (?,?,?,?,1235545)';
        let values = [req10, req11, req12, req13];
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


app.post('/add-admin', function(req, res) {

    req.pool.getConnection(function(err,connection) {
        req10=req.body.a;
        req11=req.body.b;
        req12=req.body.c;
        req13=req.body.d;
        console.log("Connecting error");
        if (err) {
            res.sendStatus(500);
            return;

        }
        console.log(req10+"*12345");
        let query = 'insert into Admin (FirstName,LastName,Email,Password,PhoneNumber) values (?,?,?,?,1234)';
        let values = [req10, req11, req12, req13];
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



module.exports = app;
