// 839. Similar String Groups
// Hard

// 249

// 86

// Add to List

// Share
// Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y. Also two strings X and Y are similar if they are equal.

// For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".

// Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

// We are given a list A of strings.  Every string in A is an anagram of every other string in A.  How many groups are there?



// Example 1:

// Input: A = ["tars","rats","arts","star"]
// Output: 2


// Constraints:

// 1 <= A.length <= 2000
// 1 <= A[i].length <= 1000
// A.length * A[i].length <= 20000
// All words in A consist of lowercase letters only.
// All words in A have the same length and are anagrams of each other.
// The judging time limit has been increased for this question.


var numSimilarGroups = function (A) {
    let resultCount = 0;
    for (let i = 0; i < A.length - 1; i++) {
        if (stringCompareHelper(A[i], A[i + 1])) {
            ++resultCount;
        }
    }
    return resultCount;
};
function stringCompareHelper(s1, s2) {
    if (s1.length != s2.length) return false;
    let count = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            ++count;
        }
        if (count > 2) {
            console.log(s1 + "-" + s2 + ": False");
            return false;
        }
    }
    console.log(s1 + "-" + s2 + ": True");
    return true;
}
// let IP = ["tars", "rats", "arts", "star"];
IP = ["nmiwx", "mniwx", "wminx", "mnixw", "xnmwi"];
console.log(numSimilarGroups(IP));
// let graphAdjMatrix = new Array(IP.length).fill(0);
// graphAdjMatrix.push(new Array(IP.length))