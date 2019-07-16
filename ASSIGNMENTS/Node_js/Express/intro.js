 //Introduction to Express

var express = require('express');

var app = express();

app.set('view engine', 'ejs'); 

app.get('/' , function(req,res){
    res.sendFile(__dirname +'/contact.html');
});n

app.get('/contact', function(req,res){
    res.send('this is the contact page');
});


app.get('/profile/:id', function(req,res){
    res.send('Request of profile with id' +req.params.id);
});

app.listen(3001);