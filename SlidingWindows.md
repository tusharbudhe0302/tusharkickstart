### Sliding Windows TYpes

- Fixed length Sliding Window
- Value length Sliding Window

- 346. Moving Average from Data Stream

```javascript
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.maxSize = size;
  this.items = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.items.length < this.maxSize) {
    this.items.push(val);
  } else {
    this.items.shift();
    this.items.push(val);
  }
  let sum = this.items.reduce((prev, curr) => {
    return prev + curr;
  });
  return sum / this.items.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
```

- 643. Maximum Average Subarray I

```javascript
var findMaxAverage = function (nums, k) {
  let sum = [0],
    res = Number.NEGATIVE_INFINITY;
  for (i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  for (i = k; i <= nums.length; i++) {
    res = Math.max(res, (sum[i] - sum[i - k]) / k);
  }
  // console.log(sum);
  return res;
};
/**Sliding Window*/
var findMaxAverage = function (nums, k) {
  let currSum = nums.slice(0, k).reduce((r, n) => r + n, 0);
  let bestSum = currSum;
  for (let i = 1; i < nums.length - k + 1; i++) {
    currSum = currSum - nums[i - 1] + nums[i + k - 1];
    bestSum = Math.max(bestSum, currSum);
  }
  return bestSum / k;
};
```

- 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = (arr, k, threshold) => {
  let start = 0;
  let end = 0;
  let sum = 0;
  let result = 0;
  while (end < k) {
    sum += arr[end++];
  }
  if (sum / k >= threshold) result++;
  let n = arr.length;
  while (end < n) {
    sum = sum - arr[start++] + arr[end++];
    let average = sum / k;
    if (average >= threshold) result++;
  }
  return result;
};
```

- 1176. Diet Plan Performance

```javascript
/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let points = 0;
  while (end < k) {
    sum += calories[end++];
  }
  if (sum > upper) {
    points++;
  }
  if (sum < lower) {
    points--;
  }
  let n = calories.length;
  while (end < n) {
    sum = sum + calories[end++] - calories[start++];
    if (sum > upper) {
      points++;
    }
    if (sum < lower) {
      points--;
    }
  }
  return points;
};
```

- 1052. Grumpy Bookstore Owner

```javascript
var maxSatisfied = function(customers, grumpy, X) {
  // if can be NOT grumpy for all time, return all customers
  if (X >= customers.length) {
    return customers.reduce((a, b) => a + b, 0);
  }
  // collect customers as if the owner does not know the secret
  let ans = 0;
  for (let i = 0; i < customers.length; i++) {
    ans += grumpy[i] ? 0 : customers[i];
  }
  // get first window, in the window, collect original grumpy
  for (let i = 0; i < X; i++) {
    ans += grumpy[i] ? customers[i] : 0;
  }
  let mx = ans;
  // slide the window
  for (let i = 1; i <= customers.length - X; i++) {
    // remove customer moved out of window
    ans -= grumpy[i-1] ? customers[i-1] : 0;
    // add new customers moved inside of window
    ans += grumpy[i+X-1] ? customers[i+X-1] : 0;
    mx = Math.max(mx, ans);
  }
  
  return mx;
};
```