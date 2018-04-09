var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET data page. */
router.get('/', function(req, res, next) {
    res.render('data', {
        title: 'Data Page',
        author: 'Xeragus',
        data: data
    });
});

module.exports = router;
