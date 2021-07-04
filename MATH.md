### Expression

Airthmatic Serries

- Traingle Series
  {1, 3, 6, 10, 15, 21, 28, 36, 45, ...} : x(n) = `n(n+1)/2`
- Squre Series
  {1, 4, 9, 16, 25, 36, 49, 64, 81, ...}: x(n) = `n^2`
- Cube Series
  {1, 8, 27, 64, 125, 216, 343, 512, 729, ...}: x(n) = `n^3`
- Fibonacci Series
  {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...}: x(n) = `x(n-1)+x(n-1)`
- Alternating Series
  {0, 1, 0, 1, 0, 1, ...}: x(n) = `n%2`
- Diffrence Series
  {1, 4, 7, 10, 13, 16, 19, 22, 25, }: x(n) = `a + d(n−1)` a is first term
- Exponetial Series
  {0,1,2,4,8,16}: x(n) = `2^n`
- Harmonic Series:
  {1/1,1/2,1/3,1/4,}
- Pascal's Triangle:
  {1,11,121,1331} : x(n) = `11^n`
- Binomial Expansion
  {(x+1)^2,(x+1)^3,(x+1)^4,(x+1)^n} i.e. {121,1331,...} : x(n) = `11^n`
- Hormoinic Series
  {1/2,3/2,5/2}: x(n) = `1/a + d(n−1)`

#### Advanced Topic:

- Summing an Arithmetic Series

To sum up the terms of this arithmetic sequence:

a + (a+d) + (a+2d) + (a+3d) + ...

Example: Add up the first 10 terms of the arithmetic sequence:
{ 1, 4, 7, 10, 13, ... }

First, we will call the whole sum "S":

S = a + (a + d) + ... + (a + (n−2)d) + (a + (n−1)d)
Next, rewrite S in reverse order:

S = (a + (n−1)d) + (a + (n−2)d) + ... + (a + d) + a
Now add those two, term by term:

S = a + (a+d) + ... + (a + (n-2)d) + (a + (n-1)d)
S = (a + (n-1)d) + (a + (n-2)d) + ... + (a + d) + a
2S = (2a + (n-1)d) + (2a + (n-1)d) + ... + (2a + (n-1)d) + (2a + (n-1)d)
Each term is the same! And there are "n" of them so ...

2S = n × (2a + (n−1)d)
Now, just divide by 2 and we get:

S = (n/2) × (2a + (n−1)d)

- `1/1,1/2,1/3,1/4,......,1/n` :

- **Note** - Ө(n^2) = O(n^2) & O(n^2) != Ө(n^2)
  If the running time of an algorithm is Ө(n), that means it roughly runs in time cn for some constant c. If the running time of an algorithm is O(n), that means it runs in time at most c’n for some constant c’. This means if T(n) = Ө(n^2), then T(n) is also O(n^2). - 2log2n is (assuming log has a base of 2) : n - log2(2^h) : h

### Problems Topics

1. Liner Time Intervals
2. Cycle Sort
3. Decrese & Conquer
4. Prefix Sum

- 759. Employee Free Time

```javascript
/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  let start = [];
  let end = [];
  for (let employee of schedule) {
    for (let interval of employee) {
      start.push(interval.start);
      end.push(interval.end);
    }
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let preEnd = Infinity;
  let freeTime = [];
  for (let i = 0; i < start.length; i++) {
    if (start[i] > preEnd) {
      freeTime.push(new Interval(preEnd, start[i]));
    }
    preEnd = end[i];
  }
  return freeTime;
};
```

- 56. Merge Intervals

```javascript
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (let i of intervals.sort((a, b) => a[0] - b[0])) {
    // Sort the intervals
    if (i[0] <= res?.[res.length - 1]?.[1])
      // We have an overlap (start of current is less than or equal to merged's end)
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], i[1]);
    // Update the end of our merged interval with current's end
    else res.push(i); // No overlap, push current interval
  }
  return res;
};
```

- Genrate Spelling from Word.

```javascript
var TEN = 10;
var ONE_HUNDRED = 10 ** 2;
var ONE_THOUSAND = 10 ** 3;
var ONE_MILLION = 10 ** 6;
var ONE_BILLION = 10 ** 9; //         1.000.000.000 (9)
var ONE_TRILLION = 10 ** 12; //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 10 ** 15; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992; // 9.007.199.254.740.992 (15)
var LESS_THAN_TWENTY = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

var TENTHS_LESS_THAN_HUNDRED = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
function generateWords(number, secondArgument) {
  var remainder,
    word,
    words = secondArgument; //arguments[1];

  // We’re done
  if (number === 0) {
    return !words ? "zero" : words.join(" ").replace(/,$/, "");
  }
  // First run
  if (!words) {
    words = [];
  }
  // If negative, prepend “minus”
  if (number < 0) {
    words.push("minus");
    number = Math.abs(number);
  }

  if (number < 20) {
    remainder = 0;
    word = LESS_THAN_TWENTY[number];
  } else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
    // In case of remainder, we need to handle it here to be able to add the “-”
    if (remainder) {
      word += "-" + LESS_THAN_TWENTY[remainder];
      remainder = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = generateWords(Math.floor(number / ONE_HUNDRED)) + " hundred";
  } else if (number < ONE_MILLION) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + " thousand,";
  } else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = generateWords(Math.floor(number / ONE_MILLION)) + " million,";
  } else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + " billion,";
  } else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + " trillion,";
  } else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word =
      generateWords(Math.floor(number / ONE_QUADRILLION)) + " quadrillion,";
  }

  words.push(word);
  return generateWords(remainder, words);
}
console.log(generateWords(102));
```

- 12. Integer to Roman

```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
  };
  let res = "";
  let quotient = 0;
  let divisors = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let divisor = divisors.pop();
  while (num > 0) {
    if (num >= divisor) {
      quotient = Math.floor(num / divisor);
      num = num % divisor;
      res += map[divisor].repeat(quotient);
    } else {
      divisor = divisors.pop();
    }
  }
  return res;
  // T.C: O(1)
  // S.C: O(1)
};
```

- 13. Roman to Integer

```javascript
var romanToInt = function (s) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let n = s.length;
  sum += map[s[n - 1]];
  for (let i = 0; i < n - 1; i++) {
    let next = s[i + 1];
    if (map[next] > map[s[i]]) {
      sum -= map[s[i]];
    } else sum = sum + map[s[i]];
  }
  return sum;
};
```

- 1359. Count All Valid Pickup and Delivery Options

Given n orders, each order consist in pickup and delivery services.Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i).Since the answer may be too large, return it modulo 10^9 + 7.

Example 1:
Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
Example 2:
Input: n = 2
Output: 6
Explanation: All possible orders:
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.

First, we will call the whole sum "S":
S = a + (a + d) + ... + (a + (n−2)d) + (a + (n−1)d)
Next, rewrite S in reverse order:
S = (a + (n−1)d) + (a + (n−2)d) + ... + (a + d) + a
Now add those two, term by term:
S = a + (a+d) + ... + (a + (n-2)d) + (a + (n-1)d)
S = (a + (n-1)d) + (a + (n-2)d) + ... + (a + d) + a
2S = (2a + (n-1)d) + (2a + (n-1)d) + ... + (2a + (n-1)d) + (2a + (n-1)d)
Each term is the same! And there are "n" of them so ...
2S = n × (2a + (n−1)d)
Now, just divide by 2 and we get:
S = (n/2) × (2a + (n−1)d)
Or
S= (2n-1),(2n-2),....,1
S= 1,2,........(2n-2),(2n-1)
add the :
2S = (2n-1)*2n
S = (2n-1)*n

f(n) = f(n-1)\*n(2n-1)
f(n) -> Total number of ways pickup & delivery times.

```javascript
var countOrders = function (n) {
  let f = 1;
  for (let i = 2; i <= n; i++) {
    f = (f * i * (2 * i - 1)) % (10 ** 9 + 7);
  }
  return f;
};
```

- 829. Consecutive Numbers Sum

s = a+(a+1)+(a+2)+(a+3)+.....+ (a+k-1)
s = (a+k-1)+(a+k-2)+.....+1
add
2s= (2a+k-1)*k
s= (((2a+k-1)*k)/2)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (N) {
  let count = 1;
  for (let a = 2; a < Math.sqrt(2 * N); a++) {
    if ((N - [(a + 1) * a] / 2) % a === 0) {
      count++;
    }
  }
  return count;
};
```

- 268. Missing Number

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
// Cycle Sort
var missingNumber = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    while (nums[i] != i) {
      let index = nums[i];
      if (index <= n) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
      } else {
        break;
      }
    }
  }
  // console.log(nums);
  for (let i = 0; i <= n; i++) {
    if (nums[i] != i) return i;
  }
  return n;
};
var missingNumber = function (nums) {
  let xOr = nums.length;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    xOr ^= i ^ nums[i];
  }
  return xOr;
};
var missingNumber = function (nums) {
  let maxSum = nums.length;
  let expectedSum = Math.floor(maxSum * ((maxSum + 1) / 2));
  let actualSum = 0;
  for (let num of nums) actualSum += num;
  return expectedSum - actualSum;
};
```

- 442. Find All Duplicates in an Array

```javascript
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    while (nums[i] != i + 1) {
      let index = nums[i] - 1;
      if (index <= n && nums[index] != nums[i]) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
      } else {
        break;
      }
    }
  }
  console.log(nums);
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (nums[i] != i + 1) result.push(i + 1);
  }
  return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
```

- 41. First Missing Positive

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] != i + 1) {
      let index = nums[i] - 1;
      if (index < n && nums[index] != nums[i] && nums[i] > 0) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
      } else {
        break;
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return n;
};
```

- 969. Pancake Sorting

```javascript
var pancakeSort = function (arr) {
  var result = [];
  var key = arr.length; //index of the unsorted leading number
  while (key > 0) {
    while (arr[key - 1] !== key) {
      //whether there is a sorted leading number in leading position or not.
      let index = arr.indexOf(key); //if not, starting to sort
      if (index == 0) {
        arr = arr.slice(0, key).reverse().concat(arr.slice(key));
        result.push(key);
      } else {
        arr = arr
          .slice(0, index + 1)
          .reverse()
          .concat(arr.slice(index + 1));
        result.push(index + 1);
      }
    }
    key--; //if there is, check the next small number
  }
  return result;
};
```

- 277. Find the Celebrity

```javascript
/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */

  return function (n) {
    let candidate = 0;
    // rule out n-1 people
    for (let i = 0; i < n; i++) {
      if (candidate == i) continue;
      if (knows(candidate, i)) {
        candidate = i;
      }
    }

    // check if this candidate is the celebrity
    for (let i = 0; i < n; i++) {
      if (candidate == i) continue;
      if (knows(candidate, i) || !knows(i, candidate)) {
        return -1;
      }
    }
    return candidate;
  };
};
```

- 221. Maximal Square

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let table = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    table[i] = new Array(n).fill(0);
  }
  let globalMax = 0;
  for (let row = 0; row < m; row++) {
    if (matrix[row][0] == "1") {
      table[row][0] = 1;
      globalMax = 1;
    }
  }
  for (let col = 0; col < n; col++) {
    if (matrix[0][col] == "1") {
      table[0][col] = 1;
      globalMax = 1;
    }
  }
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (matrix[r][c] == "1") {
        table[r][c] =
          Math.min(table[r - 1][c - 1], table[r][c - 1], table[r - 1][c]) + 1;
        globalMax = Math.max(globalMax, table[r][c]);
      }
    }
  }
  return globalMax * globalMax;
};
```

- 1480. Running Sum of 1d Array

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let n = nums.length;
  let prefixSum = new Array(n).fill(0);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }
  return prefixSum;
};
var runningSum = function (nums) {
  let sum = nums[0];
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};
```

- 303. Range Sum Query - Immutable

```javascript
var NumArray = function (nums) {
  let n = nums.length;
  this.prefixSum = new Array(n).fill(0);
  let sum = 0;
  nums.map((x, i) => {
    sum += nums[i];
    this.prefixSum[i] = sum;
  });
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) return this.prefixSum[right];
  return this.prefixSum[right] - this.prefixSum[left - 1];
};
```

- 560. Subarray Sum Equals K

```javascript
var subarraySum = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let m = new Map(),
    prefixSum = 0,
    count = 0;
  // there could be a subarray[0...j] with a sum of k
  m.set(prefixSum, 1);
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (m.has(prefixSum - k)) {
      count += m.get(prefixSum - k);
    }
    m.set(prefixSum, m.get(prefixSum) + 1 || 1);
  }
  return count;
  // T.C: O(N)
  // S.C: O(N)
};
```

- 974. Subarray Sums Divisible by K

```javascript
var subarraysDivByK = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let prefixSum = 0,
    m = new Map(),
    count = 0;
  m.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    prefixSum = (prefixSum + nums[i]) % k;
    if (prefixSum < 0) prefixSum += k;
    if (m.has(prefixSum)) count += m.get(prefixSum);
    m.set(prefixSum, m.get(prefixSum) + 1 || 1);
  }
  //  console.log(m);
  return count;
  // T.C: O(N)
  // S.C: O(N)
};
```

- 1524. Number of Sub-arrays With Odd Sum

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const map = {};
  map["even"] = 0;
  map["odd"] = 0;
  let n = arr.length;
  let prefixSum = 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    prefixSum = prefixSum + arr[i];
    if (prefixSum % 2 == 1) {
      total += map["odd"];
    } else {
      total += map["even"];
    }
    total = total % (10 ** 9 + 7);
    if (prefixSum % 2 == 0) {
      map["even"] = map["even"] + 1;
    } else {
      map["odd"] = map["odd"] + 1;
    }
  }
  // console.log(map);
  return (map["odd"] * map["even"] + map["odd"]) % (10 ** 9 + 7);
};
```

- 525. Contiguous Array

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = new Map();
  let n = nums.length;
  let sum = 0;
  let longest = 0;
  for (let i = 0; i < n; i++) {
    let num = nums[i] === 0 ? -1 : 1;
    sum += num;
    if (sum == 0) {
      longest = Math.max(longest, i + 1);
    } else if (map.has(sum)) {
      longest = Math.max(longest, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return longest;
};
```

- 523. Continuous Subarray Sum

```javascript
var checkSubarraySum = function (nums, k) {
  let m = new Map();
  let cumSum = 0;
  for (let i = 0; i < nums.length; i++) {
    cumSum += nums[i];
    if (cumSum % k === 0 || cumSum === 0) {
      if (i + 1 >= 2) {
        return true;
      }
    }
    if (m.has(cumSum % k)) {
      let subarrLen = i - (m.get(cumSum % k) + 1) + 1;
      if (subarrLen >= 2) {
        return true;
      }
    } else {
      m.set(cumSum % k, i);
    }
  }
  return false;
  // T.C: O(N)
  // S.C: O(N)
};
var checkSubarraySum = function (nums, k) {
  let prefixSum = nums[0];
  let n = nums.length;
  const map = new Set();
  map.add(0);
  for (let i = 1; i < n; i++) {
    prefixSum = (prefixSum + nums[i]) % k;
    if (map.has(prefixSum)) return true;
    else map.add(prefixSum);
  }
  return true;
};
```
