const fs = require('fs')
fs.readFile('./test.js',function(err,dataStr){
    console.log(err);
    console.log(dataStr);
})