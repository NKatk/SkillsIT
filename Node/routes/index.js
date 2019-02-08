const express = require('express');
const router = express.Router();
const fs =require('fs');

let content = fs.readFileSync(__dirname + '/data/home.json', 'utf-8');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(content);
    res.render('home');
});

router.get('/api/getContent', function(req, res){
    let con = JSON.parse(content);
    //console.log(con);
    res.send(con);
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
