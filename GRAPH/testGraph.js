// Graph Building Blocks
// this is a advanced fundamentals implementation code of graph (adjacency List code)
// class Graph {
//   constructor() {
//     this.adjList = {};
//   }

//   // adding a vertex
//   addVertex(vertex) {
//     // Only add if the vertex doesn't already exist
//     if (!this.adjList[vertex]) {
//       this.adjList[vertex] = [];
//       return true;
//     }
//     return false;
//   }

//   // adding a edge
//   addEdge(v1, v2, directed = false) {
//     // Safety: ensure both vertices exist. If not, create them.
//     if (!this.adjList[v1]) {
//       this.addVertex(v1);
//     }
//     if (!this.adjList[v2]) {
//       this.addVertex(v2);
//     }

//     // Add edge from v1 to v2 (avoid duplicates)
//     if (!this.adjList[v1].includes(v2)) {
//       this.adjList[v1].push(v2);
//     }

//     // If graph is UNDIRECTED, add the reverse edge as well
//     if (!directed) {
//       if (!this.adjList[v2].includes(v1)) {
//         this.adjList[v2].push(v1);
//       }
//     }
//     return true;
//   }

//   // remove edge
//   removeEdge(v1, v2, directed = false) {
//     // Remove v2 from v1's adjacency List
//     if (this.adjList[v1] && this.adjList[v1].includes(v2)) {
//       this.adjList[v1] = this.adjList[v1].filter((neighbor) => neighbor !== v2);
//     }

//     if (!directed) {
//       if (this.adjList[v2] && this.adjList[v2].includes(v1)) {
//         this.adjList[v2] = this.adjList[v2].filter(
//           (neighbor) => neighbor !== v1,
//         );
//       }
//     }
//     return true;
//   }

//   removeVertex(vertex) {
//     if (!this.adjList[vertex]) return false;

//     for (let otherVertex in this.adjList) {
//       if (this.adjList[otherVertex].includes(vertex)) {
//         this.adjList[otherVertex] = this.adjList[otherVertex].filter(
//           (v) => v !== vertex,
//         );
//       }
//     }
//     delete this.adjList[vertex];
//     return true;
//   }

//   printGraph() {
//     for (let vertex in this.adjList) {
//       console.log(`${vertex} -> [${this.adjList[vertex].join(",")}]`);
//     }
//   }
// }

// const myGraph = new Graph();
// myGraph.addEdge("a", "b");
// myGraph.addEdge("a", "c");
// myGraph.addEdge("b", "d");
// myGraph.addEdge("c", "d");

// myGraph.printGraph();

// // remove vertex "D"
// console.log("========================");
// myGraph.removeVertex("d");
// myGraph.printGraph();

// // Build a Directed Graph
// console.log("\n Building Directed Graph");
// const twitterGraph = new Graph();
// twitterGraph.addEdge("Elon", "Tesla", true);
// twitterGraph.addEdge("Elon", "SpaceX", true);
// twitterGraph.addEdge("Tesla", "Elon", true);
// twitterGraph.printGraph();


// BFS traversal in Graph
// let edges = [[0 , 1 ], [0 , 2],[1 , 3],[1 , 4],[2 , 3],[3 , 6],[6 , 4]];

// const graph = {};

// for(let [u , v] of edges){
//     if(!graph[u]) graph[u] = [];
//     if(!graph[v]) graph[v] = [];
    
//     graph[u].push(v);
//     graph[v].push(u);
// }
// console.log('Adjacency List : ', graph);

// function bfsTraversal(graph , start){
//     const visited = new Set();
//     const queue = [start];
//     const result = [];
    
//     visited.add(start);
    
//     while(queue.length > 0){
//         const current = queue.shift();
//         result.push(current);
        
//         for(let neighbor of graph[current]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor);
//                 queue.push(neighbor);
//             }
//         }
//     }
//     return result;
// }

// console.log(bfsTraversal(graph , 0));