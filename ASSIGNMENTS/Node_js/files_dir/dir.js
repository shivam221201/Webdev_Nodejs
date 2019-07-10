var fs = require('fs');

// first run commented part to create and then delete.

/*
fs.mkdir('stuff', function(){
    fs.readFileSync('readme.txt', 'utf8', function(err , data){
        fs.writeFileSync('./stuff/writeme.txt', data);
    });
});

*/

fs.unlinkSync('./stuff/writeme.txt',function(){
    fs.rmdir('stuff');
});