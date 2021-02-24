var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    var map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    var combinations = [''];

    // for as many times as there are digits (eg. '3721' => 4 times)
    for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        var letters = map[digit];
        var tempArray = [];
        console.log('digit ' + digit);
        console.log('letters ' + letters);
        // skip if invalid digit
        if (letters === undefined) continue;
        // for as many times as there are letters (eg. 'abc' => 3 times)
        for (var j = 0; j < letters.length; j++) {
            var letterToAdd = letters[j];
            console.log('letterToAdd ' + letterToAdd);
            // for as many times as there are existing combinations
            // (eg. ['ad', 'bd', 'cd'] => 3 times)
            for (var k = 0; k < combinations.length; k++) {
                console.log('combinations ' + combinations[k]);
                var combination = combinations[k];
                tempArray.push(combination + letterToAdd);
            }
        }
        combinations = tempArray;
    }
    return combinations;
};


// console.log(letterCombinations('234'));
console.log(letterCombinations('2'));