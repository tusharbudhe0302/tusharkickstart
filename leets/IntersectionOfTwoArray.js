/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var result = [];
    for (var i = 0; i < nums2.length; i++) {
        if (nums1.indexOf(nums2[i]) >= 0) {
            if (result.indexOf(nums2[i]) < 0)
                result.push(nums2[i]);
        }
    }
    return result;
};
// var sampleArray = [1, 2, 2, 1];
// sampleArray.reverse();
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([1, 4, 9, 7], [9, 4]));

