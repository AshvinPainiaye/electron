const fs = require('fs');

function getFiles(path) {
    var result = fs.readdirSync(path);
    document.getElementById('pane').innerHTML = result;
}