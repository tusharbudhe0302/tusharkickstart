var TaskRepo = (function () {
    var taskRepo;
    function createRepo() {
        var taskRepo = new Object("Task");
        return taskRepo;
    };
    return {
        getInstace: function () {
            if (!taskRepo) {
                console.log(`Creating new Repo!`);
                taskRepo = createRepo();
            }
            else {
                console.log(`Repo already exists!`);
                return taskRepo;
            }
        }
    }
})();
var repo1 = TaskRepo.getInstace();
var repo2 = TaskRepo.getInstace();
console.log(`repo1 ${repo1}  repo2 ${repo2}`);
if (repo1 == repo2) {
    console.log(`Same Repos`);
}
// CommonJS  is used by nodeJS internally. It will never print this. please refer CommonJS nodejs module