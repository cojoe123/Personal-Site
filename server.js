'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fetch = require('node-fetch');

// view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log('The site started on port ' + port + '....');
    console.log('Press CTRL+C to quit');
});

// ===================================================
// home pages

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

// =================================================
// git page

var arrName = [];
var arrDesc = [];

// github dependencies
var apiURL = 'https://api.github.com/users/cojoe123/repos';
fetch(apiURL).then(response => {
    return response.json();
}).then(data => {
    var projects = data;
    projects.forEach(function(project) {
        arrName.push(project.name);
        arrDesc.push(project.description);
    });
}).catch(err => {
    console.log('Somethin wrong with API??');
    console.log(err);
});

app.get('/gitrepos', (req, res) => {
    res.render('pages/gitrepos', { arrName, arrDesc });
});