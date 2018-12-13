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
var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World from Heroku!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))