const path = require('path');
const express = require('express');
//construct a oath to the root directory
const  rootDir = require('../util/path')
const router = express.Router();

//router.get('/users',(req, res, next) => {
    //res.send('<h1>add product</h1>');
   
//});


//general route
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;