var userRepo = function () {
    var get = function (id) {
        console.log(`Getting user ${id}`);
        return {
            name: 'new user return from db '
        }
    }
    var save = function (user) {
        console.log(`saving user ${user.name} to the db`);
    }
    return {
        get: get,
        save: save
    }
}
module.exports = userRepo();