##### Selection Sort
- Find miminum Index
- Swap miminum with `i'th` element 
- Set `j = i+1`
- - Time O(n^2) Space O(1) 

```javascript
// Find miminum Index and swap miminum with i'th element & j = i+1
var selectionSort = function(a) {
	let n = a.length;
	for (let i = 0; i < n; i++) {
		let min = i;
		// j = i + 1
		for (let j = i + 1; j < n; j++) {
			if (a[j] < a[min]) {
				min = j;
			}
		}
		if (min != i) {
			[a[min], a[i]] = [a[i], a[min]];
		}
	}
	return a;
}
let result, a;
a = [10, 15, 12, 11, 19, 25, 1]; 
result = selectionSort(a);//[1,10,11,12,15,19,25]
console.log(result);
```

##### Bubble Sort
- Move larget element to right(right shift) i.e. `swap with adjacent right element.`
- Inner loop should start from `0` i.e. `j=0`
- - Time O(n^2) Space O(1) 

```javascript
// Largest element should be atend.Compare with adjacent element. `j` loop should be start from 0
var bubbleSort = function(a) {
	var n = a.length;
	var isSwapped = false;
	for (let i = 0; i < n - 1; i++) {
		isSwapped = false;
		// j=0;
		for (let j = 0; j < n - 1; j++) {
			if (a[j] > a[j + 1]) {
				isSwapped = true;
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
			}
		}
		if (!isSwapped) break;
	}
	return a;
}
let result, a;
a = [10, 15, 12, 11, 19, 25, 1];
result = bubbleSort(a);
console.log(result);//[1,10,11,12,15,19,25]
```

#### Insertion Sort

- Common Logic

```javascript
//i = 1 to n; j = i
while (j > 0 && a[j] < a[j - 1]) {
	[a[j - 1], a[j]] = [a[j], a[j - 1]]
	j--;
}
```

- Recurssion (top-down)

```javascript
const insertionSort = (a, n = a.length) => {
	if (n < 1) return a;
	insertionSort(a, n - 1);
	let j = n;
	while (j > 0 && a[j] < a[j - 1]) {
		[a[j], a[j - 1]] = [a[j - 1], a[j]];
		j--;
	}
	return a;
}
console.log(insertionSort([9, 4, 2, 3, 7])); //[ 2, 3, 4, 7, 9 ]
```

- Iterative (bottom-up)

```javascript
const insertionSort = (a) => {
	let n = a.length;
	for (let i = 1; i < n; i++) {
		let j = i;
		while (j > 0 && a[j] < a[j - 1]) {
			[a[j - 1], a[j]] = [a[j], a[j - 1]];
			j--;
		}
	}
	return a;
}
console.log(insertionSort([9, 4, 2, 3, 7])); //[ 2, 3, 4, 7, 9 ]
```
  
##### Merge Sort
    
- Divide & Conquer algorithm.
- Split array to left and right and Call recursively
- Merge left sorted & right sorted array.

```javascript
// Divide & Conquer algorithm. Split into 2 arrays Sort & Merge
// Note: If there is only "1" element in array by default is sorted
var merge = function(a, left, right) {
	let nL = left.length;
	let nR = right.length;
	let i = 0,j = 0,k = 0;
	while (i < nL && j < nR) {
		if (left[i] <= right[j]) {
			a[k] = left[i]; i++;
		} else {
			a[k] = right[j];j++;
		}
		k++;
	}
	while (i < nL) { a[k] = left[i];i++;k++; }
	while (j < nR) { a[k] = right[j];j++;k++; }
	return a;
}
// If you want to use start & end `Start<end` end = a.length-1; then right will start from mid+1
var mergeSort = function(a, start = 0, end = a.length - 1) {
	if (start < end) {
		var mid = Math.floor((start + end) / 2);
		let left = a.slice(0, mid);
		let right = a.slice(mid);
		mergeSort(left, 0, mid); //mid
		mergeSort(right, mid + 1, end); // mid+1
		merge(a, left, right);
	}
	return a;
}
console.log(mergeSort([10, 15, 12, 11, 19, 25, 1])); //[1,10,11,12,15,19,25])
```

#### Quick Sort

- Divide & Conquer algorithm
- Make sure you have `Pivot = a[start]`
- It' can't done using one pointer 2 pointer as below code  

```javascript 
// Don't do var smaller = bigger = start as per JS memory leaks
var smaller = start;
var bigger = start;
```
- bigger `<=` end not <. It will not swap last element
- Lomuto's a[start] & Hoare's a[end]

```javascript
 // Lomuto partion a[start] && Hoare a[end]
// Find partion Index If Pivot is bigger the swaped with Start
// Note : 1. Make sure you have 2 pointer smaller & bigger 
const parition = (a, left, right) => {
	let pivotIndex = Math.floor((left + right) / 2);
	let pivot = a[pivotIndex]
	let start = left;
	let end = right;
	if (start < end) {
		while (a[start] < pivot) start++;
		while (a[end] > pivot) end--;
		if (start <= end) {
			var temp = a[start];
			a[start] = a[end];
			a[end] = temp;
			start++;
			end--;
		}
	}
	return start;
}
const quicksort = (a, start, end) => {
	let paritionIndex;
	if (start<end) {
		paritionIndex = parition(a, start, end);
		quicksort(a, start, paritionIndex - 1);
		quicksort(a, paritionIndex, end);
	}
	return a;
}
let items = [9, 4, 5, 7, 3, 6];
console.log(quicksort(items, 0, items.length - 1));// [ 3, 4, 5, 6, 7, 9 ]
  ```

| Case         | Merge Sort Space Complexity | Merge Sort Time Complexity | Quick Sort Space Complexity | Quick Time Complexity |
| ------------ | --------------------------- | -------------------------- | --------------------------- | --------------------- |
| Best Case    | O(1)                        | O(1)                       | O(1)                        | O(1)                  |
| Worst Case   | O(n)                        | O(n(log(n))                | O(1)                        | O(n^2)                |
| Average Case | O(n)                        | O(n(log(n))                | O(1)                        | O(n(log(n))           |



#### Heap Sort

- What is Heap Data Structure?
  Heap is a special tree-based data structure. A binary tree is said to follow a heap data structure if
  - It is a **complete binary tree** (Left to Right.)
  - All nodes in the tree follow the property that they are greater than their children i.e. the largest element is at the root and both its children and smaller than the root and so on. Such a heap is called a max-heap. If instead, all nodes are smaller than their children, it is called a min-heap
- Insert Or Get `min or max` Element is O(n(log(n))
- First create heap for first half of array.
- Apply heap sort logic on complete array.

```javascript
const heapify = (a, i, n) => {
	let largest = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < n && a[largest] < a[left])
		largest = left;
	if (right < n && a[largest] < a[right])
		largest = right;
	if (largest != i) {
		[a[i], a[largest]] = [a[largest], a[i]];
		heapify(a, largest, n);
	}
	return a;
}
const heapSort = (a) => {
	let n = a.length;
	let start = Math.floor(n / 2);
	for (let i = start; i >= 0; i--) {
		heapify(a, i, n);
	}
	for (let i = n - 1; i >= 0; i--) {
		let temp = a[i];
		a[i] = a[0];
		a[0] = temp;
		heapify(a, 0, i);
	}
	return a;
}
console.log(heapSort([9, 4, 5, 7, 3, 6])); // [ 3, 4, 5, 6, 7, 9 ]
```

#### Proirty Queue

```javascript
class priorityQueue {
	constructor() {
		this.items = [];
	}
	minHeap(a, i, n) {
		let smallest = i;
		let left = 2 * i + 1;
		let right = 2 * i + 2;
		if (a[left] < a[smallest]) smallest = left;
		if (a[right] < a[smallest]) smallest = right;
		if (smallest != i) {
			[a[i], a[smallest]] = [a[smallest], a[i]];
			this.minHeap(a, 0, n);
		}
	}
	addItem(el) {
		this.items.push(el);
		this.minHeap(this.items, 0, this.items.length - 1);
	}
	deleteRoot() {
		let returnMinHeapItem = this.items.shift();
		let n = this.items.length;
		this.minHeap(this.items, 0, n);
		return returnMinHeapItem;
	}
	printHeap() {
		console.log(this.items);
	}
}
let pq = new priorityQueue();
pq.addItem(6);
pq.addItem(2);
pq.addItem(3);
pq.addItem(5);
pq.printHeap(); //[2,]
console.log(pq.deleteRoot());
pq.printHeap();
```

### Stable & In Place Algorithum?

| Algorithum | Stable | Inplace | Note                                                             |
| ---------- | ------ | ------- | ---------------------------------------------------------------- |
| Selection  | No     | Yes     |                                                                |
| Bubble     | Yes    | Yes     |                                                                |
| Insertion  | Yes    | Yes     | If you use temp varibale & do shifting to right             |
| Merge      | Yes    | No      | left[j] `<=` right[k]  |
| Quick      | No     | Yes     | Lomutou's algorithm logic.                            |
| Quick      | No     | Yes     | Hoare's algorithm logic.                            |
| Heap       | No     | Yes     | By level Order of tree logic.                              |
### Open Source Library

[Sorting Library Quick Access](https://www.npmjs.com/package/sort-algorithms-js)

- 100 million numbers

| algorithm          | best time                        | worst time                       |
| ------------------ | -------------------------------- | -------------------------------- |
| quick sort         | 24 seconds 689 ms                | 28 seconds 106 ms                |
| heap sort          | 79 seconds 480 ms                | 97 seconds 688 ms                |
| javascript .sort() | ❌ JavaScript heap out of memory | ❌ JavaScript heap out of memory |
| merge sort         | ❌ JavaScript heap out of memory | ❌ JavaScript heap out of memory |
| radix sort         | ❌ JavaScript heap out of memory | ❌ JavaScript heap out of memory |

#### Practice Problems

- Nearly Sorted Array
Given an array of n elements, where each element is at most k away from its target position,
devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an
element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

  Input : arr[] = {6, 8, 5, 2, 3, 10, 9}
              k = 3
  Output : arr[] = {2, 3, 5, 6, 8, 9, 10}

  Input : arr[] = {10, 9, 8, 7, 4, 70, 60, 50}
              k = 4
  Output : arr[] = {4, 7, 8, 9, 10, 50, 60, 70}

1. Insertion Sort

```javascript
const nearlySortedArray = (a, k) => {
	var n = a.length;
	for (var i = 1; i < n; i++) {
		var j = i;
		while (j >= 0 && a[j - 1] > a[j] && j < i + k) {
			[a[j], a[j - 1]] = [a[j - 1], a[j]];
			j--;
		}
	}
	return a;
}
console.log(nearlySortedArray([6, 2, 3, 5, 8, 11], 3));

class priorityQueue {
	constructor() {
		this.items = [];
	}
	minHeap(a, i, n) {
		let smallest = i;
		let left = 2 * i + 1;
		let right = 2 * i + 2;
		if (a[left] < a[smallest]) smallest = left;
		if (a[right] < a[smallest]) smallest = right;
		if (smallest != i) {
			[a[i], a[smallest]] = [a[smallest], a[i]];
			this.minHeap(a, 0, n);
		}
	}
	addItem(el) {
		this.items.push(el);
		this.minHeap(this.items, 0, this.items.length - 1);
	}
	deleteRoot() {
		let returnMinHeapItem = this.items.shift();
		let n = this.items.length;
		this.minHeap(this.items, 0, n);
		return returnMinHeapItem;
	}
	isEmpty() {
		this.items.length > 0 ? false : true;
	}
	printHeap() {
		console.log(this.items);
	}
}

const nearlySortedArray = (a, k) => {
	let n = a.length;
	let pq = new priorityQueue();
	let numberOfKs = Math.floor(n / k);
	for (let i = 0; i < n; i+k) {
    
		pq.addItem(a[i]);
	}
	let i = 0;
	while (pq.isEmpty()) {
		a[i++] = pq.deleteRoot();
	}


	return a;
}
console.log(nearlySortedArray([6, 8, 5, 2, 3, 10, 9], 3));
```