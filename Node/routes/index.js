var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});


router.get('/courses', function(req,res,next){
  res.render('courses');
});

router.get('/events', function(req,res,next){
    res.render('events');
});

router.get('/about', function(req,res,next){
    res.render('aboutUs');
});

router.get('/partnership', function(req,res,next){
    res.render('partnership');
});

router.get('/locations', function(req,res,next){
    res.render('ourLocation');
});


module.exports = router;
