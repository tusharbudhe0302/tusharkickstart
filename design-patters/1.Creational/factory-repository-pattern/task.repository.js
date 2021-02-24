var taskRepo = function () {
    var get = function (id) {
        console.log(`Getting task ${id}`);
        return {
            name: 'new task return from db '
        }
    }
    var save = function (task) {
        console.log(`saving task ${task.name} to the db`);
    }
    return {
        get: get,
        save: save
    }
}
module.exports = taskRepo();