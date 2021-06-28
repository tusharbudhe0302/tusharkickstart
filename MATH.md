### Expression

Airthmatic Serries

- Traingle Series
  {1, 3, 6, 10, 15, 21, 28, 36, 45, ...} : x(n) = `n(n+1)/2`
- Squre Series
  {1, 4, 9, 16, 25, 36, 49, 64, 81, ...}: x(n) = `n^2`
- Cube Series
  {1, 8, 27, 64, 125, 216, 343, 512, 729, ...}: x(n) = `n^3`
- Fibonacci Series
  {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...}: x(n) = `x(n-1)+x(n-1)`
- Alternating Series
  {0, 1, 0, 1, 0, 1, ...}: x(n) = `n%2`
- Diffrence Series
  {1, 4, 7, 10, 13, 16, 19, 22, 25, }: x(n) = `a + d(n−1)` a is first term
- Exponetial Series
  {0,1,2,4,8,16}: x(n) = `2^n`
- Harmonic Series:
  {1/1,1/2,1/3,1/4,}
- Pascal's Triangle:
  {1,11,121,1331} : x(n) = `11^n`
- Binomial Expansion
  {(x+1)^2,(x+1)^3,(x+1)^4,(x+1)^n} i.e. {121,1331,...} : x(n) = `11^n`
- Hormoinic Series
  {1/2,3/2,5/2}: x(n) = `1/a + d(n−1)`

#### Advanced Topic:

- Summing an Arithmetic Series

To sum up the terms of this arithmetic sequence:

a + (a+d) + (a+2d) + (a+3d) + ...

Example: Add up the first 10 terms of the arithmetic sequence:
{ 1, 4, 7, 10, 13, ... }

First, we will call the whole sum "S":

S = a + (a + d) + ... + (a + (n−2)d) + (a + (n−1)d)
Next, rewrite S in reverse order:

S = (a + (n−1)d) + (a + (n−2)d) + ... + (a + d) + a
Now add those two, term by term:

S = a + (a+d) + ... + (a + (n-2)d) + (a + (n-1)d)
S = (a + (n-1)d) + (a + (n-2)d) + ... + (a + d) + a
2S = (2a + (n-1)d) + (2a + (n-1)d) + ... + (2a + (n-1)d) + (2a + (n-1)d)
Each term is the same! And there are "n" of them so ...

2S = n × (2a + (n−1)d)
Now, just divide by 2 and we get:

S = (n/2) × (2a + (n−1)d)

- `1/1,1/2,1/3,1/4,......,1/n` :

- **Note** - Ө(n^2) = O(n^2) & O(n^2) != Ө(n^2)
  If the running time of an algorithm is Ө(n), that means it roughly runs in time cn for some constant c. If the running time of an algorithm is O(n), that means it runs in time at most c’n for some constant c’. This means if T(n) = Ө(n^2), then T(n) is also O(n^2). - 2log2n is (assuming log has a base of 2) : n - log2(2^h) : h

- Genrate Spelling from Word.

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
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

var TENTHS_LESS_THAN_HUNDRED = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
function generateWords(number, secondArgument) {
  var remainder,
    word,
    words = secondArgument; //arguments[1];

  // We’re done
  if (number === 0) {
    return !words ? "zero" : words.join(" ").replace(/,$/, "");
  }
  // First run
  if (!words) {
    words = [];
  }
  // If negative, prepend “minus”
  if (number < 0) {
    words.push("minus");
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
      word += "-" + LESS_THAN_TWENTY[remainder];
      remainder = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = generateWords(Math.floor(number / ONE_HUNDRED)) + " hundred";
  } else if (number < ONE_MILLION) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + " thousand,";
  } else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = generateWords(Math.floor(number / ONE_MILLION)) + " million,";
  } else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + " billion,";
  } else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + " trillion,";
  } else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word =
      generateWords(Math.floor(number / ONE_QUADRILLION)) + " quadrillion,";
  }

  words.push(word);
  return generateWords(remainder, words);
}
console.log(generateWords(102));
```

- 12. Integer to Roman

```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
  };
  let res = "";
  let quotient = 0;
  let divisors = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let divisor = divisors.pop();
  while (num > 0) {
    if (num >= divisor) {
      quotient = Math.floor(num / divisor);
      num = num % divisor;
      res += map[divisor].repeat(quotient);
    } else {
      divisor = divisors.pop();
    }
  }
  return res;
  // T.C: O(1)
  // S.C: O(1)
};
```

- 13. Roman to Integer

```javascript
var romanToInt = function (s) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let n = s.length;
  sum += map[s[n - 1]];
  for (let i = 0; i < n - 1; i++) {
    let next = s[i + 1];
    if (map[next] > map[s[i]]) {
      sum -= map[s[i]];
    } else sum = sum + map[s[i]];
  }
  return sum;
};
```

- 1359. Count All Valid Pickup and Delivery Options

Given n orders, each order consist in pickup and delivery services.Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i).Since the answer may be too large, return it modulo 10^9 + 7.

Example 1:
Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
Example 2:
Input: n = 2
Output: 6
Explanation: All possible orders:
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.

First, we will call the whole sum "S":
S = a + (a + d) + ... + (a + (n−2)d) + (a + (n−1)d)
Next, rewrite S in reverse order:
S = (a + (n−1)d) + (a + (n−2)d) + ... + (a + d) + a
Now add those two, term by term:
S = a + (a+d) + ... + (a + (n-2)d) + (a + (n-1)d)
S = (a + (n-1)d) + (a + (n-2)d) + ... + (a + d) + a
2S = (2a + (n-1)d) + (2a + (n-1)d) + ... + (2a + (n-1)d) + (2a + (n-1)d)
Each term is the same! And there are "n" of them so ...
2S = n × (2a + (n−1)d)
Now, just divide by 2 and we get:
S = (n/2) × (2a + (n−1)d)
Or
S= (2n-1),(2n-2),....,1
S= 1,2,........(2n-2),(2n-1)
add the :
2S = (2n-1)*2n
S = (2n-1)*n

f(n) = f(n-1)\*n(2n-1)
f(n) -> Total number of ways pickup & delivery times.

```javascript
var countOrders = function (n) {
  let f = 1;
  for (let i = 2; i <= n; i++) {
    f = (f * i * (2 * i - 1)) % (10 ** 9 + 7);
  }
  return f;
};
```

- 829. Consecutive Numbers Sum

s = a+(a+1)+(a+2)+(a+3)+.....+ (a+k-1)
s = (a+k-1)+(a+k-2)+.....+1
add
2s= (2a+k-1)*k
s= (((2a+k-1)*k)/2)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (N) {
  let count = 1;
  for (let a = 2; a < Math.sqrt(2 * N); a++) {
    if ((N - [(a + 1) * a] / 2) % a === 0) {
      count++;
    }
  }
  return count;
};
```
