'use strict';

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

// pass the values into the html
console.log(arrName);
console.log(arrDesc);
