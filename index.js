'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', (req, res, next) =>  {    
    res.render('index', {title: 'Hello world!'});
});
app.listen(80, () => console.log('app listening on port 80.'));