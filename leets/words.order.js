let isValidFormat = function (words, alphabets) {
    for (let i = 0; i < words.length - 1; i++) {
        let first = words[i];
        let second = words[i + 1];
        let firstChar = first[0];
        let secondChar = second[0];
        let firstAlphaIndex = alphabets.indexOf(firstChar);
        let secondAlphaIndex = alphabets.indexOf(secondChar);
        if (firstAlphaIndex < secondAlphaIndex) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
let words = ['cat', 'bat', 'tab'];
let alphabets = ['c', 'b', 'a', 't'];
console.log(words + '|' + alphabets)
console.log(isValidFormat(words, alphabets));
words = ['cat', 'bat', 'tab', 'bat'];
alphabets = ['c', 'b', 'a', 't'];
console.log(words + '|' + alphabets)
console.log(isValidFormat(words, alphabets))