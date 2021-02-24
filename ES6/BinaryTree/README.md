## Topic :

 - [ ] Introduction
 - [ ] Traversals
 - [ ] Construction & Conversion
 - [ ] Checking & Printing
 - [ ] Summation
 - [ ] Longest Common Ancestor
 - [ ] Misc
 - [ ] Quick Links

#### Introduction :

 - [x] Binary Tree | Set 1 (Introduction)
    - Trees: Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
    - Tree Vocabulary: The topmost node is called root of the tree. The elements that are directly under an element are called its children.
    - Why Trees?
        1. 	One reason to use trees might be because you want to store information that naturally forms a hierarchy.
        2.	Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays).
        3.	Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).
        4.	Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers.
    - Main applications of trees include:
        1. Manipulate hierarchical data.
        2. Make information easy to search (see tree traversal).
        3. Manipulate sorted lists of data.
        4. As a workflow for compositing digital images for visual effects.
        5. Router algorithms
        6. Form of a multi-stage decision-making (see business chess).
    - Binary Tree: A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.
    - Binary Tree Representation in C: A tree is represented by a pointer to the topmost node in tree. If the tree is empty, then value of root is NULL.
    - A Tree node contains following parts.
        1. Data
        2. Pointer to left child
        3. Pointer to right child

 - [x] Binary Tree | Set 2 (Properties)
 
    1. The maximum number of nodes at level ‘l’ of a binary tree is 2^l-1.
    Here level is number of nodes on path from root to the node (including root and node). Level of root is 1.
    This can be proved by induction.
    For root, l = 1, number of nodes = 2^1-1 = 1
    Assume that maximum number of nodes on level l is 2^l-1
    Since in Binary tree every node has at most 2 children, next level would have twice nodes, i.e. 2 * 2^l-1
    2. Maximum number of nodes in a binary tree of height ‘h’ is 2^h – 1.
    Here height of a tree is maximum number of nodes on root to leaf path. Height of a tree with single node is considered as 1.
    This result can be derived from point 2 above. A tree has maximum nodes if all levels have maximum nodes. So maximum number of nodes in a binary tree of height h is 1 + 2 + 4 + .. + 2h-1. This is a simple geometric series with h terms and sum of this series is 2^h – 1.
    In some books, height of the root is considered as 0. In this convention, the above formula becomes 2h+1 – 1
    3. In a Binary Tree with N nodes, minimum possible height or minimum number of levels is  ? Log2(N+1) ?  
    This can be directly derived from point 2 above. If we consider the convention where height of a leaf node is considered as 0, then above formula for minimum possible height becomes   ? Log2(N+1) ? – 1
    4. A Binary Tree with L leaves has at least   ? Log2L ? + 1   levels
    A Binary tree has maximum number of leaves (and minimum number of levels) when all levels are fully filled. Let all leaves be at level l, then below is true for number of leaves L.

    L   <=  2l-1  [From Point 1]
    l =   ? Log2L ? + 1 
    where l is the minimum number of levels. 
    5. In Binary tree where every node has 0 or 2 children, number of leaf nodes is always one more than nodes with two children.

    L = T + 1
    Where L = Number of leaf nodes
        T = Number of internal nodes with two children
    See Handshaking Lemma and Tree for proof.

    In the next article on tree series, we will be discussing different types of Binary Trees and their properties.

    Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.

 - [x] Binary Tree | Set 3 (Types of Binary Tree)
    -  Full Binary Tree: A Binary Tree is full if every node has 0 or 2 children. Following are examples of a full binary tree. We can also say a full binary tree is a binary tree in which all nodes except leaves have two children.
    - Complete Binary Tree: A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible.
    - Perfect Binary Tree: A Binary tree is Perfect Binary Tree in which all internal nodes have two children and all leaves are at the same level.
    - Balanced Binary Tree:  A binary tree is balanced if the height of the tree is O(Log n) where n is the number of nodes. For Example, AVL tree maintains O(Log n) height by making sure that the difference between heights of left and right subtrees is atmost 1. Red-Black trees maintain O(Log n) height by making sure that the number of Black nodes on every root to leaf paths are same and there are no adjacent red nodes. Balanced Binary Search trees are performance wise good as they provide O(log n) time for search, insert and delete.
 - [ ] Handshaking Lemma and Interesting Tree Properties
 - [ ] Enumeration of Binary Trees
 - [ ] Insertion in a Binary Tree
 - [ ] Deletion in a Binary Tree
 - [ ] BFS vs DFS for Binary Tree
 - [ ] Binary Tree (Array implementation)
 - [ ] AVL with duplicate keys
 - [ ] Applications of tree data structure
 - [ ] Applications of Minimum Spanning Tree Problem
 - [ ] Continuous Tree
 - [ ] Foldable Binary Trees
 - [ ] Expression Tree
 - [ ] Evaluation of Expression Tree
 - [ ] Symmetric Tree (Mirror Image of itself)


#### Traversals :

 - [ ] Tree Traversals
 - [ ] Inorder Tree Traversal without Recursion
 - [ ] Inorder Tree Traversal without recursion and without stack!
 - [ ] Print Postorder traversal from given Inorder and Preorder traversals
 - [ ] Find postorder traversal of BST from preorder traversal
 - [ ] Find all possible binary trees with given Inorder Traversal
 - [ ] Replace each node in binary tree with the sum of its inorder predecessor and successor
 - [ ] Populate Inorder Successor for all nodes
 - [ ] Inorder Successor of a node in Binary Tree
 - [ ] Find n-th node of inorder traversal
 - [ ] Find n-th node in Postorder traversal of a Binary Tree
 - [ ] Level Order Tree Traversal
 - [ ] Level order traversal in spiral form
 - [ ] Level order traversal line by line
 - [ ] Level order traversal with direction change after every two levels
 - [ ] Reverse Level Order Traversal
 - [ ] Reverse tree path
 - [ ] Perfect Binary Tree Specific Level Order Traversal
 - [ ] Perfect Binary Tree Specific Level Order Traversal | Set 2
 - [ ] Reverse alternate levels of a perfect binary tree
 - [ ] Morris traversal for Preorder
 - [ ] Iterative Preorder Traversal
 - [ ] Iterative Postorder Traversal | Set 1 (Using Two Stacks)
 - [ ] Iterative Postorder Traversal | Set 2 (Using One Stack)
 - [ ] Postorder traversal of Binary Tree without recursion and without stack
 - [ ] Diagonal Traversal of Binary Tree
 - [ ] Iterative diagonal traversal of binary tree
 - [ ] Boundary Traversal of binary tree
 - [ ] Density of Binary Tree in One Traversal
 - [ ] Calculate depth of a full Binary tree from Preorder
 - [ ] Number of Binary Trees for given Preorder Sequence length
 - [ ] Modify a binary tree to get Preorder traversal using right pointers only

#### Construction & Conversion :

 - [ ] Construct Tree from given Inorder and Preorder traversals
 - [ ] Construct a tree from Inorder and Level order traversals
 - [ ] Construct Complete Binary Tree from its Linked List Representation
 - [ ] Construct a complete binary tree from given array in level order fashion
 - [ ] Construct Full Binary Tree from given preorder and postorder traversals
 - [ ] Construct Full Binary Tree using its Preorder traversal and Preorder traversal of its mirror tree
 - [ ] Construct a special tree from given preorder traversal
 - [ ] Construct tree from ancestor matrix
 - [ ] Construct Ancestor Matrix from a Given Binary Tree
 - [ ] Construct Special Binary Tree from given Inorder traversal
 - [ ] Construct Binary Tree from given Parent Array representation
 - [ ] Construct a Binary Tree from Postorder and Inorder
 - [ ] Create a Doubly Linked List from a Ternary Tree
 - [ ] Creating a tree with Left-Child Right-Sibling Representation
 - [ ] Prufer Code to Tree Creation
 - [ ] If you are given two traversal sequences, can you construct the binary tree?
 - [ ] Construct the full k-ary tree from its preorder traversal
 - [ ] Construct Binary Tree from String with bracket representation
 - [ ] Linked complete binary tree & its creation
 - [ ] Convert a given Binary Tree to Doubly Linked List | Set 1
 - [ ] Convert a given Binary Tree to Doubly Linked List | Set 2
 - [ ] Convert a given Binary Tree to Doubly Linked List | Set 3
 - [ ] Convert a given Binary Tree to Doubly Linked List | Set 4
 - [ ] Convert an arbitrary Binary Tree to a tree that holds Children Sum Property
 - [ ] Convert left-right representation of a binary tree to down-right
 - [ ] Convert a given tree to its Sum Tree
 - [ ] Change a Binary Tree so that every node stores sum of all nodes in left subtree
 - [ ] Write an Efficient Function to Convert a Binary Tree into its Mirror Tree
 - [ ] Convert a Binary Tree into Doubly Linked List in spiral fashion
 - [ ] Convert a Binary Tree to a Circular Doubly Link List
 - [ ] Convert a tree to forest of even nodes
 - [ ] Convert a given Binary tree to a tree that holds Logical AND property
 - [ ] Convert Ternary Expression to a Binary Tree
 - [ ] Flip Binary Tree
 - [ ] Minimum swap required to convert binary tree to binary search tree

#### Checking & Printing :

 - [ ] Check for Children Sum Property in a Binary Tree
 - [ ] Check if a given Binary Tree is SumTree
 - [ ] Check sum of Covered and Uncovered nodes of Binary Tree
 - [ ] Check if two nodes are cousins in a Binary Tree
 - [ ] Check if all leaves are at same level
 - [ ] Check if removing an edge can divide a Binary Tree in two halves
 - [ ] Check if given Preorder, Inorder and Postorder traversals are of same tree
 - [ ] Given level order traversal of a Binary Tree, check if the Tree is a Min-Heap
 - [ ] Check if leaf traversal of two Binary Trees is same?
 - [ ] Check if a given Binary Tree is SumTree
 - [ ] Check whether a given binary tree is perfect or not
 - [ ] Check whether a binary tree is a full binary tree or not
 - [ ] Check whether a binary tree is a full binary tree or not | Iterative Approach
 - [ ] Check whether a given Binary Tree is Complete or not | Set 1 (Iterative Solution)
 - [ ] Check if a given Binary Tree is height balanced like a Red-Black Tree
 - [ ] Check if a binary tree is subtree of another binary tree | Set 2
 - [ ] Check if a Binary Tree (not BST) has duplicate values
 - [ ] Check if a Binary Tree contains duplicate subtrees of size 2 or more
 - [ ] Check if a given graph is tree or not
 - [ ] Check if two trees are Mirror
 - [ ] Iterative method to check if two trees are mirror of each other
 - [ ] Write Code to Determine if Two Trees are Identical
 - [ ] Iterative function to check if two trees are identical
 - [ ] Check for Symmetric Binary Tree (Iterative Approach)
 - [ ] Check if there is a root to leaf path with given sequence
 - [ ] Print middle level of perfect binary tree without finding height
 - [ ] Print cousins of a given node in Binary Tree
 - [ ] Given a binary tree, print out all of its root-to-leaf paths one per line
 - [ ] Print the longest leaf to leaf path in a Binary tree.
 - [ ] Print path from root to a given node in a binary tree
 - [ ] Print root to leaf paths without using recursion
 - [ ] Print all root to leaf paths with there relative positions
 - [ ] Print the nodes at odd levels of a tree
 - [ ] Print all full nodes in a Binary Tree

#### Summation :

 - [ ] Check for Children Sum Property in a Binary Tree
 - [ ] Check if a given Binary Tree is SumTree
 - [ ] Check sum of Covered and Uncovered nodes of Binary Tree
 - [ ] Check if two nodes are cousins in a Binary Tree
 - [ ] Check if all leaves are at same level
 - [ ] Check if removing an edge can divide a Binary Tree in two halves
 - [ ] Check if given Preorder, Inorder and Postorder traversals are of same tree
 - [ ] Given level order traversal of a Binary Tree, check if the Tree is a Min-Heap
 - [ ] Check if leaf traversal of two Binary Trees is same?
 - [ ] Check if a given Binary Tree is SumTree
 - [ ] Check whether a given binary tree is perfect or not
 - [ ] Check whether a binary tree is a full binary tree or not
 - [ ] Check whether a binary tree is a full binary tree or not | Iterative Approach
 - [ ] Check whether a given Binary Tree is Complete or not | Set 1 (Iterative Solution)
 - [ ] Check if a given Binary Tree is height balanced like a Red-Black Tree
 - [ ] Sum of all nodes in a binary tree
 - [ ] Sum of all the parent nodes having child node x
 - [ ] Find sum of all left leaves in a given Binary Tree
 - [ ] Find sum of all right leaves in a given Binary Tree
 - [ ] Find sum of all nodes of the given perfect binary tree
 - [ ] Diagonal Sum of a Binary Tree
 - [ ] Find if there is a pair in root to a leaf path with sum equals to root’s data
 - [ ] Sum of nodes on the longest path from root to leaf node
 - [ ] Remove all nodes which don’t lie in any path with sum>= k
 - [ ] Find the maximum path sum between two leaves of a binary tree
 - [ ] Find the maximum sum leaf to root path in a Binary Tree
 - [ ] Maximum sum of nodes in Binary tree such that no two are adjacent
 - [ ] Maximum sum from a tree with adjacent levels not allowed
 - [ ] Find largest subtree sum in a tree
 - [ ] Print all k-sum paths in a binary tree
 - [ ] Sum of heights of all individual nodes in a binary tree
 - [ ] Subtree with given sum in a Binary Tree
 - [ ] Count subtress that sum up to a given value x
 - [ ] Sum of nodes at maximum depth of a Binary Tree
 - [ ] Difference between sums of odd level and even level nodes of a Binary Tree
 - [ ] Find maximum level sum in Binary Tree
 - [ ] Maximum spiral sum in Binary Tree
 - [ ] Sum of nodes at k-th level in a tree represented as string
 - [ ] Sum of all leaf nodes of binary tree
 - [ ] Sum of leaf nodes at minimum level
 - [ ] Root to leaf path sum equal to a given number
 - [ ] Sum of all the numbers that are formed from root to leaf paths
 - [ ] Merge Two Binary Trees by doing Node Sum (Recursive and Iterative)
 - [ ] Vertical Sum in a given Binary Tree | Set 1
 - [ ] Vertical Sum in Binary Tree
 - [ ] Find root of the tree where children id sum for every node is given
 - [ ] Replace each node in binary tree with the sum of its inorder predecessor and successor
 - [ ] Find largest subtree sum in a tree

#### Longest Common Ancestor :

 - [ ] Lowest Common Ancestor in a Binary Tree | Set 1
 - [ ] Lowest Common Ancestor in a Binary Tree | Set 2 (Using Parent Pointer)
 - [ ] Lowest Common Ancestor in a Binary Tree | Set 3
 - [ ] Find distance between two nodes of a Binary Tree
 - [ ] Print common nodes on path from root (or common ancestors)
 - [ ] Find LCA in Binary Tree using RMQ
 - [ ] Maximum difference between node and its ancestor in Binary Tree
 - [ ] Print the path common to the two paths from the root to the two given nodes
 - [ ] Query for ancestor-descendant relationship in a tree
 - [ ] Iterative method to find ancestors of a given binary tree
 - [ ] Print Ancestors of a given node in Binary Tree
 - [ ] Kth ancestor of a node in binary tree

#### Misc :

 - [ ] Succinct Encoding of Binary Tree
 - [ ] Binary Indexed Tree : Range Updates and Point Queries
 - [ ] The Great Tree-List Recursion Problem
 - [ ] Custom Tree Problem
 - [ ] Tree Isomorphism Problem
 - [ ] Ways to color a skewed tree such that parent and child have different colors
 - [ ] Write a program to Delete a Tree
 - [ ] Delete leaf nodes with value as x
 - [ ] Non-recursive program to delete an entire binary tree
 - [ ] Write a program to Calculate Size of a tree
 - [ ] Iterative program to Calculate Size of a tree
 - [ ] Write a Program to Find the Maximum Depth or Height of a Tree
 - [ ] Iterative Method to find Height of Binary Tree
 - [ ] Height of a complete binary tree (or Heap) with N nodes
 - [ ] Height of binary tree considering even level leaves only
 - [ ] Find Height of Binary Tree represented by Parent array
 - [ ] How to determine if a binary tree is height-balanced?
 - [ ] Find height of a special binary tree whose leaf nodes are connected
 - [ ] Height of a generic tree from parent array
 - [ ] Diameter of a Binary Tree
 - [ ] Diameter of a Binary Tree in O(n) [A new method]
 - [ ] Possible edges of a tree for given diameter, height and vertices
 - [ ] Deepest right leaf node in a binary tree | Iterative approach
 - [ ] Sink Odd nodes in Binary Tree
 - [ ] Depth of the deepest odd level node in Binary Tree
 - [ ] Find depth of the deepest odd level leaf node
 - [ ] Find the Deepest Node in a Binary Tree
 - [ ] Deepest left leaf node in a binary tree | iterative approach
 - [ ] Deepest left leaf node in a binary tree
 - [ ] Find Minimum Depth of a Binary Tree
 - [ ] Replace node with depth in a binary tree
 - [ ] Maximum width of a binary tree
 - [ ] Vertical width of Binary tree | Set 1
 - [ ] Vertical width of Binary tree | Set 2
 - [ ] Find if given vertical level of binary tree is sorted or not
 - [ ] Check if a binary tree is sorted level-wise or not
 - [ ] Bottom View of a Binary Tree
 - [ ] Program to count leaf nodes in a binary tree
 - [ ] Iterative program to count leaf nodes in a Binary Tree
 - [ ] Count Non-Leaf nodes in a Binary Tree
 - [ ] Count half nodes in a Binary tree (Iterative and Recursive)
 - [ ] Count full nodes in a Binary tree (Iterative and Recursive)
 - [ ] Connect Nodes at same Level (Level Order Traversal)
 - [ ] Connect nodes at same level using constant extra space
 - [ ] Connect nodes at same level
 - [ ] Level with maximum number of nodes
 - [ ] Averages of Levels in Binary Tree
 - [ ] Largest value in each level of Binary Tree
 - [ ] Smallest value in each level of Binary Tree
 - [ ] Get Level of a node in a Binary Tree
 - [ ] Get level of a node in binary tree | iterative approach
 - [ ] Find mirror of a given node in Binary tree
 - [ ] Find largest subtree having identical left and right subtrees
 - [ ] Find Count of Single Valued Subtrees
 - [ ] Closest leaf to a given node in Binary Tree
 - [ ] Find the closest leaf in a Binary Tree
 - [ ] Iterative Search for a key ‘x’ in Binary Tree
 - [ ] Given a binary tree, how do you remove all the half nodes?
 - [ ] Swap Nodes in Binary tree of every k’th level
 - [ ] Pairwise Swap leaf nodes in a binary tree
 - [ ] Root to leaf paths having equal lengths in a Binary Tree
 - [ ] Root to leaf path with maximum distinct nodes
 - [ ] Maximum Consecutive Increasing Path Length in Binary Tree
 - [ ] Longest Path with Same Values in a Binary Tree
 - [ ] Remove nodes on root to leaf paths of length < K
 - [ ] Longest consecutive sequence in Binary tree
 - [ ] Path length having maximum number of bends
 - [ ] Number of turns to reach from one node to other in binary tree
 - [ ] Create loops of even and odd values in a binary tree
 - [ ] Find first non matching leaves in two binary trees
 - [ ] Get maximum left node in binary tree
 - [ ] Find a number in minimum steps
 - [ ] Factor Tree of a given Number
 - [ ] Number of full binary trees such that each node is product of its children
 - [ ] Number of subtrees having odd count of even numbers
 - [ ] Find distance from root to given node in a binary tree
 - [ ] Find distance between two given keys of a Binary Tree
 - [ ] Find right sibling of a binary tree with parent pointers
 - [ ] Find next right node of a given key
 - [ ] Tilt of Binary Tree
 - [ ] Find All Duplicate Subtrees
 - [ ] Top three elements in binary tree
 - [ ] Find maximum (or minimum) in Binary Tree
 - [ ] Extract Leaves of a Binary Tree in a Doubly Linked List
 - [ ] Minimum no. of iterations to pass information to all nodes in the tree


### Quick Links :

 - [ ] Practice Problems on Trees
 - [ ] Quizzes on Binary Trees
 - [ ] Videos on Trees