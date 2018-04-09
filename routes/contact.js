var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact Page',
        email: 'xeragus.code@gmail.com'
    });
});

module.exports = router;
