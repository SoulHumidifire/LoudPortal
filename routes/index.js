var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mainlayout', { title: 'Express' });
});

/* GET home page. */
router.get('/email', function(req, res, next) {
  res.render('sqweezelayout', { title: 'Express' });
});

module.exports = router;
