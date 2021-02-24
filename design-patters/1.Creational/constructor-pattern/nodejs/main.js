var Task = require('./task');

var newTask1 = new Task('create a demo constructors');
var newTask2 = new Task('create a demo modules');
var newTask3 = new Task('create a demo singleton');
var newTask4 = new Task('create a demo prototypes');
newTask1.complete();
newTask2.save();
newTask3.save();
newTask4.save();