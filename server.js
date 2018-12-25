'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// view engine
app.set('view engine', 'ejs');

// static cs/js files
app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log('The site started on port ' + port + '....');
    console.log('Press CTRL+C to quit');
});

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/gitrepos', (req, res) => {
    res.render('pages/gitrepos');
});