const express = require('express');
const path = require('path');

const app = express();

const staticp = path.join(__dirname, './public');

app.use(express.static(staticp));

app.get('/', (req, res)=>{
    res.send("hello boy");
});

app.listen(1500);