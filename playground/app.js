/*
 * Complete the 'wordBreakCount' function below.
 *
 * The function accepts STRING_ARRAY dictionary as parameter
 * and the original string txt on which segmentation is to be 
 * performed.
 * The function returns the count of all possible segmentation 
 */

function wordBreakCount(dictionary, txt) {
    // Write your code here
    //initialize a hash map to optimize word search
    let dict = new Set(dictionary);
    //initialize a variable to run modulo operation
    let mod = Math.pow(10, 9) + 7
    //count the length of the max word in the dictionary
    let maxWord = dictionary.reduce((max, curr) => {
        max = Math.max(max, curr.length);
        return max
    }, 0)
    //initialize the bottom-up dp table with a length of the txt plus 1, adding one to start the first cell an empty string
    let dp = new Array(txt.length + 1).fill(0)
    //initialize the dp table from the right (instead of left) and set the val = 1
    dp[txt.length] = 1
    //iterate with two pointers i, j (i is the left and j is right pointer).
    //Go from right to left
    for (let i = txt.length - 1; i >= 0; i--) {
        for (let j = i + 1; j <= txt.length && j - i <= maxWord; j++) {
            if (dict.has(txt.substring(i, j))) {
                dp[i] += dp[j]
                dp[i] %= mod;
            }
        }
    }

    return dp[0]

}
console.log(wordBreakCount(["kick", "start", "kickstart", "is", "awe", "some", "awesome"], "kickstartisawesome"));
