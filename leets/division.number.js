// Need  to devide number by 33/7
// You can't use divisionoprator
// numerator = 33
// denominator = 7
// Quesent = 4
// remiber = 3
var division = function (numerator, denominator) {
    console.log(`numerator: ${numerator} denominator: ${denominator}`);
    let quesent = 0
    let reminder = 0;
    let isNegative = false;
    if (numerator < 0 && denominator < 0) {
        numerator = numerator * -1;
        denominator = denominator * -1;
    }
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        isNegative = true;
        if (numerator < 0) {
            numerator = numerator * -1;
        }
        if (denominator < 0) {
            denominator = denominator * -1;
        }
    }
    let orignalNumerator = numerator;
    for (let i = denominator; i < orignalNumerator;) {
        let temp = numerator - denominator;
        if (temp > 0) {
            numerator = temp;
            if (isNegative) {
                --quesent;
            } else {
                ++quesent;
            }
        } else {
            reminder = numerator;
            break;
        }
    }
    console.log(`reminder: ${reminder} quesent: ${quesent}`);
}
division(-33, 7);
division(-33, -7);
division(33, -7);
division(33, 7);