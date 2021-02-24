/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = (num, target) => {
    var res = [];
    compute(num, "", 0, 0);
    return res;

    function compute(nums, exp, val, back) {
        if (nums === "" && val === target) {
            console.warn(`nums : ${nums}  exp: ${exp} val: ${val} back: ${back}`);
            res.push(exp);
        } else {
            for (var i = 1; i <= nums.length; i++) {
                var head = nums.substring(0, i);
                var tail = nums.substring(i, nums.length);
                var curr = parseInt(head) || 0;
                if (head.length >= 2 && head[0] === "0") {
                    return;
                }
                if (exp === "") {
                    compute(tail, head, curr, curr);
                }
                else {
                    compute(tail, exp + "+" + head, val + curr, curr);
                    compute(tail, exp + "-" + head, val - curr, -1 * curr);
                    compute(tail, exp + "*" + head, val - back + back * curr, back * curr);
                }
            }

        }
    }
};


console.info(addOperators("123", 6));