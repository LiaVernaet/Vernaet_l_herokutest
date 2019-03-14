var express = require('express');
var router = express.Router();

/* GET home page. Goes into body tag */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your First Express App', message: 'Express is actually pretty easy once you figure it out' });
});

module.exports = router;
