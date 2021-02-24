var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}
var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log(`Completing task : ${task.name}`);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date().toDateString();
            console.log(`Task :  ${task.name} completed on : ${task.completedDate}`);
        },
        notifyComplatetion: function (task, user) {
            console.log(`Notifying user : ${user} completion of task : ${task.name}`);
        },
        save: function (task) {
            console.log(`Saving Task:  ${task.name}`);
        }
    }
}();
var myTaskServiceWrapper = function () {
    var completeAndNotify = function (myTask) {
        TaskService.complete(myTask);
        if (myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyComplatetion(myTask, myTask.user);
            TaskService.save(myTask, myTask.user);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}();
var myTask = new Task({
    name: 'MyTaskName',
    priority: 1,
    project: 'Course',
    user: 'Jon',
    completed: false
});
// console.log(myTask);
// TaskService.complete(myTask);
// if (myTask.completed == true) {
//     TaskService.setCompleteDate(myTask);
//     TaskService.notifyComplatetion(myTask, myTask.user);
//     TaskService.save(myTask);
// }
// console.log(myTask);
/**Just create interface of existing Object  */
myTaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);