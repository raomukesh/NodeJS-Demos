var fs = require('fs');

//fs.appendFile('newFile.txt', 'Hello Content!', function(err){
//    if(err) throw err;
//    console.log('Saved!');
//});

fs.open('mynewfile2.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved!!');
});