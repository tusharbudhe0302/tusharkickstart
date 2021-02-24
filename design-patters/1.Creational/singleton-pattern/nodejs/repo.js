var repo = function () {
    var called = 0;
    var save = function (task) {
        called++;
        console.log(`Saving  task : ${task} called : ${called} times`);
    }
    console.log(`newing task repo`);
    return {
        save: save
    }
};
module.exports = new repo;