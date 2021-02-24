var Task = require('./task');
var repo = require('./task.repository');

var newTask1 = new Task(repo.get(1));
var newTask2 = new Task({ name: 'create a demo modules' });
var newTask3 = new Task({ name: 'create a demo singleton' });
var newTask4 = new Task({ name: 'create a demo prototypes' });
newTask1.complete();
newTask2.save();
newTask3.save();
newTask4.save();