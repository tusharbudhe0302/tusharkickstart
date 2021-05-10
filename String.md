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
      patternTable[suffixIndex] = prefixIndex + 1;
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
// console.log(findLongestPalindrome("a")); //1
// console.log(findLongestPalindrome("aba")); //3
// console.log(findLongestPalindrome("aa")); //2
// console.log(findLongestPalindrome("abbbaabbbaasa")); //10
// console.log("abbbaabbbaas".length); //10
```

 - Implment suffix tree to find pattern
  1. Pattern searching
  2. Find longest repeated substring
  3. Find longest palindrome in string.
  4. Lowest Common anccestor
  5. Find lowest comman substring
  6. Exact string matching

```html
<div role="navigation" class="navbox" aria-labelledby="Strings" style="padding:3px">

<table class="nowraplinks mw-collapsible autocollapse navbox-inner mw-made-collapsible" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><span class="mw-collapsible-toggle mw-collapsible-toggle-default" role="button" tabindex="0" aria-expanded="true"><a class="mw-collapsible-text">hide</a></span><style data-mw-deduplicate="TemplateStyles:r992953826">.mw-parser-output .navbar{display:inline;font-size:88%;font-weight:normal}.mw-parser-output .navbar-collapse{float:left;text-align:left}.mw-parser-output .navbar-boxtext{word-spacing:0}.mw-parser-output .navbar ul{display:inline-block;white-space:nowrap;line-height:inherit}.mw-parser-output .navbar-brackets::before{margin-right:-0.125em;content:"[ "}.mw-parser-output .navbar-brackets::after{margin-left:-0.125em;content:" ]"}.mw-parser-output .navbar li{word-spacing:-0.125em}.mw-parser-output .navbar-mini abbr{font-variant:small-caps;border-bottom:none;text-decoration:none;cursor:inherit}.mw-parser-output .navbar-ct-full{font-size:114%;margin:0 7em}.mw-parser-output .navbar-ct-mini{font-size:114%;margin:0 4em}.mw-parser-output .infobox .navbar{font-size:100%}.mw-parser-output .navbox .navbar{display:block;font-size:100%}.mw-parser-output .navbox-title .navbar{float:left;text-align:left;margin-right:0.5em}</style><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="https://en.wikipedia.org/wiki/Template:Strings" title="Template:Strings"><abbr title="View this template" style=";;background:none transparent;border:none;box-shadow:none;padding:0;">v</abbr></a></li><li class="nv-talk"><a href="https://en.wikipedia.org/wiki/Template_talk:Strings" title="Template talk:Strings"><abbr title="Discuss this template" style=";;background:none transparent;border:none;box-shadow:none;padding:0;">t</abbr></a></li><li class="nv-edit"><a class="external text" href="https://en.wikipedia.org/w/index.php?title=Template:Strings&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;box-shadow:none;padding:0;">e</abbr></a></li></ul></div><div id="Strings" style="font-size:114%;margin:0 4em"><a href="https://en.wikipedia.org/wiki/String_(computer_science)" title="String (computer science)">Strings</a></div></th></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/String_metric" title="String metric">String metric</a></th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="https://en.wikipedia.org/wiki/Approximate_string_matching" title="Approximate string matching">Approximate string matching</a></li>
<li><a href="https://en.wikipedia.org/wiki/Bitap_algorithm" title="Bitap algorithm">Bitap algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance" title="">Damerau–Levenshtein distance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Edit_distance" title="Edit distance">Edit distance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gestalt_Pattern_Matching" title="Sequential pattern mining">Gestalt Pattern Matching</a></li>
<li><a href="https://en.wikipedia.org/wiki/Hamming_distance" title="Hamming distance">Hamming distance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance" title="Jaro–Winkler distance">Jaro–Winkler distance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lee_distance" title="Lee distance">Lee distance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Levenshtein_automaton" title="Levenshtein automaton">Levenshtein automaton</a></li>
<li><a href="https://en.wikipedia.org/wiki/Levenshtein_distance" title="Levenshtein distance">Levenshtein distance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm" title="Wagner–Fischer algorithm">Wagner–Fischer algorithm </a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a class="mw-selflink selflink">String-searching algorithm</a></th><td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="https://en.wikipedia.org/wiki/Apostolico%E2%80%93Giancarlo_algorithm" title="Apostolico–Giancarlo algorithm">Apostolico–Giancarlo algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm" title="Boyer–Moore string-search algorithm">Boyer–Moore string-search algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm" title="Boyer–Moore–Horspool algorithm">Boyer–Moore–Horspool algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm" title="Knuth–Morris–Pratt algorithm">Knuth–Morris–Pratt algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm" title="Rabin–Karp algorithm">Rabin–Karp algorithm</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Multiple string searching</th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm" title="Aho–Corasick algorithm">Aho–Corasick</a></li>
<li><a href="https://en.wikipedia.org/wiki/Commentz-Walter_algorithm" title="">Commentz-Walter algorithm</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Regular_expression" title="">Regular expression</a></th><td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="https://en.wikipedia.org/wiki/Comparison_of_regular-expression_engines" title="Comparison of regular-expression engines">Comparison of regular-expression engines</a></li>
<li><a href="https://en.wikipedia.org/wiki/Regular_grammar" title="Nondeterministic finite automaton">Regular grammar</a></li>
<li><a href="https://en.wikipedia.org/wiki/Thompson%27s_construction" title="Thompson's construction">Thompson's construction</a></li>
<li><a href="https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton" title="">Nondeterministic finite automaton</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Sequence_alignment" title="Generalized suffix tree">Sequence alignment</a></th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="https://en.wikipedia.org/wiki/Hirschberg%27s_algorithm" title="">Hirschberg's algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm" title="">Needleman–Wunsch algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm" title="Smith–Waterman algorithm">Smith–Waterman algorithm</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Data_structure" title="Data structure">Data structure</a></th><td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="https://en.wikipedia.org/wiki/Deterministic_acyclic_finite_state_automaton" title="Deterministic acyclic finite state automaton">DAFSA</a></li>
<li><a href="https://en.wikipedia.org/wiki/Suffix_array" title="Suffix array">Suffix array</a></li>
<li><a href="https://en.wikipedia.org/wiki/Suffix_automaton" title="Compressed pattern matching">Suffix automaton</a></li>
<li><a href="https://en.wikipedia.org/wiki/Suffix_tree" title="Suffix tree">Suffix tree</a></li>
<li><a href="https://en.wikipedia.org/wiki/Generalized_suffix_tree" title="">Generalized suffix tree</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rope_(data_structure)" title="Rope (data structure)">Rope</a></li>
<li><a href="https://en.wikipedia.org/wiki/Ternary_search_tree" title="Ternary search tree">Ternary search tree</a></li>
<li><a href="https://en.wikipedia.org/wiki/Trie" title="Trie">Trie</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Other</th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="https://en.wikipedia.org/wiki/Parsing" title="Parsing">Parsing</a></li>
<li><a href="https://en.wikipedia.org/wiki/Pattern_matching" title="Pattern matching">Pattern matching</a></li>
<li><a href="https://en.wikipedia.org/wiki/Compressed_pattern_matching" title="Needleman–Wunsch algorithm">Compressed pattern matching</a></li>
<li><a href="https://en.wikipedia.org/wiki/Longest_common_subsequence_problem" title="Longest common subsequence problem">Longest common subsequence</a></li>
<li><a href="https://en.wikipedia.org/wiki/Longest_common_substring_problem" title="Longest common substring problem">Longest common substring</a></li>
<li><a href="https://en.wikipedia.org/wiki/Sequential_pattern_mining" title="">Sequential pattern mining</a></li>
<li><a href="https://en.wikipedia.org/wiki/Category:String_sorting_algorithms" title="Category:String sorting algorithms">Sorting</a></li></ul>
</div></td></tr></tbody></table></div>
```