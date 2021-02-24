var projectRepo = function () {
    var get = function (id) {
        console.log(`Getting project ${id}`);
        return {
            name: 'new project return from db '
        }
    }
    var save = function (project) {
        console.log(`saving  project ${project.name} to the db`);
    }
    return {
        get: get,
        save: save
    }
}
module.exports = projectRepo();