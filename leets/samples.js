let binaryString = "";
function convertBinary(n) {
    if (n > 0) {
        binaryString += (n % 2)
        convertBinary(n = ~~(n / 2));
    }
    return binaryString;
}
console.log(convertBinary(5));