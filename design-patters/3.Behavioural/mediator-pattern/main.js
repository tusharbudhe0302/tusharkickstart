var Task = require('./task');  // Object

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
var mediator = (function () {
    var channels = {};
    // console.log(`channels:  ${JSON.stringify(channels)}`);
    var subscribe = function (channel, context, func) {
        // console.log(`mediator Subscriber : ${JSON.stringify(mediator.channels)}`);
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context: context,
            func: func
        });
    };
    var publish = function (channel) {
        if (!this.channels[channel]) {
            return false;
        }
        var args = Array.prototype.slice.call(arguments, 1);
        // console.log(`args : \n ${JSON.stringify(args)}`);
        for (var i = 0; i < mediator.channels[channel].length; i++) {
            // console.log(`mediator.channels : ${mediator.channels[i]}`);
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }
    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    }
}());
var task1 = new Task({
    name: 'Create demo for mediator design pattern',
    user: 'John'
});
var notificationServiceObject = new notificationService(); // 
var loggingServiceObject = new loggingService(); // 
var auditingServiceObject = new auditingService();// 
mediator.subscribe('complete', notificationServiceObject, notificationServiceObject.update); // complete should be name of function same as string check func like callback
mediator.subscribe('complete', loggingServiceObject, loggingServiceObject.update);
mediator.subscribe('complete', auditingServiceObject, auditingServiceObject.update);
task1.complete = function () {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};
task1.complete();
// task1.save(); // Object Communicating with Subject through Observer