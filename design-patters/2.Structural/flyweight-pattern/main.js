var Task = function (data) {
    this.flyWeight = FlyWeightFactory.get(data.project, data.prioirty, data.user, data.completed);
    this.name = data.name;
    // this.prioirty = data.prioirty;
    // this.project = data.project;
    // this.user = data.user;
    // this.completed = data.completed;
}
function FlyWeight(project, prioirty, user, completed) {
    this.prioirty = prioirty;
    this.project = project;
    this.user = user;
    this.completed = completed;
}
var FlyWeightFactory = function () {
    var flyWeights = {};
    var get = function (project, prioirty, user, completed) {
        if (!flyWeights[project + prioirty, user, completed]) {
            flyWeights[project + prioirty + user + completed] = new FlyWeight(project, prioirty, user, completed);
        }
        return flyWeights[project + prioirty + user + completed];
    };
    var getCount = function () {
        var count = 0;
        for (var f in flyWeights) {
            count++;
            return count;
        }
    };
    return {
        get: get,
        getCount: getCount
    }
}();
function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function (name) {
        return tasks[name];
    };
    var getCount = function () {
        return count;
    };
    return {
        add: add,
        get: get,
        getCount: getCount
    }
}
var tasks = new TaskCollection();
var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];
var initialMemory = process.memoryUsage().heapUsed;
console.log(`Intital memory Bytes : ${initialMemory}`);
for (var i = 0; i < 10000; i++) {
    tasks.add({
        name: 'task' + i,
        prioirty: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    })
}
var afterMemory = process.memoryUsage().heapUsed
console.log(`After memory  Bytes : ${afterMemory}`);;
console.log('Used memory in MB : ' + (afterMemory - initialMemory) / 100000);//MB
console.log(`tasks :  ${tasks.getCount()}`);
console.log(`flyweights :  ${FlyWeightFactory.getCount()}`);