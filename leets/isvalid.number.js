
var isNumber = function (s) {
    console.log()
    if (s == " ")
        return false;
    var bool = Number(s);
    if (bool == 0) {
        console.log(`S : ${s} Result : true bool:${bool} `);
        return true;
    }
    else {
        console.log(`S : ${s} Result : ${Boolean(bool)}`);
        return Boolean(bool);
    }


};
isNumber("0")
isNumber("0.1")
isNumber("abc")
isNumber("1 a")
isNumber("2e10")
isNumber(" -90e3   ")
isNumber(" 1e")
isNumber(" 6e-1")
isNumber(" 99e2.5 ")
isNumber("53.5e93")
isNumber(" --6 ")
isNumber("-+3")
isNumber("95a54e53")
