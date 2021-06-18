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
const minCostClimbingStairs = (n) => {
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
console.log(minCostClimbingStairs(7)); //8 Time: O(n) Space: O(1) iterative solution
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






- 1. Knapsack 0/1  Bounded knapsack: Items cannot be repeated.
Problem statment: Given the weights and profit of ’N’ items, put these items in a knapsack of capacity ‘W’ to get the maximum total value in the knapsack. Either Can pick item or execute item.
Formula:
`  if(weights[i-1] <= j) Vector(i,weight) = Math.max(Vector[i-1][j], profit[i]+ Vector[i-1][j - weight[i-1]]) `
Approach : There are two options for each weight, it can be included inside the knapsack or not.  We calculate the maximum value obtained by either including or excluding the weight.

Examples:
	Subset Sum Problem
	Equal Sum Partition problem
	Target Sum

![Bounded knapsack](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/dp/boundedknapsack.PNG)

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
```
```javascript
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

Problem statment: Given the weights and values of ’N’ items, put these items in a knapsack of capacity ‘W’ to get the maximum total value in the knapsack with repetitions of items allowed.
Formula: 
`if(weights[i] <= j) Vector(i,weight) = Math.max(Vector[i][j], profit[i]+ Vector[i][j - weight[i]])`
Aproach: In 0/1 Knapsack we either include or exclude a value but in Unbounded we can include it again and again as repetitions are allowed. We calculate the maximum value by either including or excluding the value and repeating the subproblem until the capacity is 0.

Coin Change Problem
Rod Cutting Problem
Maximum Product Cutting

![Un-Bounded knapsack](https://github.com/tusharbudhe0302/tusharkickstart/blob/master/images/dp/unboundedknapsack.PNG)

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
console.log(unboundedKnapsack1D([6, 10, 12], [1, 2, 3], 5)); // 30 6+6+6+6+6
console.log(unboundedKnapsack1D([2, 10, 12], [1, 2, 3], 5)); // 22 10+12
```

3. Longest Common Subsequence
Problem Statement: Given two sequences, find the length of the longest subsequence present in both of them.
Formula: `if (X[i - 1] == Y[j - 1])L[i][j] = L[i - 1][j - 1] + 1 else L[i][j] = Math.max(L[i - 1][j], L[i][j - 1])`
Approach: A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. We compare each character of the string and reduce the problem into subproblems and calculate the maximum possible value obtained by the subproblems.
```javascript
const longestCommonSequence = (X, Y) => {
    let m = X.length;
    let n = Y.length;
    const L = new Array(m + 1).fill(0);
    L.map((x, i) => {
        L[i] = new Array(n + 1).fill(0);
    });
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1
            else
                L[i][j] = Math.max(L[i - 1][j], L[i][j - 1])
        }
    }
    console.log(L);
    return L[m][n]
}
let str1 = "AGGTAB";
let str2 = "GXTXAYB";
console.log(longestCommonSequence(str1, str2))
```

Longest Common Substring
Shortest Common Supersequence
Longest Palindromic Subsequence
Longest Repeating Subsequence

4. Egg Dropping Problem
Problem Statement: You are given ‘K’ eggs and you have access to a building with ’N’ floors. Each egg is identical in function, and if an egg breaks, you cannot drop it again.
Approach : In each move we have two choices: the egg breaks / the egg doesn’t break

Formula: `1 + Math.max(edd_drop_dp(n - 1, x - 1), edd_drop_dp(n, k - x));`

```javascript
const edd_drop_dp = (n, k) => {
    if (k <= 1) return k;
    if (n === 1) return k;
    let min = Number.MAX_VALUE;
    let res;
    for (let x = 1; x <= k; x++) {
        res = 1 + Math.max(edd_drop_dp(n - 1, x - 1), edd_drop_dp(n, k - x));
        if (res < min) {
            min = res;
        }
    }
    return min;
}

const edd_drop_dp_table = (n, k) => {
    let eggFloor = new Array(n + 1);
    for (let i = 0; i < (n + 1); i++) {
        eggFloor[i] = new Array(k + 1);
    }
    let res;
    let i, j, x;
    for (i = 1; i <= n; i++) {
        eggFloor[i][1] = 1;
        eggFloor[i][0] = 0;
    }
    for (j = 1; j <= k; j++)
        eggFloor[1][j] = j;

for (i = 2; i <= n; i++) {
        for (j = 2; j <= k; j++) {
            eggFloor[i][j] = Number.MAX_VALUE;
            for (x = 1; x <= j; x++) {
                res = 1 + Math.max(
                    eggFloor[i - 1][x - 1],
                    eggFloor[i][j - x]);
                if (res < eggFloor[i][j])
                    eggFloor[i][j] = res;
            }
        }
    }
    return eggFloor[n][k];
}
console.log(edd_drop_dp_table(3, 3)); //2
```


5. DP with Grid — Unique Paths
Problem Statement : Count all the possible paths from top left to the bottom right of the matrix with the constraints that from each cell you can either move only to right or down.
Formula: `dp[i][j] = dp[i-1][j] + dp[i][j-1]`
Approach: In this type of problem, we create a table and initialize the first row and first column value as 1 and each cell value is calculated by adding the values of the left cell and top cell.

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