/*
*function objectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toStringObj = function () {
        return this.param1 + ' ' + this.param2
    }
}
*/
console.log(`** Class and Constructor **`);
var Task = function (name) {
    this.name = name;
    this.completed = false;
    this.complete = function () {
        console.log(`Completing  task ${this.name}`);
        this.completed = true;
    }
    this.save = function () {
        console.log(`Saving task ${this.name}`);
    }
}
var newTask1 = new Task('create a demo constructors');
var newTask2 = new Task('create a demo modules');
var newTask3 = new Task('create a demo singleton');
var newTask4 = new Task('create a demo prototypes');
newTask1.complete();
newTask2.save();
newTask3.save();
newTask4.save();
/***Create prototype  */
console.log(`** Class and  Constructor with Prototype **`);
var TaskProtoType = function (name) {
    this.name = name;
    this.completed = false;
}
TaskProtoType.prototype.complete = function () {
    console.log(`Completing  task ${this.name}`);
    this.completed = true;
}
TaskProtoType.prototype.save = function () {
    console.log(`Saving task ${this.name}`);
}

var newTaskProtoType1 = new TaskProtoType('create a demo constructors');
var newTaskProtoType2 = new TaskProtoType('create a demo modules');
var newTaskProtoType3 = new TaskProtoType('create a demo singleton');
var newTaskProtoType4 = new TaskProtoType('create a demo prototypes');
newTaskProtoType1.complete();
newTaskProtoType2.save();
newTaskProtoType3.save();
newTaskProtoType4.save();