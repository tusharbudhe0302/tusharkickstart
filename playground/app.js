/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
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
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));

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
        prefixSum = prefixSum + nums[i];
        if (m.has(prefixSum - k)) {
            count += m.get(prefixSum - k);
        }
        m.set(prefixSum, m.get(prefixSum) + 1 || 1);
    }
    return count;
    // T.C: O(N)
    // S.C: O(N)
};
// console.log([4, 5, 0, -2, -3, 1], 5);