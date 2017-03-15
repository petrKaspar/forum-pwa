// 'use strict'

var express = require('express')
var bodyParser = require('body-parser')

// Create a new instance of express
var app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: true }));   // aby to umelo automaticky parsovat json
app.use(bodyParser.json());



// Route that receives a POST request to /sms
app.post('/sms', function (req, res) {
  // var body = req.body
  // res.set('Content-Type', 'application/json')
  res.set('Content-Type', 'text/plain')
  var body = { action: "get_threads"}
  // var body = JSON.parse(req.body)
  console.log('--------------- '+req.body.password)
  console.log('-------- '+JSON.stringify(req.body))
  res.send(JSON.stringify(body))
})


app.post('/true', function (req, res) {
  // var body = req.body
  // res.set('Content-Type', 'application/json')
  res.set('Content-Type', 'text/plain')
  var body = { username: "uuuuuuuuuuuuuu",password:"pppppppppppppppp"}
  // // var body = JSON.parse(req.body)
  console.log('--------------- '+req.body.password)
  console.log('-------- '+JSON.stringify(req.body))
  res.send(JSON.stringify(body));
})


app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

app.get('/',function(req,res){

  res.set('Content-Type', 'text/plain')
  var body = { action: "get_threads"}
  // var body = JSON.parse(req.body)
  console.log('-------+++++++- '+req.body)
  console.log('-------++++++++++- '+JSON.stringify(req.body))
  res.send(JSON.stringify(body))


  // console.log('-------+++++++- '+req)
  // res.sendfile("index.html");
});

// Tell our app to listen on port 3001
app.listen(3001, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3001')
})




/*
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
  res.send('Hello')
})

app.get('/ahoj', function (req, res) {
  res.send('Ahoj světe')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
*/
