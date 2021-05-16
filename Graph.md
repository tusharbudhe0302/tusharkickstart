### Graph DS

- Construct Graph G= (V,E);
    `V` -> Vertices
    `E` -> Edges
    ![Concepts](https://drive.google.com/file/d/1nyK9l3M93HREqJlVUGHisGdVeYwmf-oV/view)
- What is edge?
- What is Vertex?
- Eulerian Russian mathematician

![Eulerian](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/graph/Eulerian.png)
    - Eulerian Cycle is a graph cycle which uses each graph edge exactly once. All vertices have even degree. It must be connected Graph not disconnected.
        a) All vertices with non-zero degree are connected. We don’t care about vertices with zero degree because they don’t belong to Eulerian Cycle or Path (we only consider all edges).
        b) All vertices have even degree.
    - Eulerian Path Only Start & End vertices will have odd degree and all other vertices have even degree
        a) Same as condition (a) for Eulerian Cycle
        b) If zero or two vertices have odd degree and all other vertices have even degree. Note that only one vertex with odd degree is not possible in an undirected graph (sum of all degrees is always even in an undirected graph)
Note: a graph with no edges is considered Eulerian because there are no edges to traverse.

- Degree Of Garph
    - Undirected Graph
            I. Degree Of Graph is (SUM of adjacent edges) i.e. Sum Of total degree is 2|E|
    - Directected Graph
            I. Inbound degree (SUM of Incoming endges) i.e. Sum Of total degree is |E|
            II. OutBound degree (SUM of out going endges) i.e. Sum Of total degree is |E|
 - Adjacent List approach
 - Matrix Approach
 - Map Approach
 
 ![Examples](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/graph/Examples.PNG)
 
 Practice Problems:
 
 ```javascript
class graph {
	constructor(n) {
		this.nuberOfVertices = n;
		this.adjacentMapList = new Map();
		this.veritces = [];
		this.adjacentMatrix = new Array(n).fill(0);
		this.adjacentMatrix.map((x, i) => {
			this.adjacentMatrix[i] = new Array(n).fill(0);
		});
	}
	addVertices(v) {
		this.veritces.push(v);
	}
	addEdge(start, end) {
		if (!this.adjacentMapList.has(start))
			this.adjacentMapList.set(start, []);
		if (!this.adjacentMapList.has(end))
			this.adjacentMapList.set(end, []);
		this.adjacentMapList.get(start).push(end);
		this.adjacentMapList.get(end).push(start);
	}
	addEdgeWithWeight(start, end, weight) {
		if (!this.adjacentMapList.has(start))
			this.adjacentMapList.set(start, []);
		if (!this.adjacentMapList.has(end))
			this.adjacentMapList.set(end, []);
		this.adjacentMapList.get(start).push({
			vertex: end, weight: weight
		});
		this.adjacentMapList.get(end).push({
			vertex: start, weight: weight
		});
	}
	addEdgeOnMatrix(start, end) {
		this.adjacentMatrix[start][end] = 1;
		this.adjacentMatrix[end][start] = 1;
	}
	addEdgeOnMatrixWeight(start, end, weight) {
		this.adjacentMatrix[start][end] = weight;
		this.adjacentMatrix[end][start] = weight;
	}
	printGraph() {
		console.log(this.adjacentMapList);
	}
	printGraphMatrix() {
		console.log(this.adjacentMatrix);
	}
}
```

```javascript
let runGraph = new graph(3);
runGraph.addVertices('A');
runGraph.addVertices('B');
runGraph.addVertices('C');
runGraph.addEdge('A', 'B');
runGraph.addEdge('B', 'C');
runGraph.addEdge('C', 'A');
runGraph.printGraph(); 
// { 'A' => [ 'B', 'C' ], 'B' => [ 'A', 'C' ], 'C' => [ 'B', 'A' ] }
runGraph = new graph(3);
runGraph.addEdgeWithWeight('A', 'B', 20);
runGraph.addEdgeWithWeight('B', 'C', 28);
runGraph.addEdgeWithWeight('C', 'A', 30);
runGraph.printGraph();
// {
//   'A' => [ { vertex: 'B', weight: 20 }, { vertex: 'C', weight: 30 } ],
//   'B' => [ { vertex: 'A', weight: 20 }, { vertex: 'C', weight: 28 } ],
//   'C' => [ { vertex: 'B', weight: 28 }, { vertex: 'A', weight: 30 } ]
// }
runGraph = new graph(3);
runGraph.addEdgeOnMatrix(0, 1);
runGraph.addEdgeOnMatrix(1, 2);
runGraph.addEdgeOnMatrix(0, 2);
runGraph.printGraphMatrix();
// [ [ 0, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 0 ] ]
runGraph = new graph(3);
runGraph.addEdgeOnMatrixWeight(0, 1,20);
runGraph.addEdgeOnMatrixWeight(1, 2,28);
runGraph.addEdgeOnMatrixWeight(0, 2,30);
runGraph.printGraphMatrix();
//[ [ 0, 20, 30 ], [ 20, 0, 28 ], [ 30, 28, 0 ] ]
 ```
 - BFS (Queue)
 - DFS
    - Recursion
    - Stack
    ![Practice](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/graph/Practice.png)
```javascript
let graphObject = {
	1: [2, 3],
	2: [1, 3, 4],
	3: [1, 2, 4, 5],
	4: [2, 3, 5],
	5: [3, 4]
};
const bfs = (start, graph = null) => {
	var visited = {};
	var stack = [];
	visited[start] = true;
	stack.push(start);
	while (stack.length > 0) {
		var node = stack.shift();
		console.log(node);
		var neighbours = graph[node];
		for (let neighbour of neighbours) {
			if (!visited[neighbour]) {
				visited[neighbour] = true;
				stack.push(neighbour);
			}
		}
	}
}
const dfs = (start, graph) => {
	var visited = {};
	var stack = [];
	stack.push(start);
	while (stack.length > 0) {
		var node = stack.pop();
		visited[node] = true;
		console.log(node);
		var neighbours = graph[node];
		for (let neighbour of neighbours) {
			if (!visited[neighbour]) {
				visited[neighbour] = true;
				stack.push(neighbour);
			}
		}
	}
}
const dfsrecursive = (start, graph, visited = {}) => {
	visited[start] = true;
	console.log(start);
	var neighbours = graph[start];
	for (let neighbour of neighbours) {
		if (!visited[neighbour]) {
			dfsrecursive(neighbour,graph, visited)
		}
	}
}

bfs(1, graphObject);
dfs(1, graphObject);
dfsrecursive(1, graphObject); // O(m+n) m-> Edge n-> Vertex
```
- Graph Traversal Challenges
    ![Analysis Of Graph](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/graph/DirectedGraph.PNG)
    - Tree Edge 
    - Back Edge
    - Cross Edge.
     It could be on on same layer or adjacent layer.We can't get cross edge with skiping or jumping vertex to reach to final edge.
    ![Edges Of Graph](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/graph/EdgesDetails.PNG)

-  Graph Problem Solving Technique Table

![Foundation](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/graph/FoundationsBasics.png)
Algorithm| Technique | Result|
---|---|---|
BFS| Chose fringe edge to get first | BFS Tree|
DFS| Chose fringe edge to get last. Required reverse Order | DFS Tree|
Dijkstra's| Chose fringe edge RHS with smallest numeric label | Shortest Path tree|
Prims's| Chose fringe edge RHS with smallest numeric label | Minimum Spanning Tree (MST)|
Best first search| Chose fringe edge RHS with smallest numeric label | Best first search|
A* | It chould have 2 labels, need to compute and get next | A* tree|


```javascript
class Graph {
	construtor() {
		this.adjacentMap = new Map();
		this.visited = {};
		this.parent = {};
	}
	search(searchItem) {
		const stack = [];
		stack.push(searchItem);
		while (stack.length > 0) {
			let vertex = stack.pop();
			visisted[vertex] = true;
			let neighbours = this.adjacentMap.get(vertex);
			for (let neighbour of neighbours) {
				visisted[neighbour] = true
				this.parent[neighbour] = vertex;
			}
		}
	}
}
```
 - Travelling Slaesman O(2^n) 
 - Hamiltonian Path O(2^n) 
 - Minimum Spanning tree
    - Can Not dissconnected
    - Can not have cycle
    - No. of minimum spanning tree can from Vertices `n` = n^(n-2)
 - Prime's algorirhum
    - Get minimum wight of edge repeatedly even though edge is visited.
 - Dijkstra - We Can get shortest path tree



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

##### Introduction, DFS and BFS :

1. [Graph and its representations](https://www.geeksforgeeks.org/graph-and-its-representations/) 
2. [Breadth First Traversal for a Graph](https://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/) 
3. [Depth First Traversal for a Graph](https://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/) 
4. [Applications of Depth First Search](https://www.geeksforgeeks.org/applications-of-depth-first-search/) 
5. [Applications of Breadth First Traversal](https://www.geeksforgeeks.org/applications-of-breadth-first-traversal/)
6. [Graph representations using set and hash](https://www.geeksforgeeks.org/graph-representations-using-set-hash/)
7. [Find Mother Vertex in a Graph](https://www.geeksforgeeks.org/find-a-mother-vertex-in-a-graph/)
8. [Transitive Closure of a Graph using DFS](https://www.geeksforgeeks.org/transitive-closure-of-a-graph-using-dfs/)
9. [Find K cores of an undirected Graph](https://www.geeksforgeeks.org/find-k-cores-graph/)
10. [Iterative Depth First Search](https://www.geeksforgeeks.org/iterative-depth-first-traversal/)
11. [Count the number of nodes at given level in a tree using BFS](https://www.geeksforgeeks.org/count-number-nodes-given-level-using-bfs/)
12. [Count all possible paths between two vertices](https://www.geeksforgeeks.org/count-possible-paths-two-vertices/)
13. [Minimum initial vertices to traverse whole matrix with given conditions](https://www.geeksforgeeks.org/minimum-initial-vertices-traverse-whole-matrix-given-conditions/)
14. [Shortest path to reach one prime to other by changing single digit at a time](https://www.geeksforgeeks.org/shortest-path-reach-one-prime-changing-single-digit-time/) 
15. [Water Jug problem using BFS](https://www.geeksforgeeks.org/water-jug-problem-using-bfs/)
16. [Count number of trees in a forest](https://www.geeksforgeeks.org/count-number-trees-forest/)
17. [BFS using vectors & queue as per the algorithm of CLRS](https://www.geeksforgeeks.org/bfs-using-vectors-queue-per-algorithm-clrs/) 
18. [Level of Each node in a Tree from source node](https://www.geeksforgeeks.org/level-node-tree-source-node-using-bfs/)
19. [Construct binary palindrome by repeated appending and trimming](https://www.geeksforgeeks.org/construct-binary-palindrome-by-repeated-appending-and-trimming/)
20. [Transpose graph](https://www.geeksforgeeks.org/transpose-graph/) 
21. [Path in a Rectangle with Circles](https://www.geeksforgeeks.org/path-rectangle-containing-circles/) 
22. [Height of a generic tree from parent array](https://www.geeksforgeeks.org/height-generic-tree-parent-array/) 
23. [BFS using STL for competitive coding](https://www.geeksforgeeks.org/bfs-using-stl-competitive-coding/)
24. [DFS for a n-ary tree (acyclic graph) represented as adjacency list](https://www.geeksforgeeks.org/dfs-n-ary-tree-acyclic-graph-represented-adjacency-list/)
25. [Maximum number of edges to be added to a tree so that it stays a Bipartite graph](https://www.geeksforgeeks.org/maximum-number-edges-added-tree-stays-bipartite-graph/) 
26. [A Peterson Graph Problem](https://www.geeksforgeeks.org/peterson-graph/)
27. [Implementation of Graph in JavaScript](https://www.geeksforgeeks.org/implementation-graph-javascript/)
28. [Print all paths from a given source to a destination using BFS](https://www.geeksforgeeks.org/print-paths-given-source-destination-using-bfs/) 
29. [Minimum number of edges between two vertices of a Graph](https://www.geeksforgeeks.org/minimum-number-of-edges-between-two-vertices-of-a-graph/)
30. [Count nodes within K-distance from all nodes in a set](https://www.geeksforgeeks.org/count-nodes-within-k-distance-from-all-nodes-in-a-set/) 
31. [Bidirectional Search](https://www.geeksforgeeks.org/bidirectional-search/)
32. [Minimum edge reversals to make a root](https://www.geeksforgeeks.org/minimum-edge-reversals-to-make-a-root/) 
33. [BFS for Disconnected Graph](https://www.geeksforgeeks.org/bfs-disconnected-graph/) 
34. [Move weighting scale alternate under given constraints](https://www.geeksforgeeks.org/move-weighting-scale-alternate-given-constraints/)
35. [Best First Search (Informed Search)](https://www.geeksforgeeks.org/best-first-search-informed-search/) 
36. [Number of pair of positions in matrix which are not accessible](https://www.geeksforgeeks.org/number-pair-positions-matrix-not-accessible/)
37. [Maximum product of two non-intersecting paths in a tree](https://www.geeksforgeeks.org/maximum-product-of-two-non-intersecting-paths-in-a-tree/) 
38. [Delete Edge to minimize subtree sum difference](https://www.geeksforgeeks.org/delete-edge-minimize-subtree-sum-difference/) 
39. [Find the minimum number of moves needed to move from one cell of matrix to another](https://www.geeksforgeeks.org/find-minimum-numbers-moves-needed-move-one-cell-matrix-another/)
40. [Minimum steps to reach target by a Knight | Set 1](https://www.geeksforgeeks.org/minimum-steps-reach-target-knight/)
41. [Minimum number of operation required to convert number x into y](https://www.geeksforgeeks.org/minimum-number-operation-required-convert-number-x-y/) 
42. [Minimum steps to reach end of array under constraints](https://www.geeksforgeeks.org/minimum-steps-reach-end-array-constraints/) 
43. [Find the smallest binary digit multiple of given number](https://www.geeksforgeeks.org/find-the-smallest-binary-digit-multiple-of-given-number/) 
44. [Roots of a tree which give minimum height](https://www.geeksforgeeks.org/roots-tree-gives-minimum-height/) 
45. [Stepping Numbers](https://www.geeksforgeeks.org/stepping-numbers/)
46. [Clone an Undirected Graph](https://www.geeksforgeeks.org/clone-an-undirected-graph/) 
47. [Sum of the minimum elements in all connected components of an undirected graph](https://www.geeksforgeeks.org/sum-of-the-minimum-elements-in-all-connected-components-of-an-undirected-graph/)
48. [Check if two nodes are on same path in a tree](https://www.geeksforgeeks.org/check-if-two-nodes-are-on-same-path-in-a-tree/)
49. [A matrix probability question](https://www.geeksforgeeks.org/a-matrix-probability-question/)
50. [Find length of the largest region in Boolean Matrix](https://www.geeksforgeeks.org/find-length-largest-region-boolean-matrix/)
51. [Iterative Deepening Search(IDS) or Iterative Deepening Depth First Search(IDDFS)](https://www.geeksforgeeks.org/iterative-deepening-searchids-iterative-deepening-depth-first-searchiddfs/ "Permalink to Iterative Deepening Search(IDS) or Iterative Deepening Depth First Search(IDDFS)")

##### Graph Cycle :

1. [Detect Cycle in a Directed Graph](https://www.geeksforgeeks.org/detect-cycle-in-a-graph/)
2. [Detect cycle in an undirected graph](https://www.geeksforgeeks.org/detect-cycle-undirected-graph/) 
3. [Detect cycle in a direct graph using colors](https://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/)
4. [Assign directions to edges so that the directed graph remains acyclic](https://www.geeksforgeeks.org/assign-directions-to-edges-so-that-the-directed-graph-remains-acyclic/)
5. [Detect a negative cycle in a Graph | (Bellman Ford)](https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/)
6. [Cycles of length n in an undirected and connected graph](https://www.geeksforgeeks.org/cycles-of-length-n-in-an-undirected-and-connected-graph/)
7. [Detecting negative cycle using Floyd Warshall](https://www.geeksforgeeks.org/detecting-negative-cycle-using-floyd-warshall/)
8. [Check if there is a cycle with odd weight sum in an undirected graph](https://www.geeksforgeeks.org/check-if-there-is-a-cycle-with-odd-weight-sum-in-an-undirected-graph/)
9. [Check if a graphs has a cycle of odd length](https://www.geeksforgeeks.org/check-graphs-cycle-odd-length/) 
10. [Clone a Directed Acyclic Graph](https://www.geeksforgeeks.org/clone-directed-acyclic-graph/)
11. [Check loop in array according to given constraints](https://www.geeksforgeeks.org/check-loop-array-according-given-constraints/)
12. [Disjoint Set (Or Union-Find) | Set 1](https://www.geeksforgeeks.org/union-find/) 
13. [Union-Find Algorithm | Set 2](https://www.geeksforgeeks.org/union-find-algorithm-set-2-union-by-rank/)
14. [Union-Find Algorithm | (Union By Rank and Find by Optimized Path Compression)](https://www.geeksforgeeks.org/union-find-algorithm-union-rank-find-optimized-path-compression/) 
15. [Magical Indices in an array](https://www.geeksforgeeks.org/magical-indices-array/)

##### Topological Sorting :

1\. [Topological Sorting](https://www.geeksforgeeks.org/topological-sorting/) 2\. [All topological sorts of a Directed Acyclic Graph](https://www.geeksforgeeks.org/all-topological-sorts-of-a-directed-acyclic-graph/) 3\. [Kahn’s Algorithm for Topological Sorting](https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/) 4\. [Maximum edges that can be added to DAG so that is remains DAG](https://www.geeksforgeeks.org/maximum-edges-can-added-dag-remains-dag/) 5\. [Longest path between any pair of vertices](https://www.geeksforgeeks.org/longest-path-between-any-pair-of-vertices/) 6\. [Longest Path in a Directed Acyclic Graph](https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/) 7\. [Longest Path in a Directed Acyclic Graph | Set 2](https://www.geeksforgeeks.org/longest-path-directed-acyclic-graph-set-2/) 8\. [Topological Sort of a graph using departure time of vertex](https://www.geeksforgeeks.org/topological-sorting-using-departure-time-of-vertex/) 9\. [Given a sorted dictionary of an alien language, find order of characters](https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/)

##### Minimum Spanning Tree :

1. [Prim’s Minimum Spanning Tree (MST))](https://www.geeksforgeeks.org/greedy-algorithms-set-5-prims-minimum-spanning-tree-mst-2/)
2. [Applications of Minimum Spanning Tree Problem](https://www.geeksforgeeks.org/applications-of-minimum-spanning-tree/)
3. [Prim’s MST for Adjacency List Representation](https://www.geeksforgeeks.org/greedy-algorithms-set-5-prims-mst-for-adjacency-list-representation/)
4. [Kruskal’s Minimum Spanning Tree Algorithm](https://www.geeksforgeeks.org/greedy-algorithms-set-2-kruskals-minimum-spanning-tree-mst/)
5. [Boruvka’s algorithm for Minimum Spanning Tree](https://www.geeksforgeeks.org/greedy-algorithms-set-9-boruvkas-algorithm/)
6. [Minimum cost to connect all cities](https://www.geeksforgeeks.org/minimum-cost-connect-cities/)
7. [Steiner Tree](https://www.geeksforgeeks.org/steiner-tree/)
8. [Reverse Delete Algorithm for Minimum Spanning Tree](https://www.geeksforgeeks.org/reverse-delete-algorithm-minimum-spanning-tree/)
9. [Total number of Spanning Trees in a Graph](https://www.geeksforgeeks.org/total-number-spanning-trees-graph/)
10. [Minimum Product Spanning Tree](https://www.geeksforgeeks.org/minimum-product-spanning-tree/)

##### BackTracking :

1\. [Find if there is a path of more than k length from a source](https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/) 2\. [Tug of War](https://www.geeksforgeeks.org/tug-of-war/) 3\. [The Knight-Tour Problem](https://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/) 4\. [Rat in a Maze](https://www.geeksforgeeks.org/backttracking-set-2-rat-in-a-maze/) 5\. [n-Queen’s Problem](https://www.geeksforgeeks.org/backtracking-set-3-n-queen-problem/) 6\. [m Coloring Problem](https://www.geeksforgeeks.org/backttracking-set-5-m-coloring-problem/) 7\. [Hamiltonian Cycle](https://www.geeksforgeeks.org/backtracking-set-7-hamiltonian-cycle/) 8\. [Permutation of numbers such that sum of two consecutive numbers is a perfect square](https://www.geeksforgeeks.org/permutation-numbers-sum-two-consecutive-numbers-perfect-square/)

##### Shortest Paths :

1\. [Dijkstra’s shortest path algorithm](https://www.geeksforgeeks.org/greedy-algorithms-set-6-dijkstras-shortest-path-algorithm/) 2\. [Dijkstra’s Algorithm for Adjacency List Representation](https://www.geeksforgeeks.org/greedy-algorithms-set-7-dijkstras-algorithm-for-adjacency-list-representation/) 3\. [Bellman–Ford Algorithm](https://www.geeksforgeeks.org/dynamic-programming-set-23-bellman-ford-algorithm/) 4\. [Floyd Warshall Algorithm](https://www.geeksforgeeks.org/dynamic-programming-set-16-floyd-warshall-algorithm/) 5\. [Johnson’s algorithm for All-pairs shortest paths](https://www.geeksforgeeks.org/johnsons-algorithm/) 6\. [Shortest Path in Directed Acyclic Graph](https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/) 7\. [Shortest path with exactly k edges in a directed and weighted graph](https://www.geeksforgeeks.org/shortest-path-exactly-k-edges-directed-weighted-graph/) 8\. [Dial’s Algorithm](https://www.geeksforgeeks.org/dials-algorithm-optimized-dijkstra-for-small-range-weights/) 9\. [Printing paths in Dijsktra’s Algorithm](https://www.geeksforgeeks.org/printing-paths-dijkstras-shortest-path-algorithm/) 10\. [Shortest path of a weighted graph where weight is 1 or 2](https://www.geeksforgeeks.org/shortest-path-weighted-graph-weight-edge-1-2/) 11\. [Multistage Graph (Shortest Path)](https://www.geeksforgeeks.org/multistage-graph-shortest-path/) 12\. [Shortest path in an unweighted graph](https://www.geeksforgeeks.org/shortest-path-unweighted-graph/) 13\. [Minimize the number of weakly connected nodes](https://www.geeksforgeeks.org/convert-undirected-graph-directed-graph-minimize-disconnected-component/) 14\. [Betweenness Centrality (Centrality Measure)](https://www.geeksforgeeks.org/betweenness-centrality-centrality-measure/) 15\. [Comparison of Dijkstra’s and Floyd–Warshall algorithms](https://www.geeksforgeeks.org/comparison-dijkstras-floyd-warshall-algorithms/) 16\. [Karp’s minimum mean (or average) weight cycle algorithm](https://www.geeksforgeeks.org/karps-minimum-mean-average-weight-cycle-algorithm/) 17\. [0-1 BFS (Shortest Path in a Binary Weight Graph)](https://www.geeksforgeeks.org/0-1-bfs-shortest-path-binary-graph/) 18\. [Find minimum weight cycle in an undirected graph](https://www.geeksforgeeks.org/find-minimum-weight-cycle-undirected-graph/) 19\. [Minimum Cost Path with Left, Right, Bottom and Up moves allowed](https://www.geeksforgeeks.org/minimum-cost-path-left-right-bottom-moves-allowed/) 20\. [Minimum edges to reverse to make path from a src to a dest](https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/) 21\. [Find Shortest distance from a guard in a Bank](https://www.geeksforgeeks.org/find-shortest-distance-guard-bank/)

##### Connectivity :
1\. [Find if there is a path between two vertices in a directed graph](https://www.geeksforgeeks.org/find-if-there-is-a-path-between-two-vertices-in-a-given-graph/) 2\. [Connectivity in a directed graph](https://www.geeksforgeeks.org/connectivity-in-a-directed-graph/) 3\. [Articulation Points (or Cut Vertices) in a Graph](https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/) 4\. [Biconnected Components](https://www.geeksforgeeks.org/biconnected-components/) 5\. [Biconnected graph](https://www.geeksforgeeks.org/biconnectivity-in-a-graph/) 6\. [Bridges in a graph](https://www.geeksforgeeks.org/bridge-in-a-graph/) 7\. [Eulerian path and circuit](https://www.geeksforgeeks.org/eulerian-path-and-circuit/) 8\. [Fleury’s Algorithm for printing Eulerian Path or Circuit](https://www.geeksforgeeks.org/fleurys-algorithm-for-printing-eulerian-path/) 9\. [Strongly Connected Components](https://www.geeksforgeeks.org/strongly-connected-components/) 10\. [Transitive closure of a graph](https://www.geeksforgeeks.org/transitive-closure-of-a-graph/) 11\. [Find the number of islands](https://www.geeksforgeeks.org/find-number-of-islands/) 12\. [Find the number of Islands | Set 2 (Using Disjoint Set)](https://www.geeksforgeeks.org/find-the-number-of-islands-set-2-using-disjoint-set/) 13\. [Count all possible walks from a source to a destination with exactly k edges](https://www.geeksforgeeks.org/count-possible-paths-source-destination-exactly-k-edges/) 14\. [Euler Circuit in a Directed Graph](https://www.geeksforgeeks.org/euler-circuit-directed-graph/) 15\. [Count the number of non-reachable nodes](https://www.geeksforgeeks.org/count-number-non-reachable-nodes/) 16\. [Find the Degree of a Particular vertex in a Graph](https://www.geeksforgeeks.org/find-degree-particular-vertex-graph/) 17\. [Check if a given graph is tree or not](http://geeksquiz.com/check-given-graph-tree/) 18\. [Minimum edges required to add to make Euler Circuit](https://www.geeksforgeeks.org/minimum-edges-required-to-add-to-make-euler-circuit/) 19\. [Eulerian Path in undirected graph](https://www.geeksforgeeks.org/eulerian-path-undirected-graph/) 20\. [Find if there is a path of more than k length](https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/) 21\. [Length of shortest chain to reach the target word](https://www.geeksforgeeks.org/length-of-shortest-chain-to-reach-a-target-word/) 22\. [Print all paths from a given source to destination](https://www.geeksforgeeks.org/find-paths-given-source-destination/) 23\. [Find minimum cost to reach destination using train](https://www.geeksforgeeks.org/find-the-minimum-cost-to-reach-a-destination-where-every-station-is-connected-in-one-direction/) 24\. [Find if an array of strings can be chained to form a circle | Set 1](https://www.geeksforgeeks.org/given-array-strings-find-strings-can-chained-form-circle/) 25\. [Find if an array of strings can be chained to form a circle | Set 2](https://www.geeksforgeeks.org/find-array-strings-can-chained-form-circle-set-2/) 26\. [Tarjan’s Algorithm to find strongly connected Components](https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/) 27\. [Number of loops of size k starting from a specific node](https://www.geeksforgeeks.org/number-ways-node-make-loop-size-k-undirected-complete-connected-graph-n-nodes/) 28\. [Paths to travel each nodes using each edge (Seven Bridges of Königsberg)](https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/) 29\. [Number of cyclic elements in an array where we can jump according to value](https://www.geeksforgeeks.org/number-of-cyclic-elements-in-an-array-where-we-can-jump-according-to-value/) 30\. [Number of groups formed in a graph of friends](https://www.geeksforgeeks.org/number-groups-formed-graph-friends/) 31\. [Minimum cost to connect weighted nodes represented as array](https://www.geeksforgeeks.org/minimum-cost-connect-weighted-nodes-represented-array/) 32\. [Count single node isolated sub-graphs in a disconnected graph](https://www.geeksforgeeks.org/count-single-node-isolated-sub-graphs-disconnected-graph/) 33\. [Calculate number of nodes between two vertices in an acyclic Graph by Disjoint Union method](https://www.geeksforgeeks.org/number-nodes-two-vertices-acyclic-graph-disjoint-union-method/) 34\. [Dynamic Connectivity | Set 1 (Incremental)](https://www.geeksforgeeks.org/dynamic-connectivity-set-1-incremental/) 35\. [Check if a graph is strongly connected | Set 1 (Kosaraju using DFS)](https://www.geeksforgeeks.org/connectivity-in-a-directed-graph/) 36\. [Check if a given directed graph is strongly connected | Set 2 (Kosaraju using BFS)](https://www.geeksforgeeks.org/check-given-directed-graph-strongly-connected-set-2-kosaraju-using-bfs/) 37\. [Check if removing a given edge disconnects a graph](https://www.geeksforgeeks.org/check-removing-given-edge-disconnects-given-graph/) 38\. [Find all reachable nodes from every node present in a given set](https://www.geeksforgeeks.org/find-all-reachable-nodes-from-every-node-present-in-a-given-set/) 39\. [Connected Components in an undirected graph](https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/) 40\. [k’th heaviest adjacent node in a graph where each vertex has weight](https://www.geeksforgeeks.org/kth-adjacent-node-graph-vertex-weight/)

##### Maximum Flow :

1\. [Ford-Fulkerson Algorithm for Maximum Flow Problem](https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/) 2\. [Find maximum number of edge disjoint paths between two vertices](https://www.geeksforgeeks.org/find-edge-disjoint-paths-two-vertices/) 3\. [Find minimum s-t cut in a flow network](https://www.geeksforgeeks.org/minimum-cut-in-a-directed-graph/) 4\. [Maximum Bipartite Matching](https://www.geeksforgeeks.org/maximum-bipartite-matching/) 5\. [Channel Assignment Problem](https://www.geeksforgeeks.org/channel-assignment-problem/) 6\. [Push Relabel- Set 1-Introduction](https://www.geeksforgeeks.org/push-relabel-algorithm-set-1-introduction-and-illustration/) 7\. [Push Relabel- Set 2- Implementation](https://www.geeksforgeeks.org/push-relabel-algorithm-set-2-implementation/) 8\. [Karger’s Algorithm- Set 1- Introduction and Implementation](https://www.geeksforgeeks.org/kargers-algorithm-for-minimum-cut-set-1-introduction-and-implementation/) 9\. [Karger’s Algorithm- Set 2 – Analysis and Applications](https://www.geeksforgeeks.org/kargers-algorithm-for-minimum-cut-set-2-analysis-and-applications/) 10\. [Dinic’s algorithm for Maximum Flow](https://www.geeksforgeeks.org/dinics-algorithm-maximum-flow/) 11\. [Max Flow Problem Introduction](https://www.geeksforgeeks.org/max-flow-problem-introduction/)

##### STL Implementation of Algorithms :
1\. [Kruskal’s Minimum Spanning Tree using STL in C++](https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-using-stl-in-c/) 2\. [Prim’s Algorithm using Priority Queue STL](https://www.geeksforgeeks.org/prims-algorithm-using-priority_queue-stl/) 3\. [Dijkstra’s Shortest Path Algorithm using STL](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-priority_queue-stl/) 4\. [Dijkstra’s Shortest Path Algorithm using set in STL](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-set-in-stl/) 5\. [Graph implementation using STL for competitive programming | Set 2 (Weighted graph)](https://www.geeksforgeeks.org/graph-implementation-using-stl-for-competitive-programming-set-2-weighted-graph/)

#####  Hard Problems :

1\. [Graph Coloring (Introduction and Applications)](https://www.geeksforgeeks.org/graph-coloring-applications/) 2\. [Greedy Algorithm for Graph Coloring](https://www.geeksforgeeks.org/graph-coloring-set-2-greedy-algorithm/) 3\. [Traveling Salesman Problem (TSP) Implementation](https://www.geeksforgeeks.org/traveling-salesman-problem-tsp-implementation/) 4\. [Travelling Salesman Problem (Naive and Dynamic Programming)](https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/) 5\. [Travelling Salesman Problem (Approximate using MST)](https://www.geeksforgeeks.org/travelling-salesman-problem-set-2-approximate-using-mst/) 6\. [Vertex Cover Problem | Set 1 (Introduction and Approximate Algorithm)](https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/) 7\. [K Centers Problem | Set 1 (Greedy Approximate Algorithm)](https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/) 8\. [Erdos Renyl Model (for generating Random Graphs)](https://www.geeksforgeeks.org/erdos-renyl-model-generating-random-graphs/) 9\. [Clustering Coefficient in Graph Theory](https://www.geeksforgeeks.org/clustering-coefficient-graph-theory/) 10\. [Chinese Postman or Route Inspection | Set 1 (introduction)](https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/) 11\. [Hierholzer’s Algorithm for directed graph](https://www.geeksforgeeks.org/hierholzers-algorithm-directed-graph/)

##### Misc :

1\. [Number of triangles in an undirected Graph](https://www.geeksforgeeks.org/number-of-triangles-in-a-undirected-graph/) 2\. [Number of triangles in directed and undirected Graph](https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/) 3\. [Check whether a given graph is Bipartite or not](https://www.geeksforgeeks.org/bipartite-graph/) 4\. [Snake and Ladder Problem](https://www.geeksforgeeks.org/snake-ladder-problem-2/) 5\. [Minimize Cash Flow among a given set of friends who have borrowed money from each other](https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/) 6\. [Boggle (Find all possible words in a board of characters)](https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/) 7\. [Hopcroft Karp Algorithm for Maximum Matching-Introduction](https://www.geeksforgeeks.org/hopcroft-karp-algorithm-for-maximum-matching-set-1-introduction/) 8\. [Hopcroft Karp Algorithm for Maximum Matching-Implementation](https://www.geeksforgeeks.org/hopcroft-karp-algorithm-for-maximum-matching-set-2-implementation/) 9\. [Minimum Time to rot all oranges](https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/) 10\. [Find same contents in a list of contacts](https://www.geeksforgeeks.org/find-same-contacts-in-a-list-of-contacts/) 11\. [Hypercube Graph](https://www.geeksforgeeks.org/hypercube-graph/) 12\. [Check for star graph](https://www.geeksforgeeks.org/check-star-graph/) 13\. [Optimal read list for a given number of days](https://www.geeksforgeeks.org/optimal-read-list-given-number-days/) 14\. [Print all jumping numbers smaller than or equal to a given value](https://www.geeksforgeeks.org/print-all-jumping-numbers-smaller-than-or-equal-to-a-given-value/) 15\. [Fibonacci Cube Graph](https://www.geeksforgeeks.org/fibonacci-cube-graph/) 16\. [Barabasi Albert Graph (for Scale Free Models)](https://www.geeksforgeeks.org/barabasi-albert-graph-scale-free-models/) 17\. [Construct a graph from given degrees of all vertices](https://www.geeksforgeeks.org/construct-graph-given-degrees-vertices/) 18\. [Degree Centrality (Centrality Measure)](https://www.geeksforgeeks.org/degree-centrality-centrality-measure/) 19\. [Katz Centrality (Centrality Measure)](https://www.geeksforgeeks.org/katz-centrality-centrality-measure/) 20\. [Mathematics | Graph theory practice questions](https://www.geeksforgeeks.org/graph-theory-practice-questions/) 21\. [2-Satisfiability (2-SAT) Problem](https://www.geeksforgeeks.org/2-satisfiability-2-sat-problem/) 22\. [Determine whether a universal sink exists in a directed graph](https://www.geeksforgeeks.org/determine-whether-universal-sink-exists-directed-graph/) 23\. [Number of sink nodes in a graph](https://www.geeksforgeeks.org/number-sink-nodes-graph/) 24\. [Largest subset of Graph vertices with edges of 2 or more colors](https://www.geeksforgeeks.org/largest-subset-graph-vertices-edges-2-colors/) 25\. [NetworkX : Python software package for study of complex networks](https://www.geeksforgeeks.org/networkx-python-software-package-study-complex-networks/) 26\. [Generate a graph using Dictionary in Python](https://www.geeksforgeeks.org/generate-graph-using-dictionary-python/) 27\. [Count number of edges in an undirected graph](https://www.geeksforgeeks.org/count-number-edges-undirected-graph/) 28\. [Two Clique Problem (Check if Graph can be divided in two Cliques)](https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/) 29\. [Check whether given degrees of vertices represent a Graph or Tree](https://www.geeksforgeeks.org/check-whether-given-degrees-vertices-represent-graph-tree/) 30\. [Finding minimum vertex cover size of a graph using binary search](https://www.geeksforgeeks.org/finding-minimum-vertex-cover-graph-using-binary-search/) 31\. [Stable Marriage Problem](https://www.geeksforgeeks.org/stable-marriage-problem/) 32\. [Sum of dependencies in a graph](https://www.geeksforgeeks.org/sum-dependencies-graph/)

