var Task = function (name) {
    this.name = name;
    this.completed = false;
}
Task.prototype.complete = function () {
    console.log(`Completing  task ${this.name}`);
    this.completed = true;
}
Task.prototype.save = function () {
    console.log(`Saving task ${this.name}`);
}
var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority
};
/*
*Inheritance 
*/
urgentTask.prototype = Object.create(Task.prototype);
urgentTask.prototype.notify = function () {
    console.log(`notifying urgent task`);
};
urgentTask.prototype.save = function () {
    this.notify();
    console.log(`some extra special stuffs!`);
    Task.prototype.save.call(this);
};
var ut = new urgentTask('This is Urgent', 1);
ut.complete();
ut.save();
console.log(ut);