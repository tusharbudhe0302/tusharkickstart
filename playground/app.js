// 207. Course Schedule
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = new Map();
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }
    for (let [start, end] of prerequisites) {
        graph.get(start).push(end);
    }
    console.log(graph);
    const visisted = new Array(numCourses).fill(-1);
    const arrival = new Array(numCourses).fill(0);
    const departure = new Array(numCourses).fill(0);
    let timeStamp = 0;
    const dfs = (source) => {
        arrival[source] = timeStamp++;
        visisted[source] = 1;
        for (let neighbour of graph.get(source)) {
            if (visisted[neighbour] === -1) {
                if (dfs(neighbour)) return true;
            } else {
                if (departure[neighbour] === 0) {
                    return true;
                }
            }
        }
        departure[source] = timeStamp++;
        return false;
    }
    for (var key of graph.keys()) {
        if (dfs(key)) return false;
    }
    return true;
};
console.log(canFinish(2, [
	[1, 0]
])); //true
console.log(canFinish(2, [
    [1, 0],
    [0, 1]
])); //false