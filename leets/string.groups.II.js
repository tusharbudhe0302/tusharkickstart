// 893. Groups of Special-Equivalent Strings
// Easy

// Add to List

// Share
// You are given an array A of strings.

// A move onto S consists of swapping any two even indexed characters of S, or any two odd indexed characters of S.

// Two strings S and T are special-equivalent if after any number of moves onto S, S == T.

// For example, S = "zzxy" and T = "xyzz" are special-equivalent because we may make the moves "zzxy" -> "xzzy" -> "xyzz" that swap S[0] and S[2], then S[1] and S[3].

// Now, a group of special-equivalent strings from A is a non-empty subset of A such that:

// Every pair of strings in the group are special equivalent, and;
// The group is the largest size possible (ie., there isn't a string S not in the group such that S is special equivalent to every string in the group)
// Return the number of groups of special-equivalent strings from A.


// Example 1:

// Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
// Output: 3
// Explanation: 
// One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings are all pairwise special equivalent to these.

// The other two groups are ["xyzz", "zzxy"] and ["zzyx"].  Note that in particular, "zzxy" is not special equivalent to "zzyx".
// Example 2:

// Input: ["abc","acb","bac","bca","cab","cba"]
// Output: 3


// Note:

// 1 <= A.length <= 1000
// 1 <= A[i].length <= 20
// All A[i] have the same length.
// All A[i] consist of only lowercase letters.

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    let len = A.length;
    let evenLst = [];
    let oddLst = [];

    for (j in A) {
        let temp = A[j];
        console.log(`temp : ${temp}`);
        let odd = ''; let even = '';
        for (let i = 0; i < temp.length; i++) {
            if (i % 2 === 0) {
                even += temp[i];
            } else {
                odd += temp[i];
            }
        }
        evenLst.push(even);
        oddLst.push(odd);
    }
    let resultSet = [];
    for (let k = 0; k < len; k++) {
        // console.log(`k : ${k}`);
        let evenSort = evenLst[k];
        let oddSort = oddLst[k];
        // console.log(evenSort + oddSort);
        evenLst[k] = evenSort.split('').sort().join('');
        oddLst[k] = oddSort.split('').sort().join('');
        let combine = evenLst[k] + oddLst[k];
        if (resultSet.indexOf(combine) < 0)
            resultSet.push(combine);
    }
    return resultSet.length;
};

let items = ["abc", "acb", "bac", "bca", "cab", "cba"];
let result = numSpecialEquivGroups(items);
console.log(`Groups of Special-Equivalent Strings IP : ${items} OP : ${result}`);