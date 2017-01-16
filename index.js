const fs = require('fs');

function getFiles(path) {
  var result = fs.readdirSync(path);

  var tab = [];
  for(var i= 0; i < result.length; i++)
  {
    tab.push('<tr><td>' + result[i] + '</td></tr>');
  }
  document.getElementById('pane').innerHTML = tab;
}
