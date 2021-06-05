#### Dynamic Programing

- Memolization (top-down approach.)

```javascript
const fibonacciSeriesI = (n, memo = {}) => {
	if (memo[n]) return memo[n]
	if (n === 0) return 0;
	if (n === 1) return 1;
	memo[n] = fibonacciSeriesI(n - 1) + fibonacciSeriesI(n - 2);
	return memo[n];
}
console.log(fibonacciSeriesI(6)); //8 Time:O(n) Space: O(n)
```

- Tabulization (bottom-up approach.) - Depedency Graph - Topological Sort - Directed Acyclic (not have cycle) graph.

```javascript
const fibonacciSeriesII = (n) => {
	let table = new Array(n + 1).fill(0);
	table[0] = 0;
	table[1] = 1;
	for (let i = 2; i <= n; i++) {
		table[i] = table[i - 1] + table[i - 2];
	}
	return table[n];
}
console.log(fibonacciSeriesII(6));  //8 Time: O(n) Space: O(n) iterative solution
```

![Examples](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/dp/diffrenceindp.PNG)

```javascript
const fibonacciSeriesIII = (n) => {
	let table = new Array(3).fill(0);
	table[0] = 0; // i%3===0 --> index 0
	table[1] = 1; // i%3===1 --> index 1

	for (let i = 2; i <= n; i++) {
		let zeroIndex = (i-1)%3;
		let firstIndex = (i-2)%3;
		let currentIndex = (i)%3;
		table[currentIndex] = table[zeroIndex] + table[firstIndex];
	}
	console.log(table);
	return table[n%3]; // Index Of result got stored.
}
console.log(fibonacciSeriesIII(7)); //8 Time: O(n) Space: O(1) iterative solution
```

- [Maximum Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

```javascript
const fibonacciSeriesIII = (n) => {
	let table = new Array(3).fill(0);
	table[0] = 0; // i%3===0 --> index 0
	table[1] = 1; // i%3===1 --> index 1

	for (let i = 2; i <= n; i++) {
		let zeroIndex = (i-1)%3;
		let firstIndex = (i-2)%3;
		let currentIndex = (i)%3;
		table[currentIndex] = table[zeroIndex] + table[firstIndex];
	}
	console.log(table);
	return table[n%3]; // Index Of result got stored.
}
console.log(fibonacciSeriesIII(7)); //8 Time: O(n) Space: O(1) iterative solution
```
- [Minimum Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

```javascript
const fibonacciSeriesIII = (n) => {
	let table = new Array(3).fill(0);
	table[0] = 0; // i%3===0 --> index 0
	table[1] = 1; // i%3===1 --> index 1

	for (let i = 2; i <= n; i++) {
		let zeroIndex = (i-1)%3;
		let firstIndex = (i-2)%3;
		let currentIndex = (i)%3;
		table[currentIndex] = table[zeroIndex] + table[firstIndex];
	}
	console.log(table);
	return table[n%3]; // Index Of result got stored.
}
console.log(fibonacciSeriesIII(7)); //8 Time: O(n) Space: O(1) iterative solution
```

- Combinations of K

```javascript
const combination = (n, k) => {
	let gridsize = Math.max(n + 1, k + 1);
	let table = new Array(gridsize).fill(0);
	table.map((x, i) => {
		table[i] = new Array(gridsize).fill(0);
	});
	for (let row in table) {
		table[row][0] = 1;
		table[row][row] = 1;
	}
	for (let row = 1; row < gridsize; row++) {
		for (let col = 1; col < gridsize; col++) {
			table[row][col] = table[row - 1][col] + table[row - 1][col - 1]
		}
	}
	return table[n][k];
}
console.log(combination(5, 2));
```

- Count UniQue Path of Grid

![Count UniQue Path of Grid](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/dp/gridCountPath.PNG)

```javascript
const countUniquePathTabulization =(m,n) =>{
	let dp = new Array(m).fill(0);
	dp.map((x,i)=>{
		dp[i] = new Array(n).fill(0);
		dp[i][0] = 1;
	});
	dp[0].fill(1);
	for(let i = 1; i < m;i++){
		for(let j =1;j<n;j++){
			dp[i][j] = dp[i-1][j] + dp[i][j-1];
		}
	}
	console.log(dp);
	return dp[m-1][n-1];
}
console.log(countUniquePathTabulization(5,5)); //70

const countUniquePath = (m, n, memo = {}) => {
	let key = `${m}|${n}`;
	if (memo[key]) {
		console.log(memo[key]);
		return memo[key];
	}
	if (m === 1 && n == 1) return 1;
	if (m === 0 || n === 0) return 0;
	else
		memo[key] = countUniquePath(m - 1, n, memo) + countUniquePath(m, n - 1, memo);
	return memo[key];
}

console.log(countUniquePath(5, 5)); // 70
```

- MaxPath travel by robot

![ MaxPath travel by robot](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/dp/robotMaxPath.PNG)

```javascript
const maxiumumPathByRobot = (grid) => {
	let rowMax = grid.length;
	let colMax = grid[0].length;
	let dp = new Array(rowMax).fill(0);
	dp.map((x, i) => {
		dp[i] = new Array(colMax).fill(0);
	});
	dp[0][0] = grid[0][0];
	const tracePath = {}
	for (let col = 1; col < colMax; col++) {
		dp[0][col] = dp[0][col - 1] + grid[0][col];
	}
	for (let row = 1; row < rowMax; row++) {
		dp[row][0] = dp[row - 1][0] + grid[row][0];
	}
	for (let row = 1; row < rowMax; row++) {
		for (let col = 1; col < colMax; col++) {
			dp[row][col] = grid[row][col] + Math.max(dp[row - 1][col], dp[row][col - 1]); // Maximum steps
			// tracePath[`${row}|${col}`] = dp[row][col];
		}
	}
	console.log(dp);
	// console.log(tracePath);
	return dp[rowMax - 1][colMax - 1];
}
let grid = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1]
];
maxiumumPathByRobot(grid);//[ [ 1, 4, 5 ], [ 2, 9, 10 ], [ 6, 11, 12 ] ]
```
