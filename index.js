const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname)

const StaticPath = path.join(__dirname, './public');

app.use(express.static(StaticPath));

app.get('/', function(req, res){
    res.end('hello');
});

app.listen(1500);