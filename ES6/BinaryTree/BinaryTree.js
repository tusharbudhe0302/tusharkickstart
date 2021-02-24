class TreeNode {
    constructor(item) {
        this.key = item;
        this.left = null;
        this.right = null;
    }
}
class BinaryTreeTravelser {
    constructor() {
        this.root = null;
        this.results = [];
        this.min;
        this.max;
        this.height = 0;
        this.serializeOP = [];
        this.deserializeIndex = 0;
    }
    // Create Dummmy Binary Tree
    createDummyTree() {
        this.root = new TreeNode(1);
        this.root.left = new TreeNode(2);
        this.root.right = new TreeNode(3);
        this.root.left.left = new Node(4);
    }
    // Insert items to node
    insertItemToTreeNode(data) {
        if (!this.root) {
            this.root = new TreeNode(data);
            return;
        }
        let p = this.root;
        let prev;
        while (p) {
            prev = p;
            if (data <= p.key) {
                p = p.left;
            }
            else if (data > p.key) {
                p = p.right;
            }
        }
        // console.log(prev);
        if (prev.key <= data) {
            prev.right = new TreeNode(data);
            return this.root;
        } else {
            prev.left = new TreeNode(data);
            return this.root;
        }
    }
    // Search Item into tree
    checkItemPresentInTree(link, data) {
        if (link.key === data) {
            this.results = [];
            this.results.push(link.key);
            console.log(`Item Exist in tree`);
            return true;
        }
        if (link.left)
            this.checkItemPresentInTree(link.left, data);
        if (link.right)
            this.checkItemPresentInTree(link.right, data);
    }
    // min & max element of BST
    // To find min you shoud trvel left of left
    findMinElementInBSTIterative(link) {
        let p = link;
        let _prev;
        while (p) {
            _prev = p;
            p = p.left;
        }
        this.results = [];
        return this.min = _prev.key;
    }
    findMinElementInBSTRecurssive(link) {
        this.min = link.key;
        if (link.left)
            this.findMinElementInBSTRecurssive(link.left)
    }
    // To find max you shoud trvel right of right
    findMaxElementInBSTIterative(link) {
        let p = link;
        let _prev;
        while (p) {
            _prev = p;
            p = p.right;
        }
        this.results = [];
        return this.max = _prev.key;
    }
    findMaxElementInBSTRecurssive(link) {
        this.max = link.key;
        if (link.right)
            this.findMaxElementInBSTRecurssive(link.right)
    }
    // Display Pre Order Of Binary Search Tree Recurssive
    preorderOfBSTRecurssive(link) {
        this.results.push(link.key);
        if (link.left)
            this.preorderOfBSTRecurssive(link.left);
        if (link.right)
            this.preorderOfBSTRecurssive(link.right);
    }
    // Maximum Depth Or Height of Binary Tree
    // Height Of Tree is 0 if it has only root node  or It's height of root
    // Depth is defined as number of edges from that node.
    // Height & Max depth
    getHeight(link) {
        if (!link)
            return 0;
        else {
            this.height = this.heightHelper(link);
            return;
        }
    }
    heightHelper(node) {
        if (!node) return -1;
        let leftHeight = this.heightHelper(node.left);
        let rightHeight = this.heightHelper(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    levelOrderOfBST() {
        if (this.root === null) return this.root;
        if (this.root.left === null && this.root.right === null) return this.root;
        const queue = [];
        let current = this.root;
        queue.push(current);
        while (queue.length > 0) {
            const length = queue.length;
            const nodes = queue.splice(0, length);
            for (let i = 0; i < length; i++) {
                let node = nodes.shift()
                this.results.push(node.key);
                if (nodes.length > 0) node.next = nodes[0];
                else node.next = null;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return this.results;
    }
    levelOrderOfBSTVersion2() {
        if (this.root === null) return this.root;
        if (this.root.left === null && this.root.right === null) return this.root;
        const queue = [];
        let current = this.root;
        queue.push(current);
        while (queue.length > 0) {
            let node = queue.shift();
            this.results.push(node.key);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return this.results;
    }

    reverseOfLevelOrderOfBST() {
        if (this.root === null) return this.root;
        if (this.root.left === null && this.root.right === null) return this.root;
        const queue = [];
        let current = this.root;
        queue.push(current);
        while (queue.length > 0) {
            const length = queue.length;
            const nodes = queue.splice(0, length);
            for (let i = 0; i < length; i++) {
                let node = nodes.shift()
                this.results.push(node.key);
                if (nodes.length > 0) node.next = nodes[0];
                else node.next = null;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return this.results;
    }
    displayOption(option, data) {
        let link;
        switch (option) {
            case 1:
                link = this.root;
                this.preorderOfBSTRecurssive(link);
                console.log(`preOrderRecussiveResult : ${this.results}`);
                break;
            case 2:
                link = this.root;
                this.checkItemPresentInTree(link, data);
                console.log(`checkItemPresentInTree : ${this.results}`);
                break;
            case 3:
                link = this.root;
                this.findMinElementInBSTIterative(link);
                console.log(`findMinElementInBSTIterative : ${this.min}`);
                break;
            case 4:
                link = this.root;
                this.findMaxElementInBSTIterative(link);
                console.log(`findMaxElementInBSTIterative : ${this.max}`);
                break;
            case 5:
                link = this.root;
                this.findMinElementInBSTRecurssive(link);
                console.log(`findMinElementInBSTRecurssive : ${this.min}`);
                break;
            case 6:
                link = this.root;
                this.findMaxElementInBSTRecurssive(link);
                console.log(`findMaxElementInBSTRecurssive : ${this.max}`);
                break;
            case 7:
                link = this.root;
                this.getHeight(link);
                console.log(`height of  BST: ${this.height}`);
                break;
            case 8:
                this.levelOrderOfBSTVersion2();
                this.levelOrderOfBST();
                console.log(`Level Order Of BST : ${this.results}`);
            default:
                break;
        }
    }

    serializeBT() {
        this.serializeHelper(this.root);
    }
    serializeHelper(link) {
        if (!link) {
            this.serializeOP.push(-1);
            return;
        }
        this.serializeOP.push(link.key);
        this.serializeBT(link.left);
        this.serializeBT(link.right);
    }
    deserialzeBT() {
        this.deserialzeBTHelper(this.serializeOP);
    }
    deserialzeBTHelper(serializeArray) {
        if (this.serializeOP >= serializeArray.length) return this.root;
        this.root = new TreeNode(serializeArray[this.serializeOP++]);
        this.root.left = this.deserialzeBTHelper(serializeArray);
        this.root.right = this.deserialzeBTHelper(serializeArray);
    }
}
// Inoder Of Binary Tree
// PreOrder of Binary Tree
// Post Order Of Binay Tree

let treeTravel = new BinaryTreeTravelser();
treeTravel.insertItemToTreeNode(10);
treeTravel.insertItemToTreeNode(15);
treeTravel.insertItemToTreeNode(5);
treeTravel.insertItemToTreeNode(7);
treeTravel.insertItemToTreeNode(6);
treeTravel.insertItemToTreeNode(8);
treeTravel.insertItemToTreeNode(17);
treeTravel.insertItemToTreeNode(21);
treeTravel.insertItemToTreeNode(25);
treeTravel.displayOption(1);
treeTravel.displayOption(2, 15);
treeTravel.displayOption(3);
treeTravel.displayOption(4);
treeTravel.displayOption(5);
treeTravel.displayOption(6);
treeTravel.displayOption(7);
treeTravel.displayOption(8);