
##### Lazy Manager fund raise problem

- O(n) or  θlog10(n)
- Permutaion (`Order Matters`)
  - No repetation
  - With reperation
- Combinations (`Order Not Matters`)
```javascript
const raiseFunds = (n, memo = {}) => {
	if (n <= 1) return 10;
	if (n > 1) {
		memo[n] = n * raiseFunds(n / 10, memo);
	}
	return memo[n];
}
console.log(raiseFunds(10));
```
#### Factorial of 'n'
- O(n) or θ(n)
```javascript
const factorial = (n) => {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(5));
```
#### Power of 'N' to 'K'
- O(n^k) = O(k) or θ(k)
```javascript
const powerOfNToK = (n, k) => {
	if (k <= 0) return 1;
	return n * powerOfNToK(n, k - 1);
}
console.log(powerOfNToK(2, 10));
```
#### Subsets of size 'n'

Number | Subsets | Count
----|---| --|
0|{}|1|
1|{1}{}|2|
2|{}{1}{2}{1,2}|4|
3|{1,2,3}{1,2}{1,3}{2,3}{1}{2}{3}{}|8|

- Option 1 (Optimized)  O(n)
```javascript
const numberOfSubSets = (n) => {
	if (n === 0) return 1;
	return 2 * numberOfSubSets(n - 1);
}
console.log(numberOfSubSets(5)); //32
```
- option 2 O(2^n)
```javascript
const numberOfSubSets = (n) => {
	if (n === 0) return 1;
	return numberOfSubSets(n - 1) + numberOfSubSets(n - 1);
}
console.log(numberOfSubSets(5)); //32
```

#### Search element in Sorted array `Binary Search tree using recusrsion`

```javascript
var result = -1;
var searchElementInBT = (a, k, start = 0, end = a.length) => {
	var mid = Math.floor(((end - start) + start) / 2);
	if (a[mid] === k) {
		return result = mid;
	} else if (k > a[mid]) {
		searchElementInBT(a, k, mid + 1, end);
	} else if (k < a[mid]) {
		searchElementInBT(a, k, start, mid - 1);
	}
	return result;
}

console.log(searchElementInBT([2, 3, 4, 6, 8, 9], 2));
console.log(searchElementInBT([1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 23));
```
#### Fibonacci Series
- O(2^n)
```javascript
const fibonacciSeries =(n)=>{
	if(n <= 1) return 1;
	return fibonacciSeries(n-1) +fibonacciSeries(n-2)
}
console.log(fibonacciSeries(7)); //21
```
- O(n)
```javascript
const fibTimeComplexityReduction = (n, _prev, _current) => {
	if (n === 0) return _prev;
	// console.log(`_prev: ${_prev} _current: ${_current}`);
	return fibTimeComplexityReduction(n - 1, _current, _current + _prev);

}
console.log(fibTimeComplexityReduction(5, 1, 1));
```
- O(n) Using Iterators in JS
```javascript
function* genFb(n) {
    let current = 0, next = 1, sum;
    yield current;
    for (let i = 0; i < n; i++) {
        sum = current + next;
        current = next;
        next = sum;
        yield current;
        // console.log(`sum : ${sum} current : ${current} next : ${next} `);
    }
}
let fibonacciGenratorPointer = genFb(7);
console.log(...fibonacciGenratorPointer);
```
#### Combination Fomula
- nCr = n!/(n-r)! r! or nCk =  n!/(n-k)! k! 
- 3C1 Or nCr   = 3 or n
- 1C1 or 1C2 or nCk = 1 **n<=1 return 1**
- 3C0 or nc0 = 1 or 1 **k-->0 return 1**
- 3C3 or nCk = 1 or 1 **n==k return 1**
- **Below is expression we can get from above**
- C(n,k) ==> C(n-1,k-1) + C(n-1,k)
- Students example
-  #######(n places) $(k place)
-  - step 1: (n-1) & (k-1) both are getting reduce
-  - step 2: step (n-1) & (k) 
-  BrutForce Approach
```javascript
const factorial = (n) => {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}
const C = (n, k) => {
	// nCk = n!/(n-k)!*k!
	return factorial(n) / (factorial(n - k) * factorial(k));
}
console.log(C(4,2));//6
```
- OPtimized Code (Decrese & Conquer stratergy)
- Draw a pascal traingle Leverl 0 --> `0C1` n<k or `n<=1` return 1
![Pascal Traingle](https://camo.githubusercontent.com/bcde82b129f24cf2235838eb7c335c85dd7ab338185d8f5a1101a245b58687b0/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30642f50617363616c547269616e676c65416e696d61746564322e676966)
```javascript
const C = (n, k) => {
	if (n == k || k === 0 || n <= 1) return 1;
	return C(n - 1, k - 1) + C(n - 1, k);
}
console.log(C(4, 2)); //6
```


#### Tower Of Hanoi - Need to disscuss with tutor
- 	if (height >= 1) 
-  time Complexity	O(2^n)
```javascript
const towerOfHoni = (height, source, destination, buffer) => {
	if (height >= 1) {
		// Move a tower of height-1 to the buffer peg, using the destination peg.
		towerOfHoni(height - 1, source, buffer, destination);
		// Move the remaining disk to the destination peg.
		console.log('Move disk from Tower ', source, ' to Tower ', destination);
		// Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
		towerOfHoni(height - 1, buffer, destination, source);
	}
	return;
}

towerOfHoni(3, "A", "C", "B");
```
#### Binary Search tree
- Tushar Solution Need optimization
```javascript
const allPossibleBinaryString = (n, postion = 0, s = '') => {
	if (postion >= n) {
		console.log(s);
		return;
	}
	if (postion < n) {
		allPossibleBinaryString(n, postion + 1, `${s}0`);
		allPossibleBinaryString(n, postion + 1, `${s}1`);
	}
}
console.log(allPossibleBinaryString(3));// 000,001,010,111....
```
 - Repetation allowed (2^n(n))
 - Space O(2^n) BFS Best Solution
```javascript
const numberToBinaryString =(n)=>{
	if(n===1) return ['0','1'];
	if(n>1){
		let prev = numberToBinaryString(n-1);
		let result = [];
		for(let s of prev){
			result.push(`${s}0`);
			result.push(`${s}1`);
		}
		return result;
	}
}

console.log(numberToBinaryString(3));//000,001,010
```
- Iterative approach *BFS * Best Solution
```javascript
let result = [];
const numberToBinaryString = (n) => {
	result = ['0', '1'];
	for (let i = 2; i < n; i++) {
		let newResult = [];
		for (let s of result) {
			newResult.push(`${s}0`);
			newResult.push(`${s}1`);
		}
		result = newResult;
	}
	return result;
}
console.log(numberToBinaryString(4));
```
- Tushar solution, working as expected but it's anti-pattern.
```javascript
const numberToBinaryString = (n, combination = [], result = []) => {
	if (combination.length >= n) result.push(combination.slice());
	else if (combination.length < n) {
		combination.push('0');
		numberToBinaryString(n, combination, result);
		combination.pop();
		combination.push('1');
		numberToBinaryString(n, combination, result);
		combination.pop();
	}
	return result;
}
console.log(numberToBinaryString(3)); //000,010,011,111....
```
- Optimized solution - DFS Solution - Merge sort Divide & Conquer
-  Space O(n) or (Log(2^n))
- Time O(2^n);
```javascript
const numberToBinaryString = (n,slate='',result=[])=>{
	if(n==0) result.push(slate);
	else{
		numberToBinaryString(n-1,`${slate}0`,result); // left tree
		numberToBinaryString(n-1,`${slate}1`,result); // right tree
	}
	return result;
}
console.log(numberToBinaryString(4));
```
- All Combination form 0 to 9
```javascript
const numberToBinaryString = (n, slate = '', result = []) => {
	if (n == 0) result.push(slate);
	else {
		for (let i = 0; i < 10; i++) {
			numberToBinaryString(n - 1, `${slate}${i}`, result);
		}
	}
	return result;
}

console.log(numberToBinaryString(4));
```

#### Repetation not allowed

```javascript
const letterCasePermutation = (s, prefix = '', suffix = s,preocess='') => {
	if (preocess.length === 1) {
		console.log(prefix.toUpperCase() + suffix);
		console.log(prefix + suffix.toUpperCase());
		return;
	}
	for (let i = 0; i < s.length; i++) {
		let prefix = s.substring(0, i);
		let suffix = s.substring(i + 1);
		if (!isNaN(s[i])) {
			letterCasePermutation(s, prefix, suffix,s[i]);
		}
	}
	return;
}
// letterCasePermutation('a12b3');
letterCasePermutation('a12b3c4');
/*
A2b3c4
a2B3C4
A1b3c4
a1B3C4
A12Bc4
a12bC4
A12B3C
a12b3c
*/
```
- Kick Start Question
```javascript
const letterCasePermutation = (input, position = -1, slate = input, result = []) => {
	if (position >= input.length) {
		result.push(slate);
	} else {
		let char = input.charAt(position);
		if (!isNaN(char)) {
			
			slate[position] = char.toUpperCase();
			letterCasePermutation(input, position + 1, slate, result);
			slate[position] = char.toLowerCase();
			letterCasePermutation(input, position + 1, slate, result);
		} else {
			// console.log(`converter not called`);
			slate[position] = char;
			letterCasePermutation(input, position + 1, slate, result);
		}
	}
	return result;
}
console.log(letterCasePermutation('a12b3'));
```
- All Sets
```javascript 
const allSets = (input, position = 0, slate = [], result = []) => {
	if (position >= input.length) {
		result.push(slate.slice());
	} else {
		let el = input[position];
		slate.push(el);
		allSets(input, position + 1, slate, result);
		slate.pop();
		allSets(input, position + 1, slate, result);
	}
	return result;
}
console.log(allSets([1,2,3]));
/*[
  [ 1, 2, 3 ], [ 1, 2 ],
  [ 1, 3 ],    [ 1 ],
  [ 2, 3 ],    [ 2 ],
  [ 3 ],       []
]*/

```
#### Repetation allowed

```javascript
const allSets = (input, position = 0, slate = [], result = []) => {
	if (position >= input.length) {
		result.push(slate.slice());
	} else {
		let el = input[position];
		slate.push(el);
		allSets(input, position + 1, slate, result);
		if (slate.pop() != input[position + 1])  //Check with next number 
			allSets(input, position + 1, slate, result);
	}
	return result;
}
console.log(allSets([1, 2, 2])); //[ [ 1, 2, 2 ], [ 1, 2 ], [ 2, 2 ], [ 2 ] ] No repetion
console.log(allSets([1, 2, 1])); //[ [ 1, 2, 1 ], [ 1, 2 ], [ 1, 1 ], [ 1 ],[ 2, 1 ], [ 2 ],[ 1 ],[]] // repetition is allowed.
console.log(allSets([1, 1, 2]));// Just Sort abve array [ [ 1, 1, 2 ], [ 1, 1 ], [ 1, 2 ], [ 1 ] ]

```

#### Backtrack all Sets of Numbers
- Want to know Pattern for this. Tushar Solution for iterating through al elements
```javascript
 let result = [];
 const printAllSubSets = (a, slate = [], index = 0) => {
 	result.push(slate.slice());
 	for (let i = index; i < a.length; i++) {
 		// include the A[i] in subset. 
 		slate.push(a[i]);
 		// move onto the next element. 
 		printAllSubSets(a, slate, i + 1);
 		// exclude the A[i] from subset and triggers 
 		// backtracking. 
 		slate.pop();
 	}
 	return result;

 }
 console.log(printAllSubSets([1, 2, 3]));
 // [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
```
### All Permucations
 - Swap needed [1, 2, 3] `Time O(N!*N) Space O(N!N)`
 - OP :
 `[
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 2, 1 ],
  [ 3, 1, 2 ]
]`
```javascript
const allSets = (input, position = 0, slate = input, result = []) => {
	if (position >= input.length) {
		result.push(slate.slice());
	} else {
		let newIndex = position;
		for (let i = newIndex; i < input.length; i++) {
			[slate[i], slate[newIndex]] = [slate[newIndex], slate[i]]; // All Sets Need a Swap
			allSets(input, position + 1, slate, result);
			[slate[i], slate[newIndex]] = [slate[newIndex], slate[i]];
		}
	}
	return result;
}
console.log(allSets([1, 2, 3]));
```
#### Backtracking

```javascript 
/*
* This Solution Only work with positive integres 
*/
const sumUpToTarget = (a, k, slate = [], sum = 0, result = [], position = 0) => {
	if (sum > k) return;
	if (position >= a.length) {
		if (sum === k)
			result.push(slate.slice());
	} else {
		sum += a[position];
		slate.push(a[position]);
		if (sum <= k)
			sumUpToTarget(a, k, slate, sum, result, position + 1);
		sum -= slate.pop();
		if (sum >= 0)
			sumUpToTarget(a, k, slate, sum, result, position + 1);
	}

	return result;
}
console.log(sumUpToTarget([4,5,2], 6));
//[ [ 4, 2 ] ]

```
```javascript
const wellSortedBrackets = (n, slate = '', left, right, result = []) => {
	// console.log(`n: ${n} slate: ${slate} left: ${left} right: ${right} result: ${result}`);
	if (left > right || left < 0 || right < 0) return;
	if (left === 0 && right === 0) {
		// console.log(slate);
		return result.push(slate);
	}
	wellSortedBrackets(n, slate + '(', left - 1, right, result);
	wellSortedBrackets(n, slate + ')', left, right - 1, result);
	return result;
}
console.log(wellSortedBrackets(3, '', 3, 3, [])); //[ '((()))', '(()())', '(())()', '()(())', '()()()' ]
```

##### N Queen Problem

```javascript
const isSafe = (mat, r, c) => {

	// return 0 if two queens share the same column
	for (let i = 0; i < r; i++) {
		if (mat[i][c] == 'Q') {
			return 0;
		}
	}

	// return 0 if two queens share the same `` diagonal
	for (let i = r, j = c; i >= 0 && j >= 0; i--, j--) {
		if (mat[i][j] == 'Q') {
			return 0;
		}
	}

	// return 0 if two queens share the same `/` diagonal
	for (let i = r, j = c; i >= 0 && j < mat[0].length; i--, j++) {
		if (mat[i][j] == 'Q') {
			return 0;
		}
	}

	return 1;
}
const grid = new Array(4).fill('-');
grid.map((x, i) => {
	grid[i] = new Array(4).fill('-');
});
let i =0;
const NQueenProblem = (mat, r) => {
	// console.log(r);
	i++;
	console.log(mat);
	if (r == mat[0].length) {
		console.log(mat);
		console.log(i);
		return;
	}
	// place queen at every square in the current row `r`
	// and recur for each valid movement
	for (let i = 0; i < mat[0].length; i++) {
		// if no two queens threaten each other
		if (isSafe(mat, r, i)) {
			// place queen on the current square
			mat[r][i] = 'Q';
			// recur for the next row
			NQueenProblem(mat, r + 1);
			// backtrack and remove the queen from the current square
			mat[r][i] = '-';
		}
	}
}
NQueenProblem(grid, 0);
```
#### Expressions for all compbination
- Tushar Solution
```javascript
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = (num, target) => {
    var res = [];
   return compute(num, "", 0, 0);

    function compute(nums, exp, val, back) {
        if (nums === "" && val === target) {
            console.warn(`nums : ${nums}  exp: ${exp} val: ${val} back: ${back}`);
            res.push(exp);
            return;
        } else {
            for (var i = 0; i < nums.length; i++) {
                var head = nums.substring(0, i);
                var tail = nums.substring(i, nums.length);
                var curr = parseInt(head) || 0;
                if (exp === "") {
                    compute(tail, head, curr, curr);
                }
                else {
                    compute(tail, exp + "+" + head, val + curr, curr);
                    compute(tail, exp + "-" + head, val - curr, -1 * curr);
                    compute(tail, exp + "*" + head, val - back + back * curr, back * curr);
                }
            }

        }
       return res;
    }
};


console.info(addOperators("1234", 11)); //[ '1+2*3+4', '1-2+3*4', '12+3-4' ]

```
#### Count No. Of BST

- `i<=n` 
     - Recursive
```javascript
const bstCountRecursion = (n, slate = [], numAllPossibleBSTs = 0) => {
	if (n === 1 || n === 0) return 1;
	else {
		for (let i = 1; i <= n; i++) {
			if (!slate[i - 1])
				slate[i - 1] = bstCountRecursion(i - 1, slate, numAllPossibleBSTs);

			if (!slate[n - i])
				slate[n - i] = bstCountRecursion(n - i, slate, numAllPossibleBSTs);

			numAllPossibleBSTs += slate[i - 1] * slate[n - i];
		}

	}
	console.log(slate);
	return numAllPossibleBSTs;
}
console.log(bstCountRecursion(3));
```
 - Iterative
```javascript
function how_many_BSTs(n) {
	let result = new Array(n + 1).fill(1);
	if (n < 2) return 1;
	for (let i = 2; i < n; i++) {
		result[i] = 0;
		for (let j = 0; j < i; j++) {
			let debug  = result[j] * result[i - j + 1];
			// console.log(`debug: ${debug}`);
			result[i] += debug;
		}
	}
	// console.log(result);
	return result[n - 1];
}


console.log(how_many_BSTs(2));
```
#### Check Sum is Possible

```javascript
function check_if_sum_possible(arr, k) {
	const helper = (a, target, n = a.length, position = 0, sum = 0, size = 0) => {
		if (target === sum) {
			if (size > 0) return true;
		}
		if (position === n) return false;
		return helper(a, target, n, position + 1, sum, size) || helper(a, target, n, position + 1, sum + a[position], size + 1);
	}
	return helper(arr, k);
}
console.log(check_if_sum_possible([2,4,8],6));
```

#### Number Of Ways

```javascript
let result = 0;
// let values = map.values(); // 1,26
var numDecodings = function (s, position = 0) {
	let char = s[position];
	if (char == '0') return 0;
	if (position >= s.length) return 1;
	switch (char) {
		case '1':
			if (s[position + 1] == '0')
				return numDecodings(s, position + 1);
			else
				return numDecodings(s, position + 1) + numDecodings(s, position + 2);
		case '2':
			if (s[position + 1] > 6)
				return numDecodings(s, position + 1);
			else
				return numDecodings(s, position + 1) + numDecodings(s, position + 2);
		default:
			return numDecodings(s, position + 1);
	}

};
// console.log(numDecodings('226'));
console.log(numDecodings('212'));
// console.log(numDecodings('226'));
```