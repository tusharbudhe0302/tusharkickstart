// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
var twoSum = function (nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var newTarget = target - nums[i];
        console.log('Target : ' + target + ' --> Index : ' + i);
        var j = nums.lastIndexOf(newTarget)
        console.log('New target : ' + newTarget + '--> Index : ' + j);
        if (j > -1 && j != i) {
            result.push(i, j);
            return result;
        }
    }
};
// var result = twoSum([2, 7, 11, 15], 9);
var result = twoSum([3, 2, 4], 6);
console.log('Result : ');
console.log(JSON.stringify(result));