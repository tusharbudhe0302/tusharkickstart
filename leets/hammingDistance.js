/** Hamming Distance
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function prefixZerosToBinary(leadingZeros, prefix) {
    while (leadingZeros > 0) {
        prefix = "0" + prefix;
        leadingZeros--;
    }
    return prefix;
}

var hammingDistance = function (x, y) {
    let binaryOfx = (x >>> 0).toString(2);
    let binaryOfy = (y >>> 0).toString(2);
    let prefix, count = 0;

    if (binaryOfy.length > binaryOfx.length) {
        prefix = binaryOfy.length - binaryOfx.length;
        binaryOfx = prefixZerosToBinary(prefix, binaryOfx);
    } else {
        prefix = binaryOfx.length - binaryOfy.length;
        binaryOfy = prefixZerosToBinary(prefix, binaryOfy);
    }
    console.log(`binaryOfx : ${binaryOfx} binaryOfy : ${binaryOfy} prefix:${prefix}`);
    for (let i = 0; i < binaryOfx.length; i++) {
        if (binaryOfx[i] != binaryOfy[i])
            count++;
    }
    console.log(`count : ${count}`);
    return count;
};

hammingDistance(1, 4);