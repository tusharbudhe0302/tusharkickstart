var Task = require('./task');  // Object
/**Set Up Enviroment . Subject declaration*/
var notificationService = function () {
    var message = 'Notifying';
    this.update = function (task) {
        console.log(`${message}  ${task.user} for  task : ${task.name}`);
        return;
    }
};
var loggingService = function () {
    var message = 'Logging';
    this.update = function (task) {
        console.log(`${message} ${task.user} for  task : ${task.name}`);
    }
};
var auditingService = function () {
    var message = 'Auditing';
    this.update = function (task) {
        console.log(`${message}  ${task.user} for  task : ${task.name}`);
    }
};
/** Observer */
function ObserverList() {
    this.observerList = [];
};
ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};
ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length)
        return this.observerList[index];
};
ObserverList.prototype.getcount = function () {
    return this.observerList.length;
}
ObserverList.prototype.removeAt = function (index) {
    return this.observerList.splice(index, 1);
}
ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
}
/** Observer */
var ObservableTask = function (data) {
    Task.call(this, data)
    this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};
ObservableTask.prototype.notify = function (context) {
    console.log(`Notify Observer called..! Count :  ${this.observers.getcount()}`);
    var observerCount = this.observers.getcount();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};
ObservableTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
}
ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0))
}
var task1 = new ObservableTask({ name: 'create demo for constructor', user: 'John' }); // Object
var ns = new notificationService(); // Subject
var ls = new loggingService(); // Subject
var as = new auditingService();// Subject
task1.addObserver(ns.update); // Oberver
task1.addObserver(ls.update); // Oberver
task1.addObserver(as.update);// Oberver
task1.save(); // Object Communicating with Subject through Observer
task1.removeObserver(as.update);
task1.save();