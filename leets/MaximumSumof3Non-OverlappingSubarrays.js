// In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.

// Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.

// Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.

// Example:

// Input: [1,2,1,2,6,7,5,1], 2
// Output: [0, 3, 5]
// Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
// We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSumOfThreeSubarrays = function (nums, k) {
    if (nums.length < 3 * k && k <= 0)
        return [-1, -1, -1];
    let n = nums.length;
    let c = 0, b = 0, a = 0;
    let sum_c = sum_b = sum_a = 0;
    let max_c = max_bc = max_abc = 0;
    c = n - k;
    b = c - k;
    a = b - k;
    var sum = function (items, start, end) {
        let newSum = 0;
        for (i = start; i < end; i++) {
            newSum += items[i];
        }
        return newSum;
    }
    sum_c = sum(nums, c, c + k);
    sum_b = sum(nums, b, b + k);
    sum_a = sum(nums, a, a + k);
    max_c = sum_c;
    max_bc = sum_b + max_c;
    max_abc = sum_a + max_bc;
    windows_c = new Array([c]);
    windows_bc = new Array([b, c]);
    windows_abc = new Array([a, b, c]);
    while (a > 0) {
        c -= 1;
        b -= 1;
        a -= 1;
        sum_c += nums[c] - nums[c + k];
        sum_b += nums[b] - nums[b + k];
        sum_a += nums[a] - nums[a + k];
        if (max_c < sum_c) {
            max_c = sum_c;
            windows_c = new Array([c]);
        }
        if (max_bc < sum_b + max_c) {
            max_bc = sum_b + max_c;
            windows_bc = new Array([b, windows_c]);
        }
        if (max_abc < sum_a + max_bc) {
            max_abc = sum_a + max_bc;
            windows_abc = new Array([c, windows_bc]);
        }
    }
    console.log(windows_c, windows_bc, windows_abc);
    return [];
}


maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2);
// maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 2, 1], 2);
// [1, 2, 1].lastIndexOf(1);