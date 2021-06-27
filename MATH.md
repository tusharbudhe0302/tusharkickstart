### Expression

Airthmatic Serries

- `1,2,3,4,5,....,n` : n(n+1)/2
- `1,2,3,4,5,....,n-1` : n(n-1)/2
- `n-1,n-2,n-3,n-4,n-5,....,3,2,1,0` : n(n-1)/2

Harmonic series:

- `1/1,1/2,1/3,1/4,......,1/n` :

- **Note** - Ө(n^2) = O(n^2) & O(n^2) != Ө(n^2)
  If the running time of an algorithm is Ө(n), that means it roughly runs in time cn for some constant c. If the running time of an algorithm is O(n), that means it runs in time at most c’n for some constant c’. This means if T(n) = Ө(n^2), then T(n) is also O(n^2). - 2log2n is (assuming log has a base of 2) : n - log2(2^h) : h

- genrate Spelling from Word.

```javascript
  var TEN = 10;
  var ONE_HUNDRED = 10 ** 2;
  var ONE_THOUSAND = 10 ** 3;
  var ONE_MILLION = 10 ** 6;
  var ONE_BILLION = 10 ** 9; //         1.000.000.000 (9)
  var ONE_TRILLION = 10 ** 12; //     1.000.000.000.000 (12)
  var ONE_QUADRILLION = 10 ** 15; // 1.000.000.000.000.000 (15)
  var MAX = 9007199254740992; // 9.007.199.254.740.992 (15)
  var LESS_THAN_TWENTY = [
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

var TENTHS_LESS_THAN_HUNDRED = [
'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];
function generateWords(number,secondArgument) {
var remainder, word,
words = secondArgument;//arguments[1];

    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }

    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];

    } else if (number < ONE_HUNDRED) {
        remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }

    } else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';

    } else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

    } else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';

    } else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';

    } else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';

    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
        ' quadrillion,';
    }

    words.push(word);
    return generateWords(remainder, words);

}
console.log(generateWords(102)); 

```

