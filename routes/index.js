var express = require('express');
var fortune = require('../lib/fortune');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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






module.exports = router;
