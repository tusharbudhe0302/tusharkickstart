// We are given two strings, A and B.
// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. 
// For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A === B) return true;
    let currentString = A;
    for (let i = 0; i < currentString.length; i++) {
        let firstPart = currentString.substring(i, 0)
        let lastPart = currentString.substring(i, currentString.length);
        if (lastPart + firstPart === B) {
            console.log(`condition matched!`);
            return true;
        }
        console.log(`firstPart : ${firstPart} lastPart : ${lastPart}  Combiedd : ${lastPart + firstPart} Excepted OP: ${B}`);
    }
    return false;
};

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:
// Input: [3,2,3]
// Output: [3]

// Example 2:
// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    console.log(`IP : ${nums}`);
    var hash = {};
    let result = [];
    let k = 3;
    let minumumExpected = nums.length / k;
    console.log(`minumumExpected : ${Math.round(minumumExpected)}`);
    for (let i = 0; i < nums.length; i++) {
        if (!hash.hasOwnProperty(nums[i])) {
            hash[nums[i]] = nums.filter(x => x == nums[i]).length
        }
    }
    const keys = Object.keys(hash);
    for (const key of keys) {
        console.log(`key : ${key} value : ${hash[key]}`);
        if (hash[key] == minumumExpected) {
            result.push(key);
        }
    }
    // return result;
    console.log(`Result : ${result}`);
};
majorityElement([1]);
majorityElement([1, 2]);
majorityElement([1, 1, 1, 3, 3, 2, 2, 2]);
majorityElement([3, 2, 3]);