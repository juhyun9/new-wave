var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res){
  res.render('home/welcome');
});
router.get('/gps', function(req, res){
  res.render('home/gps');
});
router.get('/chat', function(req, res){
  res.render('home/chat');
});

module.exports = router;
