#### Strting foundations

Top algorithums to study :

1. KMP (Kunth Mooris Patt algorithm) O(m+n)

	- Create pi(π) or lps(Longest proper Prefix which is also Suffix) table
	- start element with `0`
	- if start and next are equal increment prefix Index & suffix Index
	- else if prefix Index ===0 set suffix to `0`
	- prefix Index = table[prefixindex-1]
	- It's best when we have long string with out space. 
	- If you have paraghaphs which has special cracters like Space Or Comma then go for Boyer Moore algorithum.

```javascript
function buildPattern(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1; //this is very important
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }
  return patternTable;
}
console.log(buildPattern("aacbacbax"));  
//[ 0, 1, 0, 0, 1, 0, 0, 1, 0 ]
const findBeginingIndexOfPattern = (s, p) => {
	let sl = s.length;
	let pl = p.length;
	let i = 0,
		j = 0;
	let piTable = buildPattern(p);
	let result = [];
	while (i < sl) {
		if (s[i] == p[j]) {
			i++;
			j++;
		}
		if (j === pl) {
			console.log(`Pattern found On index: ${i-j}`);
			result.push(i - j);
			j = piTable[j - 1]; // KMP is prefix match
		} else if (i < sl && s[i] != p[j]) {
			if (j != 0) j = piTable[j - 1];
			else i++;
		}
	}
	if (!result.length) return ["Not Found"];
}

findBeginingIndexOfPattern("interfacesenforceconsistentinterfacesinderivedclasses", "interfaces");
// Pattern found On index: 0
// Pattern found On index: 27
```

2. Robert Karp O(m*n)

	- Create map from char set
	- Create hash from map
	- Start Comapir with patterns. Not recommended.
	- Once hash match with string you need to compaier string again. In worst case it will be O(m*n) i.e. O(n^2)
	- Last Option not recommended.
	
```javascript
let map = {};
let j = 1;
for (let i = 97; i < 123; i++) {
	let ch = String.fromCharCode(i);
	map[ch] = j++;
}
const createHash = (s) => {
	let n = s.length - 1;
	let hash = 0;
	while (n >= 0) {
		let ch = s.charAt(n);
		hash += map[ch] * Math.pow(11, n);
		n--;
	}
	return hash;
}
console.log(createHash("abc")); //386
console.log(createHash("cba")); //146
```

3. Finite Automation base algorihtm

- Create 2D Array for table UTF-8 need 255 Chars & ASCII 128 Chars

4. Boyare moore algorithm O(m*n) like KMP

- Create bad match table

```javascript
var MAX = 256;
var t = new Array(256);
const badMatchTable = (pattern) => {
	for (var i = 0; i < MAX; i++) {
		t[i] = pattern.length;
	}
	for (var i = 0; i < pattern.length - 1; i++) {
		t[pattern.charCodeAt(i)] = pattern.length - 1 - i;
	}
}
badMatchTable('test');
```

```javascript

var findStringPatternByBoyreMoore = function(stringIP, pattern) {
	var pl = pattern.length;
	var sl = stringIP.length;
	var skip = 0;
	while (sl - skip >= pl) {
		var i = pl - 1;
		while (stringIP[skip + i] == pattern[i]) {
			if (i == 0) {
				console.log(`Pattern found at : ${skip}`);
				return skip;
			}
			i--;
		}
		skip = skip + t[stringIP.charCodeAt(skip + pl - 1)];
	}
	return -1;
}

findStringPatternByBoyreMoore('this is a test', 'test'); //Pattern found at : 10
```

5. Trie Data Structure is used for prefix(Naive algorithm) and suffix( Aho corasick algorithm) patterns

- Using dictionary,not good for suffix patterns. It's fine for prefix patterns liek naive algorithum to check word exist or not.

```javascript
let trieNode = function () {
	this.node_key = new Map();
	this.end = false;
	this.setEnd = function () {
		this.end = true;
	}
	this.isEnd = function () {
		return this.end;
	}
}
let trie = function () {
	this.root = new trieNode(); // Empty Object First
	this.add = function (input, trie_node = this.root) {
		if (input.length === 0) {
			trie_node.setEnd();
			// console.log(trie_node.isEnd());
			return;
			//trie_node.node_key make sure you are reaching correct property
		} else if (!trie_node.node_key.has(input[0])) {
			trie_node.node_key.set(input[0], new trieNode());
			return this.add(input.substr(1), trie_node); // don't forget return
		} else {
			return this.add(input.substr(1), trie_node.node_key.get(input[0])); // don't forget return 
		}
	};
	this.isWord = function (input) {
		var trie_node = this.root;
		var word = input;
		while (word.length > 1) {
			if (!trie_node.node_key.has(word[0])) return false;
			else {
				trie_node = trie_node.node_key.get(word[0]);
				word = word.substr(1);
			}
		}
		return trie_node.node_key.has(word[0]) && trie_node.isEnd() ? true : false;
	}
	this.printAll = function () {
		var words = new Array();
		var Search = function (trie_node, suffixStr) {
			if (trie_node.node_key.size != 0 || !trie_node.isEnd()) {
				for (let char of trie_node.node_key.keys()) {
					Search(trie_node.node_key.get(char), suffixStr.concat(char));
				}
				words.push(suffixStr)
			}
		};
		Search(this.root, new String());
		return words;
	}
}
var trieSearch = new trie();

trieSearch.add("ba");
trieSearch.add("baz");
trieSearch.add("bbbb");
console.log(trieSearch.isWord("baz")); //true
console.log(trieSearch.isWord("ba")); //true
console.log(trieSearch.isWord("bbbb")); //false
// console.log(trieSearch.printAll());
```

- Using ES6 , good with suffix patterns search. Specific case Aho corasick algorithm dictionary

#### Practice Problems

- Longest palindrome in a given string

O(n^2)

```javascript
function pair(b, e) {
	this.b = b;
	this.e = e;
}
const findLongestPalindrome = (a) => {
	let n = a.length;
	let max = new pair(0, 0);
	for (let i = 0; i < n; i++) {
		let b = i - 1 > 0 ? i - 1 : 0;
		let e = i + 1;
		// this loop Only for odd length
		while (b >= 0 && e < n && a.charAt(b) === a.charAt(e)) {
			--b;
			e++;
		}
		++b;
		--e;
		if ((e - b) + 1 > (max.e - max.b) + 1) {
			max = new pair(b, e);
		}
		b = i;
		e = i + 1;
		//this loop Only for even length
		while (b >= 0 && e < n && a.charAt(b) === a.charAt(e)) {
		//	console.log(`i:${i} b:${b} e:${e} ${a.charAt(b)} ${a.charAt(e)}`);
			--b;
			e++;
		}
		++b;
		--e;
		if ((e - b) + 1 > (max.e - max.b) + 1) {
			max = new pair(b, e);
		}
	}
	return max.e - max.b + 1;
}

console.log(findLongestPalindrome("asdasdewfdgbdfgklxcbxzzxbcxlkgfdbg")); //24
// console.log("gbdfgklxcbxzzxbcxlkgfdbg".length); //25
```

- Mutiplication of matrix

```javascript
let c = new Array(2).fill(0)
c.map((x, i) => {
	c[i] = new Array(2).fill(0);
});
const multiplicationOfMrtrix = (a, b) => {
	if (a[0].length != b.length) console.log(`No matach found`);
	let row = a[0].length;
	let col = b.length;
	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 2; j++) {
			for (let k = 0; k < 2; k++) {
				c[i][j] = c[i][j] + (a[i][k] * b[k][j]) // [i,k][k,j] IMP Point
			}

		}
	}
	return c;

}
let a = new Array(2).fill(0)
a.map((x, i) => {
	a[i] = new Array(2);
});
a[0][0] = 2;
a[0][1] = 4;
a[1][0] = 6;
a[1][1] = 8;
let b = new Array(2).fill(0)
b.map((x, i) => {
	b[i] = new Array(2);
});
b[0][0] = 2;
b[0][1] = 5;
b[1][0] = 4;
b[1][1] = 6;
console.log(`a: ${a} b:${b}`);
console.log(multiplicationOfMrtrix(a, b));
```

- ZickAack Word

```javascript
	// Write your code here.
	if (numRows === 1) return s;
	const res = new Array(numRows);
	res.fill('');

	let isIncreasing = true;
	let row = 0;
	for (let i = 0; i < s.length; i++) {
		res[row] += s[i];
		if (row === 0) isIncreasing = true;
		if (row === numRows - 1) isIncreasing = false;
		row += isIncreasing ? 1 : -1;
	}
	console.log(res);
	return res.join('');
}
console.log(zigzag(3,"TUSHAR"))// [ 'TA', 'UHR', 'S' ]
// TAUHRS
```

- Manachar’s Algorithm in Javascript Longest palindrome in a given string O(n)


- Sliding window problem

```javascript
		ch = s[r];
		freq2[ch] = (freq2[ch] || 0) + 1;
		if (freq1[ch] && freq2[ch] <= freq1[ch]) count++;
		if (count === m) {
			while (!freq1[s[l]] || freq2[s[l]] > freq1[s[l]]) {
				if (freq2[s[l]] > freq1[s[l]]) freq2[s[l]]--;
				l++;
			}
			if (r - l + 1 < minLen) {
				minLen = r - l + 1;
				start = l;
			}
		}
	}

	return minLen === n + 1 ? -1 : s.substr(start, minLen);
}
console.log(minimum_windowII("BACRDESDFBAER", "BAR")); //BACR Not BEAR BACR come first
console.log(minimum_windowII("AYZABOBECODXBANC", "ABC")); //BANC

```

 - Implment suffix tree to find pattern
  1. Pattern searching
  2. Find longest repeated substring
  3. Find longest palindrome in string.
  4. Lowest Common anccestor
  5. Find lowest comman substring
  6. Exact string matching


#### Algorithms :
1.  [Naive Pattern Searching](https://www.geeksforgeeks.org/searching-for-patterns-set-1-naive-pattern-searching/)
2.  [KMP Algorithm](https://www.geeksforgeeks.org/searching-for-patterns-set-2-kmp-algorithm/)
3.  [Rabin-Karp Algorithm](https://www.geeksforgeeks.org/searching-for-patterns-set-3-rabin-karp-algorithm/)
4.  [A Naive Pattern Searching Question](https://www.geeksforgeeks.org/pattern-searching-set-4-a-naive-string-matching-algo-question/)
5.  [Finite Automata](https://www.geeksforgeeks.org/searching-for-patterns-set-5-finite-automata/)
6.  [Efficient Construction of Finite Automata](https://www.geeksforgeeks.org/pattern-searching-set-5-efficient-constructtion-of-finite-automata/)
7.  [Boyer Moore Algorithm – Bad Character Heuristic](https://www.geeksforgeeks.org/pattern-searching-set-7-boyer-moore-algorithm-bad-character-heuristic/)
8.  [Boyer Moore Algorithm | Good Suffix heuristic](https://www.geeksforgeeks.org/boyer-moore-algorithm-good-suffix-heuristic/)
9.  [Aho-Corasick Algorithm for Pattern Searching](https://www.geeksforgeeks.org/aho-corasick-algorithm-pattern-searching/ "Permalink to Aho-Corasick Algorithm for Pattern Searching")
10.  [Suffix Array](https://www.geeksforgeeks.org/suffix-array-set-1-introduction/)
11.  [kasai’s Algorithm for Construction of LCP array from Suffix Array](https://www.geeksforgeeks.org/%c2%ad%c2%adkasais-algorithm-for-construction-of-lcp-array-from-suffix-array/ "Permalink to ­­kasai’s Algorithm for Construction of LCP array from Suffix Array")
12.  [Z algorithm (Linear time pattern searching Algorithm)](https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/ "Permalink to Z algorithm (Linear time pattern searching Algorithm)")
13.  [Online algorithm for checking palindrome in a stream](https://www.geeksforgeeks.org/online-algorithm-for-checking-palindrome-in-a-stream/)
14.  [Manacher’s Algorithm – Linear Time Longest Palindromic Substring – Part 4](https://www.geeksforgeeks.org/manachers-algorithm-linear-time-longest-palindromic-substring-part-4/)
15.  [Ukkonen’s Suffix Tree Construction – Part 1](https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-1/)
16.  [Ukkonen’s Suffix Tree Construction – Part 2](https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-2/)
17.  [Ukkonen’s Suffix Tree Construction – Part 3](https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-3/)
18.  [Ukkonen’s Suffix Tree Construction – Part 4](https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-4/)
19.  [Ukkonen’s Suffix Tree Construction – Part 5](https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-5/)
20.  [Ukkonen’s Suffix Tree Construction – Part 6](https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-6/)
21.  [Generalized Suffix Tree 1](https://www.geeksforgeeks.org/generalized-suffix-tree-1/)

##### Questions :

1.  [Anagram Substring Search (Or Search for all permutations)](https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/ "Permanent link to Anagram Substring Search (Or Search for all permutations)")
2.  [Pattern Searching using a Trie of all Suffixes](https://www.geeksforgeeks.org/pattern-searching-using-trie-suffixes/ "Permanent link to Pattern Searching using a Trie of all Suffixes")
3.  [Program to wish Women’s Day](https://www.geeksforgeeks.org/program-wish-womens-day/)
4.  [Program to replace a word with asterisks in a sentence](https://www.geeksforgeeks.org/program-censor-word-asterisks-sentence/)
5.  [Dynamic Programming | Wildcard Pattern Matching | Linear Time and Constant Space](https://www.geeksforgeeks.org/dynamic-programming-wildcard-pattern-matching-linear-time-constant-space/)
6.  [Pattern Searching using C++ library](https://www.geeksforgeeks.org/pattern-searching-using-c-library/)
7.  [Longest prefix which is also suffix](https://www.geeksforgeeks.org/longest-prefix-also-suffix/)
8.  [Splitting a Numeric String](https://www.geeksforgeeks.org/splitting-numeric-string/)
9.  [Count of number of given string in 2D character array](https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/)
10.  [Find minimum shift for longest common prefix](https://www.geeksforgeeks.org/find-minimum-shift-longest-common-prefix/)
11.  [Find all the patterns of “1(0+)1” in a given string | SET 1(General Approach)](https://www.geeksforgeeks.org/find-patterns-101-given-string/)
12.  [Find all the patterns of “1(0+)1” in a given string | SET 2(Regular Expression Approach)](https://www.geeksforgeeks.org/find-patterns-101-given-string-set-2regular-expression-approach/)
13.  [is\_permutation() in C++ and its application for anagram search](https://www.geeksforgeeks.org/is_permutation-c-application-anagram-search/)
14.  [Match Expression where a single special character in pattern can match one or more characters](https://www.geeksforgeeks.org/match-expression-where-a-single-special-character-in-pattern-can-match-one-or-more-characters/)
15.  [Maximum length prefix of one string that occurs as subsequence in another](https://www.geeksforgeeks.org/maximum-length-prefix-one-string-occurs-subsequence-another/)
16.  [Wildcard Pattern Matching](https://www.geeksforgeeks.org/wildcard-pattern-matching/)
17.  [Find all occurrences of a given word in a matrix](https://www.geeksforgeeks.org/find-all-occurrences-of-the-word-in-a-matrix/)
18.  [Search a Word in a 2D Grid of characters](https://www.geeksforgeeks.org/search-a-word-in-a-2d-grid-of-characters/)
19.  [String matching where one string contains wildcard characters](https://www.geeksforgeeks.org/wildcard-character-matching/)
20.  [Suffix Tree Application 1 – Substring Check](https://www.geeksforgeeks.org/suffix-tree-application-1-substring-check/)
21.  [Suffix Tree Application 2 – Searching All Patterns](https://www.geeksforgeeks.org/suffix-tree-application-2-searching-all-patterns/)
22.  [Suffix Tree Application 3 – Longest Repeated Substring](https://www.geeksforgeeks.org/suffix-tree-application-3-longest-repeated-substring/)
23.  [Suffix Tree Application 4 – Build Suffix Array](https://www.geeksforgeeks.org/suffix-tree-application-4-build-linear-time-suffix-array/)
24.  [Suffix Tree Application 5 -Longest Common Substring](https://www.geeksforgeeks.org/suffix-tree-application-5-longest-common-substring-2/)
25.  [Suffix Tree Application 6 – Longest Palindromic Substring](https://www.geeksforgeeks.org/suffix-tree-application-6-longest-palindromic-substring/)


| Types | Algorithms |
|---	|---	|
|[String metric](https://en.wikipedia.org/wiki/String_metric "String metric")| [Approximate string matching](https://en.wikipedia.org/wiki/Approximate_string_matching "Approximate string matching")[Bitap algorithm](https://en.wikipedia.org/wiki/Bitap_algorithm "Bitap algorithm"),[Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance),[Edit distance](https://en.wikipedia.org/wiki/Edit_distance "Edit distance"),[Gestalt Pattern Matching](https://en.wikipedia.org/wiki/Gestalt_Pattern_Matching "Sequential pattern mining"),[Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance "Hamming distance"),[Jaro–Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance "Jaro–Winkler distance"),[Lee distance](https://en.wikipedia.org/wiki/Lee_distance "Lee distance"),[Levenshtein automaton](https://en.wikipedia.org/wiki/Levenshtein_automaton "Levenshtein automaton"),[Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance "Levenshtein distance")[Wagner–Fischer algorithm](https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm "Wagner–Fischer algorithm")|
|[String-searching algorithm](https://en.wikipedia.org/wiki/String-searching_algorithm)| [Apostolico–Giancarlo algorithm](https://en.wikipedia.org/wiki/Apostolico%E2%80%93Giancarlo_algorithm "Apostolico–Giancarlo algorithm"),[Boyer–Moore string-search algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm "Boyer–Moore string-search algorithm"),[Boyer–Moore–Horspool algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm "Boyer–Moore–Horspool algorithm"),[Knuth–Morris–Pratt algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm "Knuth–Morris–Pratt algorithm"),[Rabin–Karp algorithm](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm "Rabin–Karp algorithm")|
| Multiple string searching |[Aho–Corasick](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm "Aho–Corasick algorithm"),[Commentz-Walter algorithm](https://en.wikipedia.org/wiki/Commentz-Walter_algorithm)|
|[Regular expression](https://en.wikipedia.org/wiki/Regular_expression)|[Comparison of regular-expression engines](https://en.wikipedia.org/wiki/Comparison_of_regular-expression_engines "Comparison of regular-expression engines"),[Regular grammar](https://en.wikipedia.org/wiki/Regular_grammar "Nondeterministic finite automaton"),[Thompson's construction](https://en.wikipedia.org/wiki/Thompson%27s_construction "Thompson's construction"),[Nondeterministic finite automaton](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton)|
|[Sequence alignment](https://en.wikipedia.org/wiki/Sequence_alignment "Generalized suffix tree")|[Hirschberg's algorithm](https://en.wikipedia.org/wiki/Hirschberg%27s_algorithm),[Needleman–Wunsch algorithm](https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm),[Smith–Waterman algorithm](https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm "Smith–Waterman algorithm")|
|[Data structure](https://en.wikipedia.org/wiki/Data_structure "Data structure")|[DAFSA](https://en.wikipedia.org/wiki/Deterministic_acyclic_finite_state_automaton "Deterministic acyclic finite state automaton"),[Suffix array](https://en.wikipedia.org/wiki/Suffix_array "Suffix array"),[Suffix automaton](https://en.wikipedia.org/wiki/Suffix_automaton "Compressed pattern matching"),[Suffix tree](https://en.wikipedia.org/wiki/Suffix_tree "Suffix tree"),[Generalized suffix tree](https://en.wikipedia.org/wiki/Generalized_suffix_tree),[Rope](https://en.wikipedia.org/wiki/Rope_(data_structure) "Rope (data structure)"),[Ternary search tree](https://en.wikipedia.org/wiki/Ternary_search_tree "Ternary search tree"),[Trie](https://en.wikipedia.org/wiki/Trie "Trie")|
|Other|[Parsing](https://en.wikipedia.org/wiki/Parsing "Parsing"),[Pattern matching](https://en.wikipedia.org/wiki/Pattern_matching "Pattern matching"),[Compressed pattern matching](https://en.wikipedia.org/wiki/Compressed_pattern_matching "Needleman–Wunsch algorithm"),[Longest common subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem "Longest common subsequence problem"),[Longest common substring](https://en.wikipedia.org/wiki/Longest_common_substring_problem "Longest common substring problem"),[Sequential pattern mining](https://en.wikipedia.org/wiki/Sequential_pattern_mining),[Sorting](https://en.wikipedia.org/wiki/Category:String_sorting_algorithms "Category:String sorting algorithms")|


Question to ask in IK:

1. Manachar’s Algorithm in Javascript Longest palindrome in a given string
2. Aho Coarvick algorithm VS KMP

