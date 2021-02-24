```javscript
class graph {
	constructor(i) {
		this.vertices = i;
		this.adjacentList = new Map();
		this.matrix = new Array(i).fill(0);
		this.matrix.map((row, index) => {
			this.matrix[index] = new Array(i).fill(0);
		});
	}
	addVertex(v) {
		this.adjacentList.set(v, []);
	}
	addEdge(source, destination,isUndirectional = true) {
		this.adjacentList.get(source).push(destination);
		if(isUndirectional)
		this.adjacentList.get(destination).push(source);
	}
	printGraphObject() {
		console.log(this.adjacentList);
	}
	bfs(startVertex) {
		const vivisted = {};
		vivisted[startVertex] = true;
		const Queue = [];
		console.log(`BFS adjacentList`);
		Queue.push(startVertex);
		while (Queue.length > 0) {
			let vertex = Queue.shift();
			console.log(vertex);
			let neighbours = this.adjacentList.get(vertex);
			for (let neighbour of neighbours) {
				if (!vivisted[neighbour]) {
					vivisted[neighbour] = true;
					Queue.push(neighbour);
				}
			}
		}
	}
	dfs(startVertex) {
		console.log(`DFS adjacentList`);
		const vivisted = {};
		vivisted[startVertex] = true;
		const Stack = [];
		Stack.push(startVertex);
		while (Stack.length > 0) {
			let vertex = Stack.pop();
			console.log(vertex);
			let neighbours = this.adjacentList.get(vertex);
			for (let neighbour of neighbours) {
				if (!vivisted[neighbour]) {
					vivisted[neighbour] = true;
					Stack.push(neighbour);
				}
			}
		}
	}
	dfsRecursive(startVertex) {
		console.log(`DFS recursive adjacentList`);
		const visited = {};
		this.dfsRecursiveHelper(startVertex, visited);
	}
	bfsRecursive(startVertex) {
		console.log(`DFS recursive adjacentList`);
		const visited = {};
		this.bfsRecursiveHelper(startVertex, visited);
	}
	dfsRecursiveHelper(vertex, visited) {
		if (!visited[vertex]) {
			visited[vertex] = true;
			console.log(vertex);
			let neighbours = this.adjacentList.get(vertex);
			for (let neighbour of neighbours.reverse()) {
				this.dfsRecursiveHelper(neighbour, visited);
			}
		}
	}
	bfsRecursiveHelper(vertex, visited) {
		if (!visited[vertex]) {
			visited[vertex] = true;
			console.log(vertex);
			let neighbours = this.adjacentList.get(vertex);
			for (let neighbour of neighbours) {
				this.bfsRecursiveHelper(neighbour, visited);
			}
		}
	}
}
```
let newGraphG = new graph(5);
newGraphG.addVertex('A');
newGraphG.addVertex('B');
newGraphG.addVertex('C');
newGraphG.addVertex('D');
newGraphG.addVertex('E');
newGraphG.addEdge('A', 'B');
newGraphG.addEdge('A', 'D');
newGraphG.addEdge('B', 'C');
newGraphG.addEdge('C', 'D');
newGraphG.addEdge('C', 'E');
newGraphG.addEdge('D', 'E');
// newGraphG.printGraphObject();
newGraphG.bfs('A');
newGraphG.dfs('A');
newGraphG.dfsRecursive('A');

- isBiparite Problem
```javascript
var isBipartite = function(graph) {
	const visisted = {};
	const distance = {};
	const parent = {};
	const bfs = function(source) {
		const Queue = [];
		Queue.push(source);
        let i = 0;
		while (Queue.length > 0) {
			let node = Queue.shift();
			for (let ngb of graph[i]) {
				if (!visisted[ngb]) {
					visisted[ngb] = true;
                    if(!distance[node]) distance[node] = 0;
                    distance[ngb] = distance[node]+1;
					parent[ngb] = node;
					Queue.push(ngb);
				} else if (parent[node] != ngb) {
                    if( distance[ngb] === distance[node])
                            return false;
				}
			}
	
        }
        return true;
	}
    return bfs(graph);
    
};
```
- Number of island adjacent
```javascript
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var numIslands = function(grid) {

	function dfs(grid, row, col, rowMax, colMax) {
		if (row < 0 || col < 0 || row >= rowMax || col >= colMax || grid[row][col] !== '1') {
			return;
		}
		grid[row][col] = '2';
		dfs(grid, row - 1, col, rowMax, colMax);
		dfs(grid, row + 1, col, rowMax, colMax);
		dfs(grid, row, col - 1, rowMax, colMax);
		dfs(grid, row, col + 1, rowMax, colMax);
	}
	let iMax = grid.length;
	var result = 0;
	for (let i = 0; i < iMax; i++) {
		let jMax = grid[i].length;
		for (let j = 0; j < jMax; j++) {
			if (grid[i][j] == '1' && grid[i][j] != '2') {
				grid[i][j] == '2'; //refresh grid
				// console.log(grid);
				dfs(grid, i, j, iMax, jMax);
				result += 1;
			}
		}

	}
	return result;

};
let grid = [
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"]
]
console.log(numIslands(grid));//3
```