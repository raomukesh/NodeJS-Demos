var fs = require('fs');
fs.writeFile('mynewfile3.txt', ' This is my text', function(err, file){
    if(err) throw err;
    console.log('Replaced!');
});