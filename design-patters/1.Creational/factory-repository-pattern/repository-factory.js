var reposFactory = function () {
    var repos = this;
    var repoList = [
        { name: 'task', source: './task.repository' },
        { name: 'project', source: './project.repository' },
        { name: 'user', source: './user.repository' }
    ];
    repoList.forEach(function (repo) {
        /**Get all repos and execute here only`()`. So it will keep in cache*/
        console.log(`repo.source : ${repo.source}`);
        repos[repo.name] = require(repo.source);
    })
};
module.exports = new reposFactory;