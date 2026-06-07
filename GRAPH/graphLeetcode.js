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

//