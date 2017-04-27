var express = require('express');
var fortune = require('../lib/fortune');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.render('about', {title: 'About', fortune: fortune.getFortune(), pageTestScript:'/qa/tests-about.js'});
});

router.get('/tours/hood-river', function (req, res) {
  res.render('tours/hood-river');
});

router.get('/tours/request-group-rate', function (req, res) {
  res.render('tours/request-group-rate');
});

router.get('/headers', function (req, res) {
  res.set('Content-Type', 'text/plain');
  var s = '';
  for(var _name in req.headers){
    s += _name + ': ' + req.headers[_name] + '\n';
  }
  res.send(s);
});

/*router.get('/greeting', function (req, res) {
  res.render('about', {
    message:'welcome',
    style:req.query.style,
    userid:req.cookie.userid,
    username:req.session.username,
  });
});*/


module.exports = router;
