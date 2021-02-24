/**
 * Given an array nums of n integers where n > 1,  return an array output
 * such that output[i] is equal to the product of all the elements of nums
 * except nums[i].
 *
 * Example:
 * 
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6] = [2*3*4, 1*3*4, 1*2*4, 1*2*3]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [1,2,3,4]
//result 1 [1,2,6,24] = [1, 1*2, 1*2*3, 1*2*3*4]   = [1,       1*2  , 1*2*3, 1*2*3*4]
//result 2 [4,12,24,24] = [4, 4*3, 4*3*2, 4*3*2*1] = [1*2*3*4, 2*3*4, 3*4,   4]
// [24,12,8,6]
var productExceptSelf = function (nums) {

    let result1 = [];
    let result2 = [];
    result1.push(nums[0]);
    result2.push(nums[nums.length - 1]);

    for (let i = 1; i < nums.length; i++) {
        let lastIndexNumber = result1.length - 1;
        let leftToRight = nums[i] * result1[lastIndexNumber];
        result1.push(leftToRight)

    }
    for (let i = (nums.length - 2); i >= 0; i--) {
        let lastIndexNumber = result2.length - 1;
        let rightToLeft = nums[i] * result2[lastIndexNumber];
        result2.push(rightToLeft)

    }
    // [24,12,8,6]
    let out = [];

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            out.push(result2[nums.length - 2]);
        }
        else if (i == nums.length - 1) {
            out.push(result1[nums.length - 2]);
        }
        else {
            out.push(result1[i - 1] * result2[nums.length - (i + 2)])
        }
    }

    console.log('result1 ' + result1);
    console.log('result2 ' + result2);
    return out;

};

var pes = function (nums) {
    let prod = nums.reduce((a, num) => {
        console.log(`a : ${a} num ${num}`)
        return a * num
    });
    console.log(prod);
    return nums.map(num => {
        console.log(`prod : ${prod} num: ${num}`);
        return prod / num
    });
};
// 24 / 1,
console.log(pes([1, 2, 3, 4]));
//   console.log(productExceptSelf([1,2,3,4])); //[24,12,8,6]
//   console.log(productExceptSelf([4,3,2,1])); //[6,8,12,24]
//   console.log(productExceptSelf([2,2,3,3])); //[18,18,12,12]
//   console.log(productExceptSelf([1,2,3,4,5])); //[120,60,40,30,24]