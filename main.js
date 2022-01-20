var express = require('express');
var http = require('http');
var app = express();

app.set('routes', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index');
});

// Routes
app.use('/', require('./routes/home'));

//port
app.listen(8080, function(){
  console.log('Main Page 8080!');
});
