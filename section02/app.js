const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//import routes
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

//filtering with /admin
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//404 error page
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000);