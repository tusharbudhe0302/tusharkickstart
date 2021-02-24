// 340. Longest Substring with At Most K Distinct Characters
// Given a string, find the length of the longest substring T that contains at most k distinct characters.
// Example 1:
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:
// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    let n = s.length;
    let i = 0; j = 0; res = 0;
    let mapChars = {};
    let numberOfChars = 0;
    for (; j < n; j++) {
        let CharJ = s[j];
        if (!mapChars[CharJ]) {
            mapChars[CharJ] = 1;
            numberOfChars++;
        } else {
            mapChars[CharJ]++;
        }
        while (numberOfChars > k) {
            console.log(`numberOfChars : ${numberOfChars}`);
            let CharI = s[i];
            mapChars[CharI]--;
            if (mapChars[CharI] == 0) {
                numberOfChars--;
            }
            i++;
        }
        console.log(`I: ${i} J:${j} maoOfChars : ${JSON.stringify(mapChars)}`);
    }
    return Math.max(res, j - i + 1)
};