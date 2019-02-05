var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});


router.get('/courses', function(req,res,next){
  res.render('curses', {title: 'Курсы'});
});

module.exports = router;
