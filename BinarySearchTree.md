##### Construct Binary Tree
Construct|BST| BT
---|---|---|
PreOrder| Yes |NO|
InOrder| NO |NO|
PostOrder| Yes |NO|
PreOrder + PostOrder| NO |NO|
PreOrder + InOrder | NO |Yes|
PostOrder + InOrder| NO |Yes|
#### Binary Search Tree(BST)
 - Non linear DS
- common code
- Not Cycle , Otherwise Graph
```javascript 
function treeNode(i) {
	this.val = i;
	this.left = null;
	this.right = null;
}
class TreeNode {
	constructor(i) {
		this.val = i;
		this.left = null;
		this.right = null;
	}
}
```
- Insert element in BST using JS **proptype without previous pointer. Can't miss break statment** approach
```javascript
var binarySearchTree = function() {
	this.root = null;
}();
binarySearchTree.prototype.insertItem = function(i) {
	if (!this.root) return this.root = new treeNode(i);
	var p = this.root;
	while (p) {
		if (i <= p.val) {
			if (p.left) p = p.left;
			else{
			  p.left = new treeNode(i);
			  break;// Can't ignore
			} 
		} else {
			if (p.right) p = p.right;
			else{
			  p.right = new treeNode(i);
			  break;// Can't ignore
			} 
		}
	}
	return this.root;
}
```
- Trie data structure Algorithm
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
```
- Smple Example
```javascript
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
- Insert element in BST using JS **proptype using previous pointer** approach
```javascript
var binarySearchTree = function() {
	this.root = null;
}
binarySearchTree.prototype.insertItem = function(i) {
	if (!this.root) return this.root = new treeNode(i);
	var p = this.root;
	var _prev = null;
	while (p) {
		if (i <= p.val) {
			_prev = p;
			p = p.left;
		} else {
			_prev = p;
			p = p.right;
		}
	}
	if (i <= _prev.val) _prev.left = new treeNode(i);
	else _prev.right = new treeNode(i);
	return this.root;
}
```
- Insert element in BST using JS **hoisting/abstract using previous pointer** approach
```javascript
var binarySearchTree = function() {
	this.root = null;
	var _insert = function(i) {
		if (!this.root) return this.root = new treeNode(i);
		var p = this.root;
		var _prev = null;
		while (p) {
			if (i <= p.val) {
				_prev = p;
				p = p.left;
			} else {
				_prev = p;
				p = p.right;
			}
		}
		if (i <= _prev.val) _prev.left = new treeNode(i);
		else _prev.right = new treeNode(i);
		return this.root;
	}
	return {
		insertItem: _insert
	}
}
```

- ES6 Classes

```javascript
class binarySearchTree {
	constructor() {
		this.root = null;
	}
	insertRecursiveHelper(_current, newNode) {
		// console.log(_current);
		if (newNode.val <= _current.val) {
			if (!_current.left)
				_current.left = newNode;
			else
				this.insertRecursiveHelper(_current.left, newNode);
		} else {
			if (!_current.right)
				_current.right = newNode;
			else
				this.insertRecursiveHelper(_current.right, newNode);
		}
	}
	insertRecursive(i) {
		let newNode = new treeNode(i);
		if (!this.root) return this.root = newNode;
		this.insertRecursiveHelper(this.root, newNode);
		return this.root;
	}
	preOrder(root) {
		if (!root) return;
		console.log(root.val);
		preOrder(root.left);
		preOrder(root.right);
	}
	inOrder(root) {
		if (!root) return;
		preOrder(root.left);
		console.log(root.val);
		preOrder(root.right);
	}
	postOrder(root) {
		if (!root) return;
		preOrder(root.left);
		preOrder(root.right);
		console.log(root.val);
	}

	inOrderSucessor(root, p) {
		if (!root) return null;
		if (p.right) {
			let curr = p.right
			while (curr.left) {
				curr = curr.left;
			}
		} else {
			let curr = root;
			let _prev = null;
			while (curr.val != p.val) {
				if (p.val < curr.val) {
					_prev = curr;
					curr = curr.left;
				} else {

					curr = curr.right;
				}
			}
		}
	}
}
let bst = new binarySearchTree();
bst.insertRecursive(44);
bst.insertRecursive(17);
bst.insertRecursive(88);
```

```javascript

let treeNode = new TreeNode(15);
treeNode.left = new TreeNode(17);
treeNode.right = new TreeNode(19);
treeNode.left.left = new TreeNode(12);
treeNode.left.right = new TreeNode(21);
treeNode.right.left = new TreeNode(18);

const inOrderIterative = (node) => {
	let p = node;
	var stack = [];
	while (p || stack.length > 0) {
		while (p) {
			stack.push(p);
			p = p.left;
		}
		p = stack.pop(); // Must assignback `p`
		if (p) {
			console.log(p.val);
			p = p.right;
		}
	}
}
inOrderIterative(treeNode);
const preOrder = (node) => {
	var stack = [];
	var p = node;
	stack.push(p);
	while (p || stack.length > 0) {
		p = stack.pop();
		if (p)
			console.log(p.val);
		if (p && p.right) stack.push(p.right);
		if (p && p.left) stack.push(p.left);
	}
}
preOrder(treeNode);

// Using 2 stack pointer
const postorderIterative = (root) => {
	// create an empty stack and push the root node
	var s = [];
	s.push(root);
	// create another stack to store postorder traversal
	var out = [];
	// loop till stack is empty
	while (s.length > 0) {
		// pop a node from the stack and push the data into the output stack
		var curr = s.pop();
		// console.log(curr);
		out.push(curr.val);
		// push the left and right child of the popped node into the stack
		if (curr.left) {
			s.push(curr.left);
		}
		if (curr.right) {
			s.push(curr.right);
		}
	}
	// print postorder traversal
	while (out.length > 0) {
		let temp = out.pop();
		console.log(temp);
	}
}
const postOrderByMorris = (node) => {
	var p = node;
	var q = node;
	var stack = [];
	while (p||s.length > 0) {
		while (p.left) {
			stack.unshift(p);
			p = p.left;
		}
		while (!p.right || p.right == q) {
			console.log(p.val);
			q = p;
			if (stack.length === 0) return; // maske sure you return from here
			p = stack.shift();
		}
		stack.unshift(p);
		p = p.right;
	}
}
postorderIterative(treeNode);
console.log(`++++=+++++`)
postOrderByMorris(treeNode);
```

- Sucessor & Predecessor in BST
    Create inorder of BST You will get BST in sorted order
    - Sucessor/Ancestor (Next) element . Leftmost element in right sub tree or parent of this item itself
    - Predecessor/Decendent (Previous) element . Right element in left sub tree or  parent of this item itself
- Deletion of node in BST
     - Search elemnt in BST.
     -  Case 1: It's leaf node
            No Child. Drirectly go and delete node. 
        ```javascript
        delete current;
        ```
     -  Case 2: It has either left or right sub tree
        ```javascript
        if(curr.left && !curr.right) child =  curr.left
        else if(!curr.left && curr.right) child =  curr.right
        else `Go to Case 3`:
        current = child;
        delete child
        ```
     -  Case 3: If it has both nodes
        - Get inorder successor 
        - Copy value to current node
        - Delete sucessor of tree
        ```javascript
        let sucessor = null;
        if(curr.right) 
        {
        let _prev = curr.right
            while(curr.left){
                _prev = curr.left;
                curr = curr.left;
            }
            swap(node.va, _prev.val);
            delete _prev;
            return ;
        }
        ```
 - Construct Binary Tree PreOrder,Inorder,PostOrder combinations
    **Note**: Must need `Inorder` of binary tee
    - Preorder + Inorder (Possible)
    - PostOrder + Inorder (Possible)
    - Only PreOrder (Possible)
        Because next will be(h`*`(i+1) left node &  h`*`(i+2) right node). h-> Height
    - Only PostOrder (Possible)
        Because next will be(h`*`(i-1) left node &  h`*`(i-2) right node). h-> Height
    - Only Inorder (**Not** Possible)
    - PostOrder + PreOrder (**Not** Possible)
    - 
####  Class Problems 
- Level Order

```javascript
const levelOrder = ()=> {
		let queue = [];
		let result = [];
		queue.unshift({
			node: this.root, level: 0
		});
		while (queue.length > 0) {
			let item = queue.pop();
			// let item = queue.shift();
			let node = item.node;
			let level = item.level;
			if (result.length < level + 1) {
				result[level] = [];
			}
			result[level].push(node.val);
			if (node.left) queue.unshift({
				node: node.left, level: level + 1
			});
			if (node.right) queue.unshift({
				node: node.right, level: level + 1
			});
			// if(node.left)queue.push({node:node.left,level:level+1});
			// if(node.right)queue.push({node:node.right,level:level+1});
		}
		console.log(result);
	}
```


```javascript
const rightSideView = () => {
		let queue = [];
		let result = [];
		queue.unshift({
			node: this.root, level: 0
		});
		while (queue.length > 0) {
			let item = queue.pop();
			// let item = queue.shift();
			let node = item.node;
			let level = item.level;
			if (result.length < level + 1) {
				result[level] = [];
			}
			result[level].push(node.val);
			if (node.left) queue.unshift({
				node: node.left, level: level + 1
			});
			if (node.right) queue.unshift({
				node: node.right, level: level + 1
			});
		}
		for (let i = 0; i < result.length; i++) {
			result[i] = result[i][result[i].length - 1];
		}
		console.log(result);
	}
```
- Has Sum Of Path True Or False

```javascript
var hasPathSum = function(root, targetSum) {
	let result = false;
	let resultSum = 0;
	if (!root) return result;
	const isLeafNode = (node) => {
		return !node.left && !node.right
	}
	// Path always tart with root element
	const dfs = (node, targetSum) => {
		targetSum -= node.val ? node.val : 0; // preorder of BT
		console.log(`node.val ${node.val} targetSum: ${targetSum}`);
		if (isLeafNode(node) && targetSum === 0) {
			result = true;
		}
		if (node.left)
			dfs(node.left, targetSum)
		if (node.right)
			dfs(node.right, targetSum);

	}
	dfs(root, targetSum, root.val);

	return result;
};

```	
- hasPathSumII

```javascript	
	var hasPathSumII = function(root, targetSum) {
		let result = [];
		if (!root) return result;
		const isLeaf = (node) => {
			return !node.left && !node.right;
		}
		const dfs = (node, target,path) => {
		    	target -= node.val;
		    	path.push(node.val);
			if (result) return true;
		
			if (isLeaf(node) && target === 0) {
				result.push(path.slice());
				return;
			}
			if (node.left) dfs(node.left, targe,patht);
			if (node.right) dfs(node.right, target,path);
			return result
		}
		return dfs(root, targetSum,[]);
	};
```

- Diameter Of BST

```javascript
	const diameterOfBST = (root) => {
	let result = 0;
	const isLeaf = (node) => {
		if (!node.left && !node.right) return 0;
	}
	if (!root) return result;
	const dfs = (node) => {
		if (isLeaf(node)) return 0;
		let left = 0,
			right = 0,
			diameter = 0;
		if (node.left) {
			left = dfs(node.left);
			diameter += left;
		}
		if (node.right) {
			right = dfs(node.right);
			diameter += right;
		}
 		console.log(`result: ${result}`);
		result = Math.max(result, diameter);
		return Math.max(left, right) + 1;
	}
	dfs(root);
	return result;
}
```
- Unique Value Sub Tree

```javascript
var countUnivalSubtrees = function(root) {
	let result = 0;
	const isLeafNode = (n) => {
		return !n.left && !n.right;
	};
	const dfs = (node) => {
		if (isLeafNode(node)) {
			result++;
			return true;
		}
		let left = null;
		let right = null;
		if (node.left)
			left = dfs(node.left);
		if (node.right)
			right = dfs(node.right);
		if (left && right && node.val === node.left.val && node.val === node.right.val) {
			result++;
			return true;
		}
		if (left && !right && node.val === node.left.val) {
			result++;
			return true;
		}
		if (!left && right && node.val === node.right.val) {
			result++;
			return true;
		}
		return false;
	}
	df(root);
	return result;
};
```
	
### 652 : Find duplicate Leetcode N2L4R5
	
```javascript
	function createTree(input) {
	// find the root
    let root = new TreeNode(findRoot(input))
    let	leftInput = findLeftInput(input, root);
    let rightInput = findRightInput(input, root);
	root.left = createTree(leftInput);
	root.right = createTree(rightInput);
}
function findRoot(input) {
	return root;
}
function findLeftInput(input, root) {
	return leftInput;
}
function findRightInput(input, root) {
	return rightInput;
}
```

- Construct BST from PreOrder Of BST

```javascript
function treeNode(i) {
	this.val = i;
	this.left = null;
	this.right = null;
}
const constructBSTTushar = (preorder, start = 0, end = preorder.length - 1) => {
	// base case
	if (start > end) {
		return null;
	}
	// Construct the root node of the subtree formed by keys of the
	// preorder sequence in range `[start, end]`
	let node = new treeNode(preorder[start]);
	// search the index of the first element in the current range of preorder
	// sequence larger than the root node's value
	let i;
	for (i = start; i <= end; i++) {
		if (preorder[i] > node.val) {
			break;
		}
	}
	// recursively construct the left subtree
	node.left = constructBST(preorder, start + 1, i - 1);
	// recursively construct the right subtree
	node.right = constructBST(preorder, i, end);
	// return current node
	return node;
}
console.log(constructBST([8, 5, 1, 7, 10, 9, 12]));
```

- Construct BST from preorder & inorder

```javascript
var buildTree = function(preorder, inorder) {
	const helper = (preStart, inStart, inEnd, preorder, inorder) => {
    if (preStart > preorder.length - 1 || inStart > inEnd) return null;
    let root = new TreeNode(preorder[preStart]);
    let inIndex = 0;
    for (let i = inStart; i <= inEnd; i ++) {
        if (root.val == inorder[i]) inIndex = i;
    }
    root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
	
    return root;
	}
   return helper(0, 0, inorder.length - 1, preorder, inorder)
 
};

```

### Questions need to unserstand
1. https://leetcode.com/problems/path-sum-iv/
2. https://uplevel.interviewkickstart.com/resource/rc-codingproblem-10344-117834-51-322
