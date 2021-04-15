### Graph DS

- Construct Graph
  - Adjacent List approach
  - Matrix Approach
  - Map Approach
  - BFS (Queue)
  - DFS
    - Recursion
    - Stack
  - Minimum Spanning tree
    - Can Not dissconnected
    - Can not have cycle
    - No. of minimum spanning tree can from Vertices `n` = n^(n-2)
  - Prime's algorirhum
    - Get minimum wight of edge repeatedly even though edge is visited.
  - Dijkstra

```javascript
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

```javascript
let newGraphG = new graph(5);
newGraphG.addVertex("A");
newGraphG.addVertex("B");
newGraphG.addVertex("C");
newGraphG.addVertex("D");
newGraphG.addVertex("E");
newGraphG.addEdge("A", "B");
newGraphG.addEdge("A", "D");
newGraphG.addEdge("B", "C");
newGraphG.addEdge("C", "D");
newGraphG.addEdge("C", "E");
newGraphG.addEdge("D", "E");
// newGraphG.printGraphObject();
newGraphG.bfs("A");
newGraphG.dfs("A");
newGraphG.dfsRecursive("A");
```

- isBiparite Problem

```javascript
var isBipartite = function (graph) {
  const visisted = {};
  const distance = {};
  const parent = {};
  const bfs = function (source) {
    const Queue = [];
    Queue.push(source);
    let i = 0;
    while (Queue.length > 0) {
      let node = Queue.shift();
      for (let ngb of graph[i]) {
        if (!visisted[ngb]) {
          visisted[ngb] = true;
          if (!distance[node]) distance[node] = 0;
          if (!distance[ngb]) distance[ngb] = 0;
          distance[ngb] = distance[node] + 1;
          parent[ngb] = node;
          Queue.push(ngb);
        } else if (parent[node] != ngb) {
          if (distance[ngb] === distance[node]) return false;
        }
      }
    }
    return true;
  };
  return bfs(graph);
};
```

- Number of island adjacent

```javascript
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var numIslands = function (grid) {
  function dfs(grid, row, col, rowMax, colMax) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rowMax ||
      col >= colMax ||
      grid[row][col] !== "1"
    ) {
      return;
    }
    grid[row][col] = "2";
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
      if (grid[i][j] == "1" && grid[i][j] != "2") {
        grid[i][j] == "2"; //refresh grid
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
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid)); //3
```

- Prime's Algorithum

```javascript
const primsMST ()=> {
   // Initialize graph that'll contain the MST
   const MST = new Graph();
   if (this.nodes.length === 0) {
      return MST;
   }
   // Select first node as starting node
   let s = this.nodes[0];
   // Create a Priority Queue and explored set
   let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
   let explored = new Set();
   explored.add(s);
   MST.addNode(s);
   // Add all edges from this starting node to the PQ taking weights as priority
   this.edges[s].forEach(edge => {
      edgeQueue.enqueue([s, edge.node], edge.weight);
   });
   // Take the smallest edge and add that to the new graph
   let currentMinEdge = edgeQueue.dequeue();
   while (!edgeQueue.isEmpty()) {
      // COntinue removing edges till we get an edge with an unexplored node
      while (!edgeQueue.isEmpty() && explored.has(currentMinEdge.data[1])) {
         currentMinEdge = edgeQueue.dequeue();
      }
      let nextNode = currentMinEdge.data[1];
      // Check again as queue might get empty without giving back unexplored element
      if (!explored.has(nextNode)) {
         MST.addNode(nextNode);
         MST.addEdge(currentMinEdge.data[0], nextNode, currentMinEdge.priority);
         // Again add all edges to the PQ
         this.edges[nextNode].forEach(edge => {
            edgeQueue.enqueue([nextNode, edge.node], edge.weight);
         });
         // Mark this node as explored explored.add(nextNode);
         s = nextNode;
      }
   }
   return MST;
}
```

- Prims algorithm undirected weighted graph

```javascript
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({
      val,
      priority,
    });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  size() {
    // console.log(this.values.length);
    return this.values.length;
  }
}
```
```javascript
const graphDirectionsEnum = {
  DIRECTED: "DIRECTED",
  UNDIRECTED: "UNDIRECTED",
};
class Graph {
  constructor() {
    this.adjacentList = {};
    this.vertices = [];
  }
  addVertex(v) {
    this.vertices.push(v);
    this.adjacentList[v] = [];
  }
  addEdge(
    source,
    destination,
    weight,
    direction = graphDirectionsEnum.UNDIRECTED
  ) {
    this.adjacentList[source].push({
      node: destination,
      weight,
    });
    this.adjacentList[destination].push({
      node: source,
      weight,
    });
  }
  bfsOfWeightedGraph(startVertex) {
    const visisted = {};
    const Queue = [];
    Queue.push({
      node: startVertex,
    });
    visisted[startVertex] = true;
    while (Queue.length > 0) {
      let temp = Queue.shift();
      console.log(temp.node);
      let neighbours = this.adjacentList[temp.node];
      //	console.log(neighbours);
      for (let index in neighbours) {
        if (!visisted[neighbours[index].node]) {
          visisted[neighbours[index].node] = true;
          Queue.push(neighbours[index]);
        }
      }
    }
  }
  printGraph() {
    console.log(this.adjacentList);
  }
  primsShortestPath(startVertex) {
    // bfs with priority Queue
    const visisted = {};
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(startVertex, 0);
    // visisted[startVertex] = true;
    while (priorityQueue.size() > 0) {
      let temp = priorityQueue.dequeue();

      if (!visisted[temp.val]) {
        console.log(`DeQueue PQ`);
        console.log(temp);
      }

      visisted[temp.val] = true;
      let neighbours = this.adjacentList[temp.val];
      //	console.log(neighbours);
      for (let index in neighbours) {
        let neighbourNode = neighbours[index].node;
        let neighbourNodeWeight = neighbours[index].weight;
        // console.log(neighbourNode,neighbourNodeWeight);
        // console.log(visisted);
        if (!visisted[neighbourNode]) {
          priorityQueue.enqueue(neighbourNode, neighbourNodeWeight);
        }
      }
    }
  }
}
let newGraph = new Graph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addEdge("A", "B", 15);
newGraph.addEdge("A", "C", 5);
newGraph.addEdge("B", "C", 7);
newGraph.addEdge("B", "E", 2);
newGraph.addEdge("C", "D", 9);
newGraph.addEdge("D", "E", 3);
// newGraph.printGraph();
// newGraph.bfsOfWeightedGraph('A');

newGraph.primsShortestPath("A");
```
- Find Order Of Characters From Alien Dictory Topological SOrt
```javascript
function find_order(words) {
	let map = {};
	for (let i = 1; i < words.length; i++) {
		let prev = words[i - 1];
		let curr = words[i];
		let shortest = Math.min(prev.length, curr.length);
		for (let k = 0; k < shortest; k++) {
			if (prev[k] != curr[k]) {
				if (map[prev[k]]) {
					map[prev[k]].push(curr[k]);
				} else {
					map[prev[k]] = [curr[k]];
				}
				break;
			}
		}
	}
	// console.log(map);
	const visited = new Set();
	const sorted = [];
	for (vertex in map) {
		if (visited.has(vertex)) continue;
		topoSortUtil(vertex);
	}
	function topoSortUtil(vertex) {
		visited.add(vertex);
		for (adj of map[vertex] || []) {
			if (visited.has(adj)) continue;
			topoSortUtil(adj);
		}
		sorted.unshift(vertex);
	}
	let result = sorted.join('');
	let regex = /\,/ig
	return result.replace(regex, '');
}
console.log(find_order(["baa", "abcd", "abca", "cab", "cad"])); //bdac
```
- Construct Other grapg from given graph./ Clone a graph
```javascript
function build_other_graph(node) {
	if (!node.neighbours.length) {
		const onlyNode = new Node();
		onlyNode.val = node.val;
		return onlyNode;
	}

	const adj = [];
	const visited = [];

	function dfs(currNode) {
		let lastNode = null;
		visited[currNode.val] = true;

		if (!adj[currNode.val]) {
			adj[currNode.val] = new Node();
			adj[currNode.val].val = currNode.val;
		}

		currNode.neighbours.forEach(n => {
			if (!adj[n.val]) {
				adj[n.val] = new Node();
				adj[n.val].val = n.val;
			}
			adj[n.val].neighbours.push(adj[currNode.val]);
			lastNode = adj[n.val];
			if (!visited[n.val]) {
				dfs(n);
			}
		});

		return lastNode;
	}

	return dfs(node);
}
```
- Course Schedule I (207)
```javascript
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
```
- Course Schedule II 210
```javascript
var canFinishII = function (numCourses, prerequisites) {
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
    const topologicalSort = [];
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
        topologicalSort.unshift(source);
        return false;
    }
    for (var key of graph.keys()) {
    	if(visisted[key] === -1){
    		if(	dfs(key)) return [];
    	}
    }
    return topologicalSort.reverse();
};
console.log(canFinishII(2, [
	[1, 0]
])); //2
// console.log(canFinishII(2, [
//     [1, 0],
//     [0, 1]
// ])); //1
```

- 

```javascript

/*
 * Complete the function below.
 */
function string_transformation(words, start, stop) {
    const set = new Set(words);
    set.add(stop).add(start);
    const queue = [];
    const parents = {};
    const visited = new Set();
    let output = [];
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    
    const getNei = word => {
        const arr = [];
        if (words.length <= 26) {
            for (let other of set) {
                let diff = 0;
                for (let i = 0; i < word.length; i++) {
                    if (other[i] !== word[i]) diff++;
                }
                if (diff === 1) arr.push(other);
            }
        } else {
            for (let i = 0; i < word.length; i++) {
                for (let a of alpha) {
                    if (word[i] === a) continue;
                    const newW = word.slice(0, i) + a + word.slice(i+1);
                    if (set.has(newW)) arr.push(newW);
                }
            }
        }
        return arr;
    }
    
    
    const bfs = sWord => {
        queue.push(sWord);
        while (queue.length) {
            const curr = queue.shift();
            const neighbors = getNei(curr);
            console.log(`curr: ${curr} `);
            console.log(`neighbors: ${neighbors} parents:${parents}`);
            for (let n of neighbors) {
                if (visited.has(n)) continue;
                visited.add(n);
                parents[n] = curr;
                if (n === stop) {
                    
                    return;
                }
                queue.push(n);
            }
        }
    }
    
    const dfs = (word) => {
        if (!word) return;
        output.unshift(word);
        if (word === start && output.length > 1) return;
        dfs(parents[word]);
    }
    
    bfs(start);
    
    // console.log(parents)
    dfs(stop);
    
    return output.length > 1 ? output : ['-1']
}

let words = ["cat", "hat", "bad", "had"],start = "bat",stop = "had";

console.log(string_transformation(words, start, stop));
```