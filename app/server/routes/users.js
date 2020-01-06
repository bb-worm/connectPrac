var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mainImg', function(req, res, next) {
  res.sendfile(path.resolve('public/images/qu.jpeg'));
});

module.exports = router;
