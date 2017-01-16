const fs = require('fs');

function getFiles() {
    var test = fs.readdirSync('C:\wamp64');
    document.getElementById('pane').innerHTML = test;
}