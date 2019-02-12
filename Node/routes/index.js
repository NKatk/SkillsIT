const express = require('express');
const router = express.Router();
const fs =require('fs');

let content = fs.readFileSync(__dirname + '/data/homePage/content.json', 'utf-8');
let events = fs.readFileSync(__dirname + '/data/homePage/events.json', 'utf-8');
let greeting = fs.readFileSync(__dirname + '/data/homePage/greeting.json', 'utf-8');
//let partnership = fs.readFileSync(__dirname + '/data/homePage/partnership.json', 'utf-8');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(content);
    res.render('home');
});

router.get('/api/getThisContent', function(req, res){
    res.send(content);
});

router.get('/api/getThisEvents', function (req, res) {
    //console.log (events);
    res.send(events);
});

router.get('/api/getThisGreeting', function (req, res) {
    //console.log (events);
    res.send(greeting);
});

router.get('/api/getThisPartnerShip', function (req, res) {
    //console.log (partnership);
    //res.send(partnership);
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
