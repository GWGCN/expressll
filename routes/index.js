var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express-LocalLibrary-Tutorial' });
  res.redirect('/catalog');
});

module.exports = router;
