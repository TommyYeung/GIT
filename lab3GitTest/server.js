
/*
var express = require('express');
var app = express();

var HOST = 'localhost';
var PORT = 3000;


//app.use('/', function(req, res) { //root dir, respond send hello world
//   console.log(`the request url is ${req.url}`)
  //  console.log(`the request url is ${req.body}`)
//
  //  res.send('Hello big explosion');
    //});

/////////////////////////////////////////
var express = require('express');
var hasName = function(req, res, next) {
if (req.param('name')) {
next();
} else {
res.send('What is your name?');
}
};
/////////////////////////////////////////
var sayHello = function(req, res, next) {
res.send('Hello ' + req.param('name'));
};
var app = express();
//////////////////////////////////////////

app.get('/', hasName, sayHello);// path req res
app.listen(3000);
console.log('Server running at http://localhost:3000/');
//////////////////////////////////////////





//app.listen(3000);
//    console.log(`Server running at http://${HOST}:${3000}/`);
   


module.exports = app;

*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'); //call express > route > contorl > 
var app = express();

var HOST = 'localhost';
var PORT = 3000;


app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');





