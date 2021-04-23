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
			console.log(trie_node.isEnd());
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
console.log(trieSearch.isWord("bbb")); //false
console.log(trieSearch.printAll());