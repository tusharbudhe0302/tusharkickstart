var removeInvalidParenthesis = function (str) {
    let n = str.length;
    let visistedMap = new Set();
    var Q = [];
    Q.push(str);
    visistedMap.add(str);
    var isValidString = function (strValid) {
        let count = 0;
        for (var i = 0; i < strValid.length; i++) {
            if (strValid[i] == '(')
                count++;
            if (strValid[i] == ')')
                count--;
        }
        if (count < 0)
            return false;
        else return true;

    }
    var isOnlyPara = function (strI) {
        if (strI == '(' || strI == ')')
            return true
        else
            return false;
    }
    while (Q.length > 0) {
        let p = Q.shift();
        if (isValidString(p)) {
            console.log(p);
            continue;
        }
        for (let i = 0; i < n - 1; i++) {
            if (!isOnlyPara(str[i])) {
                continue;
            }
            let temp = str.substring(0, i) + str.substring(i + 1);
            if (!visistedMap.has(temp)) {
                visistedMap.add(temp);
                Q.push(temp);
            }
        }
    }


}

let expression = "()())()";
removeInvalidParenthesis(expression); 