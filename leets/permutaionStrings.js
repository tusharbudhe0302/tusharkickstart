// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
// Example 1:
// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input:s1= "ab" s2 = "eidboaoo"
// Output: False

var sort = function (str) {
    var splitString = str.split("").reverse().join("");
    return splitString;
}
var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }
    for (var i = 0; i <= s2.length - s1.length; i++) {
        s1 = sort(s1);
        //ba s1
        if (s1 === (sort(s2.substring(i, i + s1.length)))) {
            return true;
        }
    }
    return false;
}

console.log(checkInclusion("ab", "eidboaoo"));