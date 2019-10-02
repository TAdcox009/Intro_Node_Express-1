var fs = require('fs');

 fs.readFile('./data1.json', 
function(err, data) {
    console.log(data);
});

fs.readFile('./data.json', 'utf-8', function(err, data) {
    console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
  });

  var data = require('./data1.json');
  console.log(data.name);