// What is Graph ?
// A Graph is a data structure used to represent relationships between different objects.
// or A graph consists of a set of vertices (nodes) and a set of edges (connections between nodes).

// example :
// A --- B
// |     |
// C --- D
// A, B, C, D → Nodes
// Lines between them → Edges

// - Core Components Of Graph
// 1. Vertex (node)
// Represents an entity
// Example: person, city, computer

// // 2. Edge
// Represents connection between nodes
// Example: road, friendship, network link

// 3. Types Of Graph
// i - Undirected Graph
// Connection is two-way
// A <---> B
// A is connected to B AND B is connected to A

// ii -Directed Graph (Digraph)
// connection is one-way
// A -> B
// A goes to B, but not necessarily B to A

// -Weighted Graph
// Edges have values (cost, distance)
// A --5--> B
// 👉 Used in:
// Google Maps (distance)
// Network cost

// - Unweighted Graph
// All edges are equal (no cost)

// Special Graph Types
// 🌳 Tree
// Graph with:
// No cycles
// Exactly (n-1) edges

// 🔁 Cycle
// A path where you return to the same node
// A → B → C → A

// 🔗 Connected Graph
// Every node is reachable from any other node

// ❌ Disconnected Graph
// Some nodes are isolated

// Graph Representation
//  1. Adjecency List
// {
//   A: [B, C],
//   B: [A, D],
//   C: [A, D],
//   D: [B, C]
// }

// 👉 Meaning:
// A is connected to B and C

// 2. Adjacency Matrix
//     A B C D
// A [ 0 1 1 0 ]
// B [ 1 0 0 1 ]
// C [ 1 0 0 1 ]
// D [ 0 1 1 0 ]
// 👉 If matrix[i][j] = 1 → edge exists

// 3. Edge List
// [
//   [A, B],
//   [A, C],
//   [B, D],
//   [C, D]
// ]

// Basic Graph Implementations (Adjacency List)

// class Graph {
//   constructor() {
//     this.adjList = {};
//   }

//   // add a vertex (node)
//   addVertex(vertex) {
//     if (!this.adjList[vertex]) {
//       this.adjList[vertex] = [];
//     }
//   }

//   // add an edge (undirected)
//   addEdge(v1, v2) {
//     this.addVertex(v1); // ensure v1 exists
//     this.addVertex(v2); // ensure v2 exists

//     this.adjList[v1].push(v2);
//     this.adjList[v2].push(v1);
//   }

//   // Remove a edge
//   removeEdge(v1, v2) {
//     this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
//     this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
//   }

//   // remove a vertex
//   removeVertex(vertex) {
//     while (this.adjList[vertex].length) {
//       let neighbor = this.adjList[vertex].pop();
//       this.removeEdge(vertex, neighbor);
//     }
//     delete this.adjList[vertex];
//   }
//   printGraph() {
//     console.log(this.adjList);
//   }
// }
// let g = new Graph();

// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "D");

// g.printGraph();

// Master Internal Class Logic to Solve Most Graph Problem with just write this code...

// const graph = {};
// for (let [u, v] of edges) {
//     if (!graph[u]) graph[u] = [];
//     if (!graph[v]) graph[v] = [];
//     graph[u].push(v);
//     graph[v].push(u);  // Delete if directed
// }

// Given by the problem:
// n = 5
// edges = [[0,1], [0,2], [1,3], [2,4]]

// Step 1: Build the adjacency list (THIS IS ALL YOU NEED)
// const graph = {};

// // Initialize empty arrays for all nodes
// for (let i = 0; i < n; i++) {
//     graph[i] = [];
// }

// // Populate the connections
// for (let [u, v] of edges) {
//     graph[u].push(v);
//     graph[v].push(u); // ← DELETE THIS LINE IF GRAPH IS DIRECTED
// }

// // Step 2: Now 'graph' is ready. Start your BFS/DFS here.
// console.log(graph);
// // Output: { 0: [1, 2], 1: [0, 3], 2: [0, 4], 3: [1], 4: [2] }

// various way to implement a adjacency List.....
// adjacency list implement
// Undirected Graph
// const n = 4;
// const edges = [[0,1],[0,2],[1,3],[2,3]];

// const graph = {};

// for(let i = 0; i < n; i++){
//     graph[i] = [];
// }

// for(let [u , v] of edges){
//     graph[u].push(v);
//     graph[v].push(u);
// }

// console.log('Undirected Graph- Adjancey List : ');
// console.log(graph);

// Directed Graph Example

// const n = 4;
// const prerequisites = [[0,1],[0,2],[1,3],[2,3]];

// const graph = {};

// for(let i = 0; i < n; i++){
//     graph[i] = [];
// }

// for(let [u , v] of prerequisites){
//     graph[u].push(v);
// }

// console.log('Directed Graph Adjacency List');
// console.log(graph);

// Graph with String Nodes

// const equations = [['A' ,'B'] , ['B','C'], ['A','D']];

// const graph = {};

// for(let [u , v] of equations){
//     if(!graph[u]) graph[u] = [];
//     if(!graph[v]) graph[v] = [];

//     graph[u].push(v);
//     graph[v].push(u);
// }

// console.log('String-Based Graph Adjacency List:');
// console.log(graph);

// Disconnected Graph (Multiple components)

// const n = 6;
// const edges = [[0,1],[1,2],[3,4]];

// const graph = {};

// for(let i = 0; i < n; i++){
//     graph[i] = [];
// }

// for(let [u , v] of edges){
//       graph[u].push(v);
//       graph[v].push(u);
// }

// console.log('Disconnected Graph Adjacency List');
// console.log(graph);

// BFS Traversal In Graph....................................

// function bfsTraversal(graph, start) {
//   const visited = new Set();
//   const queue = [start];
//   const result = [];

//   visited.add(start);

//   while (queue.length > 0) {
//     const current = queue.shift(); // Remove from Front
//     result.push(current); // add to result

//     for (let neighbor of graph[current]) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push(neighbor);
//       }
//     }
//   }
//   return result;
// }

// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B"],
//   F: ["C"],
// };

// console.log(bfsTraversal(graph, "A"));

// DFS Travels in Graph .............................

// function dfsTraversal(graph, start) {
//   const visited = new Set();
//   const result = [];

//   function dfs(node) {
//     // mark visited and add to result
//     visited.add(node);
//     result.push(node);

//     for (let neighbor of graph[node]) {
//       if (!visited.has(neighbor)) {
//         dfs(neighbor); // go deeper
//       }
//     }
//   }
//   dfs(start);
//   return result;
// }

// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B"],
//   F: ["C"],
// };
// console.log(dfsTraversal(graph, "A"));

// Cycle detection in Undirected Graph ...........

// 1. Detect a cycle with DFS.........
// function hasCycleUndirected(n , edges){
//     const graph = {};

//     for(let i = 0; i < n; i++) graph[i] = [];
//     for(let [u , v] of edges){
//         graph[u].push(v);
//         graph[v].push(u);
//     }
//     const visited = new Array(n).fill(false);

//     function dfs(node , parent){
//         visited[node] = true;

//         for(let neighbor of graph[node]){
//             if(!visited[neighbor]){
//                 if(dfs(neighbor , node)) return true;
//             }
//             else if(neighbor !== parent){
//                 return true;
//             }
//         }
//         return false;
//     }

//     for(let i = 0; i < n; i++){
//         if(!visited[i]){
//             if(dfs(i , -1)) return true;
//         }
//     }
//     return false;
// }
// let n = 6;
// let edges = [[0,1],[1,2],[2,0],[3,4],[4,5]];
// console.log(hasCycleUndirected(n , edges));

// Detect a Cycle with BFS

// function hasCycleUndirected(n, edges) {
//   // build adjacency List
//   const graph = {};
//   for (let i = 0; i < n; i++) graph[i] = [];
//   for (let [u, v] of edges) {
//     graph[u].push(v);
//     graph[v].push(u);
//   }

//   const visited = new Array(n).fill(false);
//   const parent = new Array(n).fill(-1);

//   function bfs(start) {
//     const queue = [start];
//     visited[start] = true;

//     while (queue.length > 0) {
//       const node = queue.shift();

//       for (let neighbor of graph[node]) {
//         if (!visited[neighbor]) {
//           visited[neighbor] = true;
//           parent[neighbor] = node;
//           queue.push(neighbor);
//         } else if (neighbor !== parent[node]) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   for (let i = 0; i < n; i++) {
//     if (!visited[i]) {
//       if (bfs(i)) return true;
//     }
//   }
//   return false;
// }
// let n = 7;
// let edges = [[0,1],[1,2],[2,0],[3,4]];
// console.log(hasCycleUndirected(n , edges));

// Cycle Detection in Directed Graph with DFS ............

// function hasCycleDirected(n, edges) {
//   const adj = new Map();
//   for (let i = 0; i < n; i++) {
//     adj.set(i, []);
//   }
//   for (const [u, v] of edges) {
//     adj.get(u).push(v);
//   }

//   const state = new Array(n).fill(0);

//   function dfs(node) {
//     if (state[node] === 1) return true;

//     if (state[node] === 2) return false;

//     state[node] = 1;

//     for (const neighbor of adj.get(node)) {
//       if (dfs(neighbor)) return true;
//     }

//     state[node] = 2;
//     return false;
//   }
//   for (let i = 0; i < n; i++) {
//     if (state[i] === 0) {
//       if (dfs(i)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// let edges = [
//   [1, 0],
//   [0, 2],
//   [2, 3],
//   [3, 3],
// ];
// let n = 4;
// console.log(hasCycleDirected(n, edges));

// TopoLogical Sort ..... ( Khan's Algorithm).......

// function topologicalSort(numCourses, prerequisites) {
//     // 1. Build adjacency list and in-degree array
//     const graph = {};                  // adjacency list
//     const inDegree = new Array(numCourses).fill(0);

//     // Initialize graph for all nodes
//     for (let i = 0; i < numCourses; i++) {
//         graph[i] = [];
//     }

//     // Fill graph and in-degree
//     for (let [course, prereq] of prerequisites) {
//         graph[prereq].push(course);   // prereq -> course
//         inDegree[course]++;           // increase in-degree of course
//     }

//     // 2. Start with all nodes that have in-degree = 0
//     const queue = [];
//     for (let i = 0; i < numCourses; i++) {
//         if (inDegree[i] === 0) {
//             queue.push(i);
//         }
//     }

//     // 3. Process the queue
//     const order = [];   // will hold the topological order

//     while (queue.length > 0) {
//         const current = queue.shift();
//         order.push(current);   // take the course

//         // For each neighbor, reduce its in-degree
//         for (let neighbor of graph[current]) {
//             inDegree[neighbor]--;
//             if (inDegree[neighbor] === 0) {
//                 queue.push(neighbor);
//             }
//         }
//     }

//     // 4. If we couldn't process all nodes, there's a cycle
//     if (order.length !== numCourses) {
//         return [];   // cycle detected, no valid order
//     }
//     return order;
// }

// const numCourses = 4;
// const prerequisites = [
//     [1, 0],  // 0 -> 1
//     [2, 0],  // 0 -> 2
//     [3, 1],  // 1 -> 3
//     [3, 2]   // 2 -> 3
// ];

// const result = topologicalSort(numCourses, prerequisites);
// console.log("Topological order:", result);  // [0, 1, 2, 3] or [0, 2, 1, 3]

// Topological Sort (Kahn's algorithm)......

// function topologicalSort(numCourses, prerequisites) {
//   // 1. Build graph (adjacency list) and in-degree array
//   const graph = {};
//   const inDegree = new Array(numCourses).fill(0);

//   for (let i = 0; i < numCourses; i++) {
//     graph[i] = [];
//   }

//   for (let [course, prereq] of prerequisites) {
//     graph[prereq].push(course); // edge: prereq → course
//     inDegree[course]++; // course gets one more incoming edge
//   }

//   // 2. Find all nodes with no prerequisites (in-degree 0)
//   const queue = [];
//   for (let i = 0; i < numCourses; i++) {
//     if (inDegree[i] === 0) {
//       queue.push(i);
//     }
//   }

//   // 3. Process the queue
//   const order = [];
//   while (queue.length > 0) {
//     const current = queue.shift(); // take a node we can process now
//     order.push(current); // add it to the result

//     // For each neighbor, remove the edge (decrement in-degree)
//     for (let neighbor of graph[current]) {
//       inDegree[neighbor]--;
//       if (inDegree[neighbor] === 0) {
//         queue.push(neighbor); // now this node has no prerequisites
//       }
//     }
//   }

//   // 4. If all nodes are in order, we have a valid sort; otherwise a cycle exists
//   return order.length === numCourses ? order : [];
// }

// let p = [
//   [1, 0],
//   [2, 0],
//   [3, 1],
//   [3, 2],
// ];
// let n = 4;
// console.log(topologicalSort(n, p));

// Dijkstra Algorithm *** ........................................

// function dijkstra(n, graph, source) {
//   const dist = new Array(n).fill(Infinity);

//   dist[source] = 0;

//   const pq = [[0, source]];

//   while (pq.length > 0) {

//     pq.sort((a, b) => a[0] - b[0]);

//     const [currentDist, node] = pq.shift();

//     if (currentDist > dist[node]) continue;

//     for (const [neighbor, weight] of graph[node]) {

//       const newDist = currentDist + weight;

//       if (newDist < dist[neighbor]) {

//         dist[neighbor] = newDist;

//         pq.push([newDist, neighbor]);
//       }
//     }
//   }

//   return dist;
// }

// // const graph1 = {
// //   0: [[1, 5]],
// //   1: [[2, 3]],
// //   2: [[3, 2]],
// //   3: []
// // };
// // console.log(dijkstra(4, graph1, 0));
// // // Expected: [0, 5, 8, 10]

// const graph5 = {
//   0: [[1, 2]],
//   1: [[2, 3], [3, 1]],
//   2: [[3, 5]],
//   3: []
// };
// console.log(dijkstra(4, graph5, 1));
// // Expected: [Infinity, 0, 3, 1]

// Bellman Ford Algorithm .....

// function bellmanFord(vertices, edges, source) {
//   const dist = Array(vertices).fill(Infinity);

//   dist[source] = 0;

//   for (let i = 0; i < vertices - 1; i++) {
//     for (let [u, v, weight] of edges) {
//       if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
//         dist[v] = dist[u] + weight;
//       }
//     }
//   }

//   // negative check cycle
//   for (let [u, v, weight] of edges) {
//     if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
//       console.log("Negative Weight Cycle Found");
//       return;
//     }
//   }
//   return dist;
// }
// const vertices = 5;
// const edges = [
//   [0, 1, -1],
//   [0, 2, 4],
//   [1, 2, 3],
//   [1, 3, 2],
//   [1, 4, 2],
//   [3, 2, 5],
//   [3, 1, 1],
//   [4, 3, -3],
// ];

// console.log(bellmanFord(vertices, edges, 0));

// Prim's Algorithm -MST (Minimum Spanning Tree in Graph)...........................................

// what is spanning tree..........
// 1. connected graph
// 2.undirected Graph
// 3. weight graph

// Interview Version of Prim's Algorithm..... (MST - minimum spanning tree)

// function primMST(graph, n) {
//   const visited = new Set();
//   const heap = [[0, 0]];
//   let mstCost = 0;

//   while (heap.length > 0) {
//     heap.sort((a, b) => a[0] - b[0]);
//     const [weight, node] = heap.shift();
//     if (visited.has(node)) continue;
//     visited.add(node);
//     mstCost += weight;
//     for (const [neighbor, edgeWeight] of graph[node]) {
//       if (!visited.has(neighbor)) {
//         heap.push([edgeWeight, neighbor]);
//       }
//     }
//   }
//   return mstCost;
// }
// const graph = {
//   0: [[1, 2], [2, 6]],
//   1: [[0, 2], [3, 3]],
//   2: [[0, 6], [3, 1]],
//   3: [[1, 3], [2, 1]]
// };
// const n = 4;
// console.log(primMST(graph, n));

// Disjoint Set Union | Union Find -----

// class DSU {

//     constructor(n) {

//         this.parent = Array.from(
//             { length: n },
//             (_, i) => i
//         );

//         this.rank = new Array(n).fill(1);
//     }

//     find(x) {

//         if(x !== this.parent[x]) {

//             this.parent[x] =
//                 this.find(this.parent[x]);

//         }

//         return this.parent[x];
//     }

//     union(a, b) {

//         let rootA = this.find(a);

//         let rootB = this.find(b);

//         if(rootA === rootB) {
//             return false;
//         }

//         if(this.rank[rootA] < this.rank[rootB]) {

//             [rootA, rootB] =
//             [rootB, rootA];

//         }

//         this.parent[rootB] = rootA;

//         if(this.rank[rootA] === this.rank[rootB]) {

//             this.rank[rootA]++;

//         }

//         return true;
//     }

// }

// const dsu = new DSU(7);

// dsu.union(0,1);
// dsu.union(1,2);

// dsu.union(4,5);

// console.log(
//     dsu.find(0) === dsu.find(2)
// );

// console.log(
//     dsu.find(0) === dsu.find(4)
// );

// dsu.union(2,4);

// console.log(
//     dsu.find(0) === dsu.find(5)
// );

// console.log(dsu.parent);

// Kruskal's Algorithm Steps.....
// 1. Sort all edges by weight.
// 2. Create DSU.
// 3. Traverse edges in sorted order.
// 4. If edge creates cycle:
//       Skip it.
// 5. Otherwise:
//       Add edge to MST
//       Union both nodes
// 6. Continue until MST contains
//    V - 1 edges.

// class DSU {
//   constructor(n) {
//     this.parent = Array.from({ length: n }, (_, i) => i);

//     this.rank = new Array(n).fill(1);
//   }

//   find(x) {
//     if (x !== this.parent[x]) {
//       this.parent[x] = this.find(this.parent[x]);
//     }

//     return this.parent[x];
//   }

//   union(a, b) {
//     let rootA = this.find(a);
//     let rootB = this.find(b);

//     if (rootA === rootB) {
//       return false;
//     }

//     if (this.rank[rootA] < this.rank[rootB]) {
//       [rootA, rootB] = [rootB, rootA];
//     }

//     this.parent[rootB] = rootA;

//     if (this.rank[rootA] === this.rank[rootB]) {
//       this.rank[rootA]++;
//     }

//     return true;
//   }
// }

// // kruskal's function ....

// function kruskal(n, edges) {
//   edges.sort((a, b) => a[2] - b[2]);

//   const dsu = new DSU(n);

//   let mstCost = 0;

//   const mstEdges = [];

//   for (const [u, v, weight] of edges) {
//     if (dsu.union(u, v)) {
//       mstCost += weight;

//       mstEdges.push([u, v, weight]);
//     }
//   }

//   return {
//     mstCost,
//     mstEdges,
//   };
// }
// const edges = [
//   [0, 1, 10],
//   [0, 2, 6],
//   [0, 3, 5],
//   [1, 3, 15],
//   [2, 3, 4],
// ];

// console.log(kruskal(4, edges));

//                                                        