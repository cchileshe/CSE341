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