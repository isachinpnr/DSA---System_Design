// LeetCode Problem : 1971 : find if path exists in Graph

// let n = 6;
// let edges = [
//   [0, 1],
//   [0, 2],
//   [3, 5],
//   [5, 4],
//   [4, 3],
// ];
// let source = 0;
// let destination = 5;
// // Question: Can we go from 0 to 5?

// function validPath(n, edges, source, destination) {
//   // build Adjacency List
//   const graph = {};

//   for (let i = 0; i < n; i++) {
//     graph[i] = [];
//   }
//   for (let [u, v] of edges) {
//     graph[u].push(v);
//     graph[v].push(u);
//   }

// //   return graph; // don't return it's only show adjacency list (break flow)

//   const visited = new Set();
//   const queue = [source];
//   visited.add(source);

//   while (queue.length > 0) {
//     const current = queue.shift();

//     if (current === destination) return true;

//     for (let neighbors of graph[current]) {
//       if (!visited.has(neighbors)) {
//         visited.add(neighbors);
//         queue.push(neighbors);
//       }
//     }
//   }
//   return false;
// }

// console.log(validPath(n, edges, source, destination));

// solve with DFS........

// function isValidPath(n , edges , source , destination){
//     // create a adjacency List
//     const graph = {};

//     for(let i = 0; i < n; i++){
//         graph[i] = [];
//     }
//     for (let [u , v] of edges){
//         graph[u].push(v);
//         graph[v].push(u);
//     }

//     const visited = new Set();

//     function dfs(current){
//         // base case
//         if(current === destination) return true;

//         visited.add(current);

//         for(let neighbor of graph[current]){
//             if(!visited.has(neighbor)){
//                 if(dfs(neighbor) === true){
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
//     return dfs(source);
// }
// console.log(isValidPath(n , edges , source , destination));

// LeetCode Problem 200 : Number Of Island............................

// function numIsland(grid) {
//   // Edge case : empty grid
//   if (grid === null || grid.length === 0) return 0;

//   let islandCount = 0;
//   const rows = grid.length;
//   const cols = grid[0].length;

//   function dfs(i, j) {
//     if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0") {
//       return;
//     }
//     grid[i][j] = "0";

//     dfs(i - 1, j);
//     dfs(i + 1, j);
//     dfs(i, j - 1);
//     dfs(i, j + 1);
//   }
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] === "1") {
//         islandCount++;
//         dfs(i, j);
//       }
//     }
//   }
//   return islandCount;
// }
// const grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];
// console.log(numIsland(grid));

//  LeetCode Problem : 994 : Rotting Oranges
// function orangesRotting(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;

//   const queue = []; // stores [row, col] of rotten oranges
//   let freshCount = 0; // how many fresh oranges are left
//   let minutes = 0; // time counter

//   // 1. Count fresh oranges and collect initial rotten ones
//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (grid[r][c] === 1) freshCount++;
//       if (grid[r][c] === 2) queue.push([r, c]);
//     }
//   }

//   // If there are no fresh oranges, time is 0
//   if (freshCount === 0) return 0;

//   // 2. BFS – four possible directions (up, down, left, right)
//   const directions = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];

//   while (queue.length > 0) {
//     const size = queue.length; // oranges that will rot this minute
//     let rottedThisMinute = false;

//     // Process all oranges that are already rotten at this minute
//     for (let i = 0; i < size; i++) {
//       const [r, c] = queue.shift(); // take one rotten orange

//       // Try to infect each neighbor
//       for (const [dr, dc] of directions) {
//         const newRow = r + dr;
//         const newCol = c + dc;

//         // Check bounds and if it's a fresh orange
//         if (
//           newRow >= 0 &&
//           newRow < rows &&
//           newCol >= 0 &&
//           newCol < cols &&
//           grid[newRow][newCol] === 1
//         ) {
//           grid[newRow][newCol] = 2; // make it rotten
//           queue.push([newRow, newCol]); // add to queue for next minute
//           freshCount--;
//           rottedThisMinute = true;
//         }
//       }
//     }

//     // If we actually rotted any orange this minute, increase time
//     if (rottedThisMinute) minutes++;
//   }

//   // 3. If still fresh oranges remain, impossible → -1
//   return freshCount === 0 ? minutes : -1;
// }

// LeetCode Problem : 207 : Course Schedule :

// function canFinish(numCourses, prerequisites) {
//   const graph = {};

//   for (let i = 0; i < numCourses; i++) {
//     graph[i] = [];
//   }

//   for (let [course, prereq] of prerequisites) {
//     graph[prereq].push(course);
//   }

//   const state = new Array(numCourses).fill(0);

//   function hasCycle(node) {
//     if (state[node] === 1) return true;
//     if (state[node] === 2) return false;
//     state[node] = 1;

//     for (let neighbor of graph[node]) {
//       if (hasCycle(neighbor)) {
//         return true;
//       }
//     }
//     state[node] = 2;
//     return false;
//   }
//   for (let i = 0; i < numCourses; i++) {
//     if (state[i] === 0) {
//       if (hasCycle(i)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// let numCourse = 5;
// // let prerequisites = [[0,1],[0,2],[2,3],[1,3]];
// let prerequisites = [[1,2],[2,3],[3,1],[3,4]];
// console.log(canFinish(numCourse, prerequisites));
// 📊 Time & Space Complexity :
// Time: O(V + E) – each node and edge is processed at most once.
// Space: O(V) – the recursion stack and the state array.

// LeetCode Problem : 210 : Course Schedule II

// function findOrder(numCourse, prerequisites) {
//   // build Adjacency list & in-degree array
//   const graph = {};
//   const inDegree = new Array(numCourse).fill(0);

//   for (let i = 0; i < numCourse; i++) {
//     graph[i] = [];
//   }
//   for (let [course, prereq] of prerequisites) {
//     graph[prereq].push(course);
//     inDegree[course]++;
//   }

//   const queue = [];
//   for (let i = 0; i < numCourse; i++) {
//     if (inDegree[i] === 0) {
//       queue.push(i);
//     }
//   }

//   const order = [];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     order.push(current);

//     for (let neighbor of graph[current]) {
//       inDegree[neighbor]--;

//       if(inDegree[neighbor] === 0){
//         queue.push(neighbor);
//       }
//     }
//   }

//   if(order.length === numCourse){
//     return order;
//   }else{
//     return [];
//   }
// }

// numCourses = 4
// prerequisites = [[1,0], [2,0], [3,1], [3,2]]
// console.log(findOrder(numCourses , prerequisites));

// LeetCode Problem : 733 : Flood Fill ...................(recursive)

// function floodFill(image, sr, sc, color) {
//   const originalColor = image[sr][sc];

//   if (originalColor === color) return image;

//   // Grid Size.....
//   const rows = image.length;
//   const cols = image[0].length;

//   function dfs(r, c) {
//     if (
//       r < 0 ||
//       r >= rows ||
//       c < 0 ||
//       c >= cols ||
//       image[r][c] !== originalColor
//     ) {
//       return;
//     }
//     image[r][c] = color;

//     // 3. Recursively fill in all four directions
//     dfs(r - 1, c); // up
//     dfs(r + 1, c); // down
//     dfs(r, c - 1); // left
//     dfs(r, c + 1); // right
//   }

//   dfs(sr, sc);
//   return image;
// }

// const image = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
// ];
// const sr = 1;
// const sc = 1;
// const color = 5;

// console.log(floodFill(image, sr, sc, color));

/// Iterative : ...................................................

// function floodFill(image, sr, sc, color) {
//   const original = image[sr][sc];
//   if (original === color) return image;

//   const queue = [[sr, sc]];
//   const dirs = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];
//   const rows = image.length,
//     cols = image[0].length;

//   image[sr][sc] = color;

//   while (queue.length) {
//     const [r, c] = queue.shift();
//     for (let [dr, dc] of dirs) {
//       const nr = r + dr,
//         nc = c + dc;
//       if (
//         nr >= 0 &&
//         nr < rows &&
//         nc >= 0 &&
//         nc < cols &&
//         image[nr][nc] === original
//       ) {
//         image[nr][nc] = color;
//         queue.push([nr, nc]);
//       }
//     }
//   }
//   return image;
// }

// const image = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
// ];
// const sr = 1;
// const sc = 1;
// const color = 5;

// console.log(floodFill(image, sr, sc, color));

// LeetCode Problem : 743 : Network Delay Time :

// function networkDelayTime(times, n, k) {
//     // Step 1: Build the graph (Adjacency List)
//     const graph = new Array(n + 1).fill(null).map(() => []);

//     for (const [u, v, w] of times) {
//         graph[u].push([v, w]);
//     }

//     // Step 2: Dijkstra's Algorithm Setup
//     const dist = new Array(n + 1).fill(Infinity);
//     dist[k] = 0;

//     const pq = [[0, k]];   // [distance, node]

//     // Step 3: Run Dijkstra
//     while (pq.length > 0) {
//         // Sort to get minimum distance node (smallest first)
//         pq.sort((a, b) => a[0] - b[0]);

//         const [currentDist, node] = pq.shift();

//         // Skip if we found a better path already
//         if (currentDist > dist[node]) continue;

//         // Visit all neighbors
//         for (const [neighbor, weight] of graph[node]) {
//             const newDist = currentDist + weight;

//             if (newDist < dist[neighbor]) {
//                 dist[neighbor] = newDist;
//                 pq.push([newDist, neighbor]);
//             }
//         }
//     }

//     // Step 4: Find the maximum time....
//     let maxTime = 0;
//     for (let i = 1; i <= n; i++) {
//         if (dist[i] === Infinity) {
//             return -1;
//         }
//         maxTime = Math.max(maxTime, dist[i]);
//     }

//     return maxTime;
// };

// let times = [
//   [2, 1, 1],
//   [2, 3, 1],
//   [3, 4, 1],
// ];
// let n = 4;
// let k = 2;
// console.log(networkDelayTime(times, n, k));

// Path With Maximum Probability.....

// function maxProbability(n, edges, succProb, start, end) {
//     // Build adjacency list
//     const graph = new Array(n).fill(null).map(() => []);

//     for (let i = 0; i < edges.length; i++) {
//         const [a, b] = edges[i];
//         const prob = succProb[i];
//         graph[a].push([b, prob]);
//         graph[b].push([a, prob]);
//     }

//     // Max probability to reach each node
//     const maxProb = new Array(n).fill(0);
//     maxProb[start] = 1.0;

//     // Max heap using negative values (since JS doesn't have max-heap)
//     const pq = [[-1.0, start]];

//     while (pq.length > 0) {
//         // Sort to get highest probability (most negative = highest positive)
//         pq.sort((a, b) => a[0] - b[0]);
//         const [negProb, node] = pq.shift();
//         const currentProb = -negProb;

//         // If we found a better path already, skip this one
//         if (currentProb < maxProb[node]) continue;

//         // If we reached the end, we can return early (optional optimization)
//         if (node === end) return currentProb;

//         // Explore neighbors
//         for (const [neighbor, edgeProb] of graph[node]) {
//             const newProb = currentProb * edgeProb;

//             if (newProb > maxProb[neighbor]) {
//                 maxProb[neighbor] = newProb;
//                 pq.push([-newProb, neighbor]);
//             }
//         }
//     }

//     return maxProb[end];
// }

// let edges = [
//   [0, 1],
//   [1, 2],
//   [0, 2],
// ];
// let succProb = [0.5, 0.5, 0.2];
// console.log(maxProbability(3, edges, succProb, 0, 2));

// LeetCode Problem : 787 : Cheapest Flights Within K Stops........

// function findCheapestPrice(n, flights, src, dst, k) {
//   let dist = new Array(n).fill(Infinity);
//   dist[src] = 0;

//   // K stops => K + 1 edges
//   for (let i = 0; i <= k; i++) {
//     let temp = [...dist];

//     for (let [from, to, price] of flights) {
//       if (dist[from] !== Infinity && dist[from] + price < dist[to]) {
//         temp[to] = dist[from] + price;
//       }
//     }
//     dist = temp;
//   }
//   return dist[dst] === Infinity ? -1 : dist[dst];
// }

// let flights = [
//   [0, 1, 100],
//   [1, 2, 100],
//   [2, 0, 100],
//   [1, 3, 600],
//   [2, 3, 200],
// ];
// let n = 4;
// let src = 0;
// let dst = 3;
// let k = 1;
// console.log(findCheapestPrice(n, flights, src, dst, k));

// LeetCode Problem : 547 : Number of Provinces

// var findCircleNum = function (isConnected) {
//   const n = isConnected.length;

//   const parent = Array.from({ length: n }, (_, i) => i);

//   let provinces = n;

//   function find(x) {
//     if (x !== parent[x]) {
//       parent[x] = find(parent[x]);
//     }

//     return parent[x];
//   }

//   function union(a, b) {
//     const rootA = find(a);
//     const rootB = find(b);

//     if (rootA === rootB) {
//       return false;
//     }

//     parent[rootB] = rootA;

//     return true;
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (isConnected[i][j] === 1) {
//         if (union(i, j)) {
//           provinces--;
//         }
//       }
//     }
//   }

//   return provinces;
// };

// let isConnected = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ];
// console.log(findCircleNum(isConnected));

//  LeetCode Problem : Min Cost to Connect all Points............
// function minCostConnectPoints(points) {
//     const n = points.length;
//     if (n <= 1) return 0;

//     // Track which points are in MST
//     const visited = new Array(n).fill(false);

//     // Minimum cost to connect each point to the MST
//     const minCost = new Array(n).fill(Infinity);
//     minCost[0] = 0;

//     let totalCost = 0;

//     for (let i = 0; i < n; i++) {
//         // Find the unvisited point with minimum cost
//         let u = -1;
//         for (let j = 0; j < n; j++) {
//             if (!visited[j] && (u === -1 || minCost[j] < minCost[u])) {
//                 u = j;
//             }
//         }

//         // Add this point to MST
//         visited[u] = true;
//         totalCost += minCost[u];

//         // Update costs for remaining points
//         for (let v = 0; v < n; v++) {
//             if (!visited[v]) {
//                 const cost = Math.abs(points[u][0] - points[v][0]) +
//                            Math.abs(points[u][1] - points[v][1]);
//                 if (cost < minCost[v]) {
//                     minCost[v] = cost;
//                 }
//             }
//         }
//     }

//     return totalCost;
// }

// LeetCode Problem : 1192 : Critical Connection in a Network....

// function criticalConnections(n, connections) {
//   const graph = Array.from({ length: n }, () => []);
//   for (let [u, v] of connections) {
//     graph[u].push(v);
//     graph[v].push(u);
//   }

//   const disc = new Array(n).fill(0);
//   const low = new Array(n).fill(0);
//   const result = [];
//   let time = 0;

//   function dfs(u, parent) {
//     disc[u] = low[u] = ++time;

//     for (let v of graph[u]) {
//       if (v === parent) continue;

//       if (disc[v] === 0) {
//         dfs(v, u);
//         low[u] = Math.min(low[u], low[v]);

//         if (low[v] > disc[u]) {
//           result.push([u, v]);
//         }
//       } else {
//         low[u] = Math.min(low[u], disc[v]);
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     if (disc[i] === 0) dfs(i, -1);
//   }
//   return result;
// }

// LeetCode Problem : 133 : Clone Graph -

// class Node {
//     constructor(val, neighbors) {
//         this.val = val === undefined ? 0 : val;
//         this.neighbors = neighbors === undefined ? [] : neighbors;
//     }
// }

// function cloneGraph(node) {
//   let visited = {};

//   function dfs(node) {
//     // base case :
//     if (!node) return node;

//     if (visited[node.val]) return visited[node.val];

//     let root = new Node(node.val);
//     visited[node.val] = root;

//     // recurrence relation
//     for (let neighbor of node.neighbors) {
//       root.neighbors.push(dfs(neighbor));
//     }
//     return root;
//   }
//   return dfs(node);
// }

// let adjList = [
//   [2, 4],
//   [1, 3],
//   [2, 4],
//   [1, 3],
// ];
// console.log(cloneGraph(node));

// LeetCode Problem : 785 : Is Graph Bipartite?

// function isBipartite(graph) {
//   const n = graph.length;
//   const color = new Array(n).fill(-1);

//   for (let i = 0; i < n; i++) {
//     if (color[i] === -1) {
//       const queue = [i];
//       color[i] = 0;

//       while (queue.length > 0) {
//         const node = queue.shift();
//         const currentColor = color[node];

//         for (let neighbor of graph[node]) {
//           if (color[neighbor] === -1) {
//             color[neighbor] = 1 - currentColor;
//             queue.push(neighbor);
//           } else if (color[neighbor] === currentColor) {
//             return false;
//           }
//         }
//       }
//     }
//   }
//   return true;
// }

// let graph = [[1], [0], [3], [2]]
// console.log(isBipartite(graph));

// LeetCode Problem : 752 : Open The Lock....................

// function openLock(deadends, target) {
//   // Convert deadends array to a Set for O(1) lookups
//   const deadSet = new Set(deadends);

//   // If start state is a deadend, impossible
//   if (deadSet.has("0000")) return -1;

//   // If target is already the start, 0 moves needed
//   if (target === "0000") return 0;

//   // BFS setup
//   const queue = ["0000"];
//   const visited = new Set(["0000"]);
//   let moves = 0;

//   while (queue.length > 0) {
//     const levelSize = queue.length;

//     // Process all nodes at current level
//     for (let i = 0; i < levelSize; i++) {
//       const current = queue.shift();

//       // Generate all 8 possible next states
//       const neighbors = getNeighbors(current);

//       for (let neighbor of neighbors) {
//         // Skip if deadend or already visited
//         if (deadSet.has(neighbor) || visited.has(neighbor)) {
//           continue;
//         }

//         // Check if we reached the target
//         if (neighbor === target) {
//           return moves + 1;
//         }

//         // Add to queue for further exploration
//         visited.add(neighbor);
//         queue.push(neighbor);
//       }
//     }

//     moves++;
//   }

//   // Queue exhausted without finding target
//   return -1;
// }

// // Helper function to generate all 8 neighbors
// function getNeighbors(state) {
//   const neighbors = [];
//   const digits = state.split("");

//   for (let i = 0; i < 4; i++) {
//     // Turn wheel i UP (increase by 1, wrap 9→0)
//     let up = [...digits];
//     up[i] = digits[i] === "9" ? "0" : String(Number(digits[i]) + 1);
//     neighbors.push(up.join(""));

//     // Turn wheel i DOWN (decrease by 1, wrap 0→9)
//     let down = [...digits];
//     down[i] = digits[i] === "0" ? "9" : String(Number(digits[i]) - 1);
//     neighbors.push(down.join(""));
//   }

//   return neighbors;
// }

// LeetCode Problem : 127 : Word Ladder.....

// function ladderLength(beginWord, endWord, wordList) {
//   const wordSet = new Set(wordList);

//   // If endWord is not in the dictionary, impossible
//   if (!wordSet.has(endWord)) return 0;

//   // BFS setup
//   const queue = [beginWord];
//   const visited = new Set([beginWord]);
//   let level = 1; // Start with 1 because beginWord counts

//   while (queue.length > 0) {
//     const levelSize = queue.length;

//     // Process all words at current level
//     for (let i = 0; i < levelSize; i++) {
//       const currentWord = queue.shift();

//       // Generate all possible one-letter variations
//       const neighbors = getNeighbors(currentWord, wordSet);

//       for (let neighbor of neighbors) {
//         // If we reached the target
//         if (neighbor === endWord) {
//           return level + 1;
//         }

//         // If not visited, add to queue
//         if (!visited.has(neighbor)) {
//           visited.add(neighbor);
//           queue.push(neighbor);
//         }
//       }
//     }

//     level++;
//   }

//   // No transformation sequence found
//   return 0;
// }

// function getNeighbors(word, wordSet) {
//   const neighbors = [];
//   const chars = word.split("");

//   for (let i = 0; i < word.length; i++) {
//     const originalChar = chars[i];

//     // Try all 26 lowercase letters
//     for (let code = 97; code <= 122; code++) {
//       const newChar = String.fromCharCode(code);

//       // Skip if it's the same character
//       if (newChar === originalChar) continue;

//       // Replace character at position i
//       chars[i] = newChar;
//       const newWord = chars.join("");

//       // Check if this new word exists in dictionary
//       if (wordSet.has(newWord)) {
//         neighbors.push(newWord);
//         // Remove from set to prevent revisiting (optimization)
//         wordSet.delete(newWord);
//       }

//       // Restore original character
//       chars[i] = originalChar;
//     }
//   }

//   return neighbors;
// }

// LeetCode Problem : 1631 : Path With Minimum Effort

// function minimumEffortPath(heights) {
//   const rows = heights.length;
//   const cols = heights[0].length;

//   // If only one cell, no effort needed
//   if (rows === 1 && cols === 1) return 0;

//   // Binary search range
//   let left = 0;
//   let right = 1000000; // Maximum possible height difference

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     if (canReach(heights, mid)) {
//       right = mid; // Try smaller effort
//     } else {
//       left = mid + 1; // Need more effort
//     }
//   }

//   return left;
// }

// function canReach(heights, maxEffort) {
//   const rows = heights.length;
//   const cols = heights[0].length;
//   const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
//   const queue = [[0, 0]];
//   visited[0][0] = true;

//   const directions = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];

//   while (queue.length > 0) {
//     const [row, col] = queue.shift();

//     // If we reached the target
//     if (row === rows - 1 && col === cols - 1) {
//       return true;
//     }

//     // Try all 4 directions
//     for (let [dr, dc] of directions) {
//       const newRow = row + dr;
//       const newCol = col + dc;

//       // Check if within bounds and not visited
//       if (
//         newRow >= 0 &&
//         newRow < rows &&
//         newCol >= 0 &&
//         newCol < cols &&
//         !visited[newRow][newCol]
//       ) {
//         const diff = Math.abs(heights[row][col] - heights[newRow][newCol]);

//         // Only move if difference is within allowed effort
//         if (diff <= maxEffort) {
//           visited[newRow][newCol] = true;
//           queue.push([newRow, newCol]);
//         }
//       }
//     }
//   }

//   return false;
// }

// LeetCode Problem : 721 : Accounts Merge...............
// function accountsMerge(accounts) {
//   const n = accounts.length;
//   const parent = Array.from({ length: n }, (_, i) => i);

//   // Find function with path compression
//   function find(x) {
//     if (parent[x] !== x) {
//       parent[x] = find(parent[x]);
//     }
//     return parent[x];
//   }

//   // Union function
//   function union(x, y) {
//     const rootX = find(x);
//     const rootY = find(y);
//     if (rootX !== rootY) {
//       parent[rootY] = rootX;
//     }
//   }

//   // Map email to account index
//   const emailToAccount = new Map();

//   // Step 1: Build connections by finding shared emails
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j < accounts[i].length; j++) {
//       const email = accounts[i][j];

//       if (!emailToAccount.has(email)) {
//         emailToAccount.set(email, i);
//       } else {
//         const existingAccount = emailToAccount.get(email);
//         union(i, existingAccount);
//       }
//     }
//   }

//   // Step 2: Group emails by root account
//   const groupedEmails = new Map();
//   for (let [email, accountIndex] of emailToAccount) {
//     const root = find(accountIndex);
//     if (!groupedEmails.has(root)) {
//       groupedEmails.set(root, []);
//     }
//     groupedEmails.get(root).push(email);
//   }

//   // Step 3: Build the result
//   const result = [];
//   for (let [root, emails] of groupedEmails) {
//     emails.sort();
//     const name = accounts[root][0];
//     result.push([name, ...emails]);
//   }

//   return result;
// }
// const accounts = [
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];
// console.log(accountsMerge(accounts));

// LeetCode Problem : 947 : Most Stones Removed with Same Row or Column....

// function removeStones(stones) {
//   const n = stones.length;
//   const parent = {};
//   const rank = {};

//   // Find function with path compression
//   function find(x) {
//     if (parent[x] !== x) {
//       parent[x] = find(parent[x]);
//     }
//     return parent[x];
//   }

//   // Union function with union by rank
//   function union(x, y) {
//     const rootX = find(x);
//     const rootY = find(y);
//     if (rootX === rootY) return;

//     if (rank[rootX] < rank[rootY]) {
//       parent[rootX] = rootY;
//     } else if (rank[rootX] > rank[rootY]) {
//       parent[rootY] = rootX;
//     } else {
//       parent[rootY] = rootX;
//       rank[rootX]++;
//     }
//   }

//   // Step 1: Union stones that share same row or column
//   for (let [x, y] of stones) {
//     const row = "r" + x; // Prefix to distinguish row from column
//     const col = "c" + y; // Prefix to distinguish column from row

//     if (!(row in parent)) {
//       parent[row] = row;
//       rank[row] = 0;
//     }
//     if (!(col in parent)) {
//       parent[col] = col;
//       rank[col] = 0;
//     }

//     union(row, col);
//   }

//   // Step 2: Count number of connected components
//   const components = new Set();
//   for (let [x, y] of stones) {
//     const row = "r" + x;
//     const root = find(row);
//     components.add(root);
//   }

//   // Step 3: Maximum stones removable = total stones - number of components
//   return n - components.size;
// }

// LeetCode Problem : 130 : Surrounded Regions............

// var solve = function(board) {
//     const m = board.length;
//     const n = board[0].length;

//     // Direction vectors: up, down, left, right
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

//     // DFS to mark all connected 'O's from a starting cell
//     function dfs(i, j) {
//         // Check if out of bounds
//         if (i < 0 || i >= m || j < 0 || j >= n) return;

//         // Check if current cell is not 'O' or already marked
//         if (board[i][j] !== 'O') return;

//         // Mark this cell as safe (connected to edge)
//         board[i][j] = 'S'; // 'S' means Safe

//         // Explore all 4 directions
//         for (let [di, dj] of directions) {
//             dfs(i + di, j + dj);
//         }
//     }

//     // Step 1: Mark all 'O's connected to border as 'S' (Safe)
//     // Check top and bottom rows
//     for (let j = 0; j < n; j++) {
//         if (board[0][j] === 'O') dfs(0, j);        // Top row
//         if (board[m - 1][j] === 'O') dfs(m - 1, j); // Bottom row
//     }

//     // Check left and right columns
//     for (let i = 0; i < m; i++) {
//         if (board[i][0] === 'O') dfs(i, 0);        // Left column
//         if (board[i][n - 1] === 'O') dfs(i, n - 1); // Right column
//     }

//     // Step 2: Convert remaining 'O's to 'X' and 'S' back to 'O'
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (board[i][j] === 'O') {
//                 board[i][j] = 'X'; // Surrounded 'O' → capture
//             } else if (board[i][j] === 'S') {
//                 board[i][j] = 'O'; // Safe 'O' → restore
//             }
//         }
//     }
// };

// LeetCode Problem : 417 : Pacific Atlantic Water Flow......

// function pacificAtlantic(heights) {
//     const m = heights.length;
//     const n = heights[0].length;

//     // Initialize visited matrices for both oceans
//     const pacific = Array.from({ length: m }, () => Array(n).fill(false));
//     const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

//     // Direction vectors: up, down, left, right
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

//     // DFS function to explore cells reachable from ocean
//     function dfs(i, j, ocean, prevHeight) {
//         // Check if out of bounds
//         if (i < 0 || i >= m || j < 0 || j >= n) return;

//         // Check if already visited or can't flow
//         if (ocean[i][j]) return;
//         if (heights[i][j] < prevHeight) return;

//         // Mark current cell as reachable
//         ocean[i][j] = true;

//         // Explore all 4 directions
//         for (let [di, dj] of directions) {
//             dfs(i + di, j + dj, ocean, heights[i][j]);
//         }
//     }

//     // Start DFS from Pacific Ocean edges (top row and left column)
//     for (let i = 0; i < m; i++) {
//         dfs(i, 0, pacific, heights[i][0]);      // Left column
//         dfs(i, n - 1, atlantic, heights[i][n - 1]); // Right column
//     }
//     for (let j = 0; j < n; j++) {
//         dfs(0, j, pacific, heights[0][j]);      // Top row
//         dfs(m - 1, j, atlantic, heights[m - 1][j]); // Bottom row
//     }

//     // Find cells that can reach both oceans
//     const result = [];
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (pacific[i][j] && atlantic[i][j]) {
//                 result.push([i, j]);
//             }
//         }
//     }

//     return result;
// };

// LeetCode Problem : 542 : 01 Matrix.........

// function updateMatrix(mat) {
//   const m = mat.length;
//   const n = mat[0].length;

//   // Direction vectors: up, down, left, right
//   const directions = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];

//   // Initialize result matrix and queue
//   const dist = Array.from({ length: m }, () => Array(n).fill(0));
//   const queue = [];

//   // Add all zero cells to queue
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (mat[i][j] === 0) {
//         queue.push([i, j]);
//       } else {
//         dist[i][j] = Infinity; // Mark ones as unvisited
//       }
//     }
//   }

//   // BFS from all zeros simultaneously
//   while (queue.length > 0) {
//     const [i, j] = queue.shift();

//     for (let [di, dj] of directions) {
//       const newI = i + di;
//       const newJ = j + dj;

//       // Check bounds and if unvisited
//       if (
//         newI >= 0 &&
//         newI < m &&
//         newJ >= 0 &&
//         newJ < n &&
//         dist[newI][newJ] === Infinity
//       ) {
//         dist[newI][newJ] = dist[i][j] + 1;
//         queue.push([newI, newJ]);
//       }
//     }
//   }

//   return dist;
// }

// LeetCode Problem : 329 : Longest Increasing Path in Matrix

// function longestIncreasingPath(matrix) {
//   const m = matrix.length;
//   const n = matrix[0].length;

//   // Memoization cache
//   const memo = Array.from({ length: m }, () => Array(n).fill(0));

//   // Direction vectors: up, down, left, right
//   const directions = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];

//   // DFS function to find longest path starting from cell (i, j)
//   function dfs(i, j) {
//     // If already computed, return cached value
//     if (memo[i][j] !== 0) return memo[i][j];

//     // At minimum, the path length is 1 (the cell itself)
//     let maxLength = 1;

//     // Explore all 4 directions
//     for (let [di, dj] of directions) {
//       const newI = i + di;
//       const newJ = j + dj;

//       // Check bounds and strictly increasing condition
//       if (
//         newI >= 0 &&
//         newI < m &&
//         newJ >= 0 &&
//         newJ < n &&
//         matrix[newI][newJ] > matrix[i][j]
//       ) {
//         const length = 1 + dfs(newI, newJ);
//         maxLength = Math.max(maxLength, length);
//       }
//     }

//     // Cache the result
//     memo[i][j] = maxLength;
//     return maxLength;
//   }

//   // Try starting from every cell
//   let result = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       result = Math.max(result, dfs(i, j));
//     }
//   }

//   return result;
// }

// LeetCode Problem : 332 : Reconstruct Itinerary.....

// function findItinerary(tickets) {
//   // Build adjacency list with sorted destinations
//   const graph = {};

//   // Add all tickets to graph
//   for (let [from, to] of tickets) {
//     if (!graph[from]) {
//       graph[from] = [];
//     }
//     graph[from].push(to);
//   }

//   // Sort destinations in reverse order (we'll pop from end)
//   for (let from in graph) {
//     graph[from].sort().reverse();
//   }

//   const result = [];

//   // Hierholzer's algorithm for Eulerian path
//   function dfs(airport) {
//     const destinations = graph[airport];
//     while (destinations && destinations.length > 0) {
//       const next = destinations.pop();
//       dfs(next);
//     }
//     result.push(airport);
//   }

//   dfs("JFK");
//   return result.reverse();
// }

