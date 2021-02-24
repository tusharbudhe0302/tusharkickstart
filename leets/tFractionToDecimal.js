/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
//  http://blog.csdn.net/ljiabin/article/details/42025037
var fractionToDecimal = function (numerator, denominator) {
    console.log(`numerator :  ${numerator}  denominator :  ${denominator}`);
    if (numerator == null || denominator == null) {
        return "";
    }
    if (denominator == 0) return "";
    if (numerator == 0) return "0";
    var isNegative = false;
    if (numerator < 0 ^ denominator < 0) { isNegative = true; }
    var num = Math.abs(numerator);
    var den = Math.abs(denominator);
    var answer = "";
    var res = ~~(num / den);
    var remin = (num % den) * 10;
    answer += res;
    if (remin === 0)
        return fixAnswer(isNegative, answer);

    answer += ".";
    var map = {};
    while (remin != 0) {
        if (map[remin]) {
            // console.log(map);
            // console.log(answer);
            // console.log(remin);
            var beg = answer.substring(0, map[remin]);
            var end = answer.substring(map[remin]);
            answer = beg + "(" + end + ")";
            return fixAnswer(isNegative, answer);
        }
        map[remin] = answer.length;
        res = ~~(remin / den);
        answer += res;
        // console.log(answer);
        remin = (remin % den) * 10;
    }

    return fixAnswer(isNegative, answer);
}
function fixAnswer(isNegative, answer) {
    answer = answer.replace(/-/g, '');
    if (isNegative) {
        answer = "-" + answer;
    }
    return answer;
}
console.log(fractionToDecimal(2, 1));
console.log(fractionToDecimal(2, 3));
console.log(fractionToDecimal(4, 333));
console.log(fractionToDecimal(-2145, -1));
console.log(fractionToDecimal(1, 2));
console.log(fractionToDecimal(2, -1));
console.log(fractionToDecimal(3, 8));
