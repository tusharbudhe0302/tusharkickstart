class TreeNode {
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insertItemToBST(item) {
        if (!this.root) {
            this.root = new TreeNode(item);
            return this.root;
        }
        let _current = this.root;
        let _prev;
        while (_current) {
            _prev = _current;
            if (item < _current.key) {
                _current = _current.left
            }
            else if (item > _current.key) {
                _current = _current.right;
            }
        }
        if (item < _prev.key) {
            _prev.left = new TreeNode(item);
        } else {
            _prev.right = new TreeNode(item);
        }
        return this.root;
    }
    printLevelOrderOfBST() {
        console.log('Level Order Of BST');
        let _current = this.root;
        let Q = [];
        Q.push(_current);
        while (Q.length > 0) {
            let _p = Q.shift();
            console.log(_p.key);
            if (_p.left) {
                Q.push(_p.left);
            }
            if (_p.right) {
                Q.push(_p.right);
            }
        }
    }
    sumOfK(root, k) {
        console.log(`Inorder of BST Using recursion`);
        this.inOrderBSTR(root, k);
    }
    inOrderBSTR(link) {
        if (!link) return;
        this.inOrderBSTR(link.left);
        console.info(link.key)
        this.inOrderBSTR(link.right);
    }
}
let newBST = new BST();
newBST.insertItemToBST(50);
newBST.insertItemToBST(70);
newBST.insertItemToBST(40);
newBST.insertItemToBST(35);
newBST.insertItemToBST(45);
let root = newBST.insertItemToBST(90);
newBST.printLevelOrderOfBST();
newBST.sumOfK(root, 135);