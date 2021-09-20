<<<<<<< HEAD
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
=======
const http = require('http');
const express = require('express');
const app = express();

app.use('/users',(req, res, next) => {
    console.log('in the middleware');
    res.send('<h1>add product</h1>');
    //next();
});

app.use('/', (req, res, next) => {
    console.log('in the middleware');
    res.send('<h1>default</h1>');
});


const server = http.createServer(app);

server.listen(3000);
>>>>>>> parent of 54c07a1 (Working with Express js)
