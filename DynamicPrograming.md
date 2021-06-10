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

- [Minimum Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

```javascript
var minCostClimbingStairs = function(cost) {
	let n = cost.length;
	let table = new Array(n).fill(0);
	for (let i = 2; i <= n + 1; i++) {
		let firstMin = cost[i-1] + table[i-1];
        let secondMin = cost[i-2] + table[i-2];
        table[i] = Math.min(firstMin, secondMin);
	}
    console.log(table)
	return table[n];
}
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

-  Coin Change 

![518. Coin Change 2](https://leetcode.com/problems/coin-change-2/)


```javascript
var change = function (amount, coins) {
	let n = coins.length;
	const memo = new Map();
	const changeHelper = (amount, position = 0) => {
		if (amount === 0) return 1;
		if (amount < 0 || position >= n) return 0;
		let key = `${position}|${amount}`;
		if (memo.has(key)) return memo.get(key);
		let remaingAmount = amount - coins[position];
		let result = changeHelper(remaingAmount, position) + changeHelper(amount, position + 1);
		memo.set(key, result);
		return result;
	}
	return changeHelper(amount, n - 1);
};
// console.log(change(5, [1, 2, 5]));
var change = function(amount, coins) {
    const dp = Array(amount+1).fill(0);
    dp[0] = 1;
    
    for(let coin of coins) {
        for(let i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin]
        }
    }
    return dp[amount];
};
```

```javascript
const americanSportsI = (arr, k) => {
	let table = new Array(k + 1).fill(0);
	table[0] = 1;
	for (let i = 1; i <= k; i++) {
		for (let coin of arr) {
			if (coin > 0 && i - coin >= 0) {
				table[i] = table[i - coin] + table[i];
			}
		}
	}
	return table[k];
}
console.log(americanSportsI([2, 3, 6], 7));
```




- 1. Knapsack 0/1  Bounded knapsack: Items cannot be repeated.
Given the weights and profit of ’N’ items, put these items in a knapsack of capacity ‘W’ to get the maximum total value in the knapsack. Either Can pick item or execute item.
Formula:
`  if(weights[i-1] <= j) Vector(i,weight) = Math.max(Vector[i-1][j], profit[i]+ Vector[i-1][j - weight[i-1]]) `
There are two options for each weight, it can be included inside the knapsack or not. 
We calculate the maximum value obtained by either including or excluding the weight.
	Subset Sum Problem
	Equal Sum Partition problem
	Target Sum


```javascript
let lookup = new Map();
const knapSack = (values, weights, n, target, lookup) => {
  // base case: when we cannot have take more items
  if (target < 0) {
    return Number.MIN_SAFE_INTEGER;
  }

  // base case: when no items are left or capacity becomes 0
  if (n < 0 || target == 0) {
    return 0;
  }

  // form a unique key from the inputs for memoization
  const key = `${n}|${target}`;

  // If the sub-problem is appearing for first time, solve it and
  // store its result in the map
  if (!lookup.has(key)){

    // pick current item n in knapSack and recur
    // for remaining items (n-1) with reduced capacity (target - weights[n])
	if(target - weights[n] >=0)
    let include = values[n] + knapSack(values, weights, n - 1, target - weights[n], lookup);
else
    // leave current item n from knapSack and recur for
    // remaining items (n-1)
    let exclude = knapSack(values, weights, n - 1, target, lookup);

    // Assign max value we get by picking or leaving the current item
    lookup.set(key, Math.max(include, exclude));
  }
  // return the value
  return lookup.get(key);
}
const knapSack = (values, weights, target) => {
  // T[i][j] holds the max value of knapsack
  let T = new Array(values.length + 1);
  for(let i = 0; i < T.length; i++){
    T[i] = new Array(target+1).fill(0);
  }
  // for ith item
  for (let i = 1; i <= values.length; i++) {
    // choose all weights from 0 to maximum capacity W
    
    for (let j = 0; j <= target; j++) {
      // base case: don't pick ith element if j-weights[i-1] is negative
      if (weights[i-1] <= j) {
		  // store the max value that we get by picking or leaving the i'th item
        T[i][j] = Math.max(T[i-1][j], T[i-1][j-weights[i-1]] + values[i-1]);
       
      } else {
         T[i][j] = T[i-1][j];
      }
    }
  }

  // return maximum value
  return T[values.length][target];
}
const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;
console.log(knapSack(values, weights, values.length - 1, target, lookup)); //17
```
2. Knapsack Unbounded Un-Bounded knapsack: Items can be repeated.

Problem Statement
Given the weights and values of ’N’ items, put these items in a knapsack of capacity ‘W’ to get the maximum total value in the knapsack with repetitions of items allowed.
`  if(weights[i] <= j) Vector(i,weight) = Math.max(Vector[i][j], profit[i]+ Vector[i][j - weight[i]]) `

Coin Change Problem
Rod Cutting Problem
Maximum Product Cutting
```javascript
const unboundedKnapsack1D = (values, weights, n, target) => {
    // create a lookup table
    // lookup[i] is going to store maximum value
    // with knapsack capacity i.
    const lookup = new Array(target + 1).fill(0);

    // fill lookup[] using above recursive formula
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < n; j++) {
            if (weights[j] <= i) {
                let debug = lookup[i - weights[j]] + values[j];
                lookup[i] = Math.max(lookup[i], debug);
            }
        }
    }

    //return the max
    return lookup[target];
}

const values = [1, 5, 8, 9];
const weights = [1, 2, 3, 4];
const target = 5;
console.log(unboundedKnapsack1D(values, weights, values.length - 1, target)); //16
```