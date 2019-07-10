var events = require('events')
var util =require('util')

var person = function(name){
    this.name =name;
};

util.inherits(person, events.EventEmitter);

var roz = new person('roz');
var mary = new person('mary');
var marlo = new person('marlo');

var people = [roz,mary,marlo];

people.forEach(function(person){
person.on('speak', function(mssg){
    console.log(person.name  + 'said:' + mssg)
});
});

roz.emit('speak', 'hey dudes' );
