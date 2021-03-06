/*var express = require(‘express');
var port = process.env.PORT || 3000;
var app = express();
app.get(‘/’, function (req, res) {
 res.send(JSON.stringify({ Hello: ‘World’}));
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});*/

const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;
var port = process.env.PORT || 3000;
var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;

//app.get('/', (req, res) => {res.send('Hello World from Heroku!')})

var fullname = '';
var phone = '';
var userEmail = '';

var url =`mongodb://${DB_USER}:${DB_PASS}@ds263493.mlab.com:63493/authrn`;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("authrn");
    dbo.collection("users").findOne({"username": "schvetsov"}, { projection: {_id: 0}}, function(err, result) {
        if (err) throw err;
        fullname = result.fullname;
        phone = result.phone;
        userEmail = result.email;
        db.close();
    });
});

app.get('/', (req, res) => 

    res.send("Hi " + fullname + " " + phone)

)

app.listen(port, () => console.log(`Example app listening on port ${port}! ${fullname}`))