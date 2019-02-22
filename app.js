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

//app.get('/', (req, res) => {res.send('Hello World from Heroku!')})

var fullname = '';
var phone = '';
var userEmail = '';

var url =`mongodb://authUser:123456cd@ds263493.mlab.com:63493/authrn`;

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

    res.send(fullname)

)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))