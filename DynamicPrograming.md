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

- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

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