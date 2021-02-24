##### Construct Binary Tree
Construct|BST| BT
---|---|---|
PreOrder| Yes |NO|
InOrder| NO |NO|
PostOrder| NO |NO|
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
```
- Insert element in BST using JS **proptype without previous pointer. Can't miss break statment** approach
```javascript
var binarySearchTree = function() {
	this.root = null;
};
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
class treeNode {
	constructor(i) {
		this.val = i;
		this.left = null;
		this.right = null;
	}
}
class binarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(i) {
		if (!this.root) return this.root = new treeNode(i);
		let p = this.root;
		let _prev = null;
		while (p) {
			_prev = p;
			if (i <= p.val) {
				p = p.left;
			} else {
				p = p.right;
			}
		}
		if (i <= _prev.val) _prev.left = new treeNode(i);
		else _prev.right = new treeNode(i);
		return this.root;
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
	minimum(node) {
		if (node.left)
			minimum(node.left);
		else node
	}
	maximum(node) {
		if (node.right)
			minimum(node.right);
		else return node
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
	preOrderIterative(root){
	    
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
bst.insertRecursive(8);
bst.insertRecursive(32);
bst.insertRecursive(65);
bst.insertRecursive(97);
bst.insertRecursive(28);
bst.insertRecursive(54);
bst.insertRecursive(82);
bst.insertRecursive(93);
bst.insertRecursive(29);
bst.insertRecursive(76);
bst.insertRecursive(80);
// let resultTemp = bst.insertRecursive(2);
// console.log(resultTemp);
```
- OP Will be same for all cases
```javascript
let bst = new binarySearchTree();
bst.insertItem(5);
bst.insertItem(7);
bst.insertItem(9);
bst.insertItem(4);
let resultTemp = bst.insertItem(2);
console.log(resultTemp);
treeNode {
  val: 5,
  left: treeNode {
    val: 4,
    left: treeNode { val: 2, left: null, right: null },
    right: null
  },
  right: treeNode {
    val: 7,
    left: null,
    right: treeNode { val: 9, left: null, right: null }
  }
}
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
const rightSideViewTushar = ()=> {
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
			if (result[level].length < 1)
				result[level].push(node.val);

			if (node.right) queue.unshift({
				node: node.right, level: level + 1
			});
			else if (node.left) queue.unshift({
				node: node.left, level: level + 1
			});
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
		if (!root) return result;
		const isLeaf = (node) => {
			return !node.left && !node.right;
		}
		const dfs = (node, target) => {
			if (result) return true;
			target -= node.val;
			if (isLeaf(node) && target === 0) {
				result = true;
				return;
			}
			if (node.left) dfs(node.left, target);
			if (node.right) dfs(node.right, target)
		}
		return dfs(root, targetSum);
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

```jvascript
const uniValueCount = (node) => {

	let result = 0;
	if (!node) return result;

	const dfs = (node) => {
		if (isLeaf(node)) {
			result++;
			return true;
		}
		let left = null,
			right = null;
		if (node.left)
			left = dfs(node.left);
		if (node.right)
			right = dfs(node.right);
            
		if (left && right && node.val == node.left.val && node.val == node.right.val) {
		    console.log(`${node.val}`);
			result++;
			return true;
		}

		if (left == null && right && node.val == node.right.val) {
		     console.log(`left: ${node.val} result: ${result}`);
			result++;
			return true;
		}
		if (right == null && left && node.val == node.left.val) {
		     console.log(`right: ${node.val}`);
			result++;
			return true;
		}
        return false;
	}
	dfs(node);
	return result;
}
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