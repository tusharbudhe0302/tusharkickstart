/**Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

Example 1:
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
Constraints:
1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9
 */

/**
* @param {number[][]} dominoes
* @return {number}
*/
var numEquivDominoPairs = function (dominoes) {
    let arr = Array(100).fill(0), pairCount = 0;
    for (const d of dominoes) {
        const num = d[0] < d[1] ? d[0] * 10 + d[1] : d[1] * 10 + d[0];
        pairCount += arr[num];
        arr[num]++;
        console.log(`num : ${num} pairCount: ${pairCount} arr : ${arr}`);
    }

    return pairCount;
};

// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].



// Example 1:

// Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
// Output: 1


// Constraints:

// 1 <= dominoes.length <= 40000
// 1 <= dominoes[i][j] <= 9


// [[1,2],[2,1],[3,4],[5,6]]
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let map = {};
    dominoes.map((d) => {
        let dSort = d.sort((a, b) => { return a - b });
        let tempRes = dSort[0] * 10 + dSort[1];
        if (!map[tempRes])
            map[tempRes] = 1
        else
            map[tempRes] = map[tempRes] + 1;
    })
    let values = Object.values(map).filter((result) => { return result > 1 });
    return values.length > 0 ? true : false;
};
let result = numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]);
console.log(result);
result = numEquivDominoPairs([[1, 2], [2, 5], [3, 4], [5, 6]]);
console.log(result);
result = numEquivDominoPairs([[1, 2], [2, 5], [3, 4], [5, 6], [6, 5]]);
console.log(result);