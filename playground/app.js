/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let map = {1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500: "D", 1000:"M", 4: "IV", 9: "IX", 40: "XL", 90: "XC", 400: "CD", 900: "CM"};
    let res = "";
    let quotient = 0;
    let divisors = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let divisor = divisors.pop();
    while (num > 0) {
        if (num >= divisor) {
            quotient = Math.floor(num / divisor);
            num = num % divisor;
            res += map[divisor].repeat(quotient);
        } else {
            divisor = divisors.pop();
        }
    }
    return res;
    // T.C: O(1)
    // S.C: O(1)
};

console.log(intToRoman(11));
// console.log(intToRoman(9));