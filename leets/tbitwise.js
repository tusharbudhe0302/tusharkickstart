function decimalToBinaryBitWise(num) {
    if (num == 0) {
        return;
    }
    decimalToBinaryBitWise(~~(num / 2));
    console.log(~~(num % 2));
}


function decimalToBinary(num) {
    if (num == 0) {
        return;
    }
    decimalToBinary(num / 2);
    console.log(num % 2);
}
// decimalToBinary(5);
decimalToBinaryBitWise(5);