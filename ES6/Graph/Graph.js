// create a graph class 
class Graph {
    // defining vertex array and 
    // adjacent list 
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    // functions to be implemented 

    // addVertex(v) 
    // add vertex to the graph 
    addVertex(v) {
        // initialize the adjacent list with a 
        // null array 
        this.AdjList.set(v, []);
        console.log(`addVertex`);
        console.log(this.AdjList);
    }

    // addEdge(v, w) 
    // add edge to the graph 
    addEdge(v, w) {
        // get the list for vertex v and put the 
        // vertex w denoting edge between v and w 
        this.AdjList.get(v).push(w);

        // Since graph is undirected, 
        // add an edge from w to v also 
        this.AdjList.get(w).push(v);
        console.log(`addEdge`);
        console.log(this.AdjList);
    }

    // printGraph() 
    // Prints the vertex and adjacency list 
    printGraph() {
        // get all the vertices 
        var get_keys = this.AdjList.keys();

        // iterate over the vertices 
        for (var i of get_keys) {
            // great the corresponding adjacency list 
            // for the vertex 
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list 
            // concatenate the values into a string 
            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list 
            console.log(i + " -> " + conc);
        }
    }

    // bfs(v)
    // function to performs BFS 
    bfs(startingNode) {
        // create a visited array 
        let visited = new Map();
        for (var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        // Create an object for queue 
        var q = [];

        // add the starting node to the queue 
        visited[startingNode] = true;
        q.push(startingNode);

        // loop until queue is element 
        while (q.length > 0) {
            // get the element from the queue 
            var getQueueElement = q.shift();

            // passing the current vertex to callback funtion 
            console.log(getQueueElement);

            // get the adjacent list for current vertex 
            var get_List = this.AdjList.get(getQueueElement);

            // loop through the list and add the element to the 
            // queue if it is not processed yet 
            for (var i in get_List) {
                console.log(`i : ${i} get_List  : ${get_List[i]}`);
                var neigh = get_List[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.push(neigh);
                }


            }

            // dfs(v) 
        }
    }
    dfs(startNode) {
        let visited = new Object();
        this.dfsHelper(startNode, visited);
    }
    dfsHelper(vert, visted) {
        visted[vert] = true;
        console.log(vert);
        let neighbours = this.AdjList.get(vert);
        for (i in neighbours) {
            let tempCal = neighbours[i];
            if (!visted[tempCal]) {
                this.dfsHelper(tempCal, visted);
            }
        }
    }
}

// Using the above implemented graph class 
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices 
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges 
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph();

// BFS 
// A B D E C F 
console.log("BFS");
g.bfs('A'); 