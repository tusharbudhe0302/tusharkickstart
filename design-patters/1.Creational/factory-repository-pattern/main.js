var repos = require('./repository-factory');
var task = repos.task.get(1);
var user = repos.user.get(1);
var project = repos.project.get(1);
console.log(task);
console.log(user);
console.log(project);
console.log(`Save Object Now`);
repos.task.save(task);