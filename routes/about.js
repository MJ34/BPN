var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('modal/about', { title: 'Bakti Putra Nusantara' });
});

module.exports = router;
