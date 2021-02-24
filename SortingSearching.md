- **Note** 
    - Ө(n^2) = O(n^2) & O(n^2) != Ө(n^2)
If the running time of an algorithm is Ө(n), that means it roughly runs in time cn for some constant c. If the running time of an algorithm is O(n), that means it runs in time at most c’n for some constant c’. This means if T(n) = Ө(n^2), then T(n) is also O(n^2).
    - 2log2n is (assuming log has a base of 2) : n
    - log2(2^h) : h
#### Selection Sort 
- Get minimum index element
- Swap `i` &  `min`
- Time O(n^2) Space O(1) **No Extra Space.
```javascript
const selectionSort = (a)=>{
	const n = a.length;let min;
	for(let i = 0 ; i <n; i++){
		min = i;
		for(let j = i+1;j<n;j++){
			if(a[j]<a[min]){
				min = j;
			}
		}
		if(min !=i){
			[a[i],a[min]] = [a[min],a[i]];
		}else{
		    break;
		}
	}
	return a;
}
console.log(selectionSort([9,2,7,5,4,6]))
```
#### Bubble Sort
- Compare with adjacent element
- Swap 
- Time O(n^2) Space O(1) **No Extra Space.
- `isSwapped` variable with give you O(n) time complexitry in best case. If array is already sorted.
```javascript
const bubbleSort = (a) => {
	const n = a.length;
	let isSwapped = false;
	for (let i = 0; i < n - 2; i++) {
		isSwapped = false;
		for (let j = 0; j < n - 1; j++) {
			if (a[j] > a[j + 1]) {
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
				isSwapped = true;
			}
		}
		if (!isSwapped) return a;
	}
	return a;
}
console.log(bubbleSort([9, 2, 7, 5, 4, 6]));
```

#### Insertion Sort
 - Find holeIndex
 - Swap with Adjacent as bubble sort
 -  Time O(n^2) Space O(1) **No Extra Space.
 - There are 3 ways
    1. top-down approach (**Recursion**)
    ```javascript 
    const insertionSort = (a, n) => {
    	if (n <= 1) return a;
    	insertionSort(a, n - 1);
    	let j = n - 1;
    	    while (j >= 1 && a[j] > a[j + 1]) {
        		[a[j], a[j + 1]] = [a[j + 1], a[j]];
        		j = j - 1;
    	   }
        return a;
    }
    console.log(insertionSort([1, 2, 3, 5, 6, 7, 4], 7));
    ```
    2. bottom-up approch(**Iterative**)
    ```javascript
    const insertionSort = (a, n) => {
	if (n <= 1) return a;
    	for (let i = 1; i < n; i++) {
    		let j = i - 1;
    		while (j >= 0 && a[j] > a[j + 1]) {
    			[a[j], a[j + 1]] = [a[j + 1], a[j]];
    			j = j - 1;
    		}
    	}
    	return a;
    }
    console.log(insertionSort([1, 2, 3, 5, 6, 7, 4], 7));
    ```
    3. Create holeIndex (**Iterative**)
        - using temporary variable, move bigger element to right decrease holeIndex
        - swap temp with holeIndex
    ```javascript
    const insertionSort = (a, n) => {
    	if (n <= 1) return a;
    	for (let i = 0; i < n; i++) {
    		let temp = a[i];
    		let lastHoleIndex = i;
    		while (lastHoleIndex > 0 && a[lastHoleIndex - 1] > temp) {
    			a[lastHoleIndex] = a[lastHoleIndex - 1];
    			lastHoleIndex--;
    		}
    		a[lastHoleIndex] = temp;
    	}
    	return a;
    }
    console.log(insertionSort([1, 0, 3, 5, 6, 7, 4], 7));
    ```
    
#### Merge Sort

-   Divide & Conquer algorithm
-   Recursilvely split array to left and right
-  If array has only one elemnet, by default it's sorted
-  merge array 
-   Time O(n(log(n)) Space O(n) **Extra Space.
    -   If you want to remove K variable.
    -   It will create Extra memory, You can push the elemnet in array. Space O(n(log(n)) ** Extra Space
    ```javascript
    const merge = (a, left, right) => {
    	let nL = left.length;
    	let nR = right.length;
    	let i = 0,
    		j = 0,
    		k = 0;
    	while (j < nL && k < nR) {
    		if (left[j] <= right[k]) {
    			a[i] = left[j];
    			j++;
    		} else {
    			a[i] = right[k];
    			k++;
    		}
    		i++;
    	}
    	while (j < nL) {
    		a[i] = left[j];
    		j++;
    		i++;
    	}
    	while (k < nR) {
    		a[i] = right[k];
    		k++;
    		i++;
    	}
    	return a;
    
    }
    const mergeSort = (a) => {
    	let n = a.length;
    	if (n > 1) {
    		let mid = Math.floor(n / 2);
    		let left = a.slice(0, mid);
    		let right = a.slice(mid, n);
    		mergeSort(left);
    		mergeSort(right);
    		merge(a, left, right);
    	}
    	return a;
    }
    console.log(mergeSort([9, 2, 5, 7, 4, 6]));
    ```
#### Quick Sort
- Divide & Conquer algorithm
- Get a Pivot element (You can pick any elemnt from array. Assume you will pick last element)
- Partion Array First Step, Such a way :
    - All elements < Pivot On Left & elements > Pivot On Right (**Dosen't matter left and right segments are sorted or not**)
- Call recusrively from partion Index
    ```javascript
    const partitionRandomElement=(a,start,end)=>{
    	let pivotIndex = Math.floor(Math.random()*(end-start+1)+start);
    	let pivot = a[pivotIndex];
    	[a[end],a[pivotIndex]] = [a[pivotIndex],a[end]];
    	let pindex = start;
    	for(let i=start;i<pivotIndex;i++){
    		if(a[pindex]<pivot){
    			[a[i],a[pindex]] = [a[pindex],a[i]];
    			pindex++;
    		}
    	}
    	[a[pindex],a[pivotIndex]] = [a[pivotIndex],a[pindex]];
    	return pindex;
    }
    const partion = (a, start, end) => {
    	let pivot = a[end];
    	let pIndex = start;
    	for (let i = pIndex; i < end; i++) {
    		if (pivot > a[i]) {
    			[a[i], a[pIndex]] = [a[pIndex], a[i]];
    			pIndex++;
    		}
    	}
    	[a[pIndex], a[end]] = [a[end], a[pIndex]];
    	return pIndex;
    }
    const quickSort = (a, start = 0, end = a.length - 1) => {
    	if (start < end) {
    		let partionIndex = partion(a, start, end);
    		//let partionIndex = partitionRandomElement(a, start, end); 
    		quickSort(a, 0, partionIndex - 1);
    		quickSort(a, partionIndex + 1, end);
    	}
    	return a;
    }
    console.log(quickSort([7, 2, 1, 6, 8, 5, 4]));
    ```


Case|Merge Sort Space Complexity|Merge Sort Time Complexity|Quick Sort Space Complexity|Quick Time Complexity|
---|---|---|---|---|
Best Case|O(1)|O(1)|O(1)|O(1)|
Worst Case|O(n)|O(n(log(n))|O(1)|O(n^2)|
Average Case|O(n)|O(n(log(n))|O(1)|O(n(log(n))|
    


#### Heap Sort
- What is Heap Data Structure?
    Heap is a special tree-based data structure. A binary tree is said to follow a heap data structure if
    - It is a complete binary tree (Left to Right, Left can't be empty.)
    - All nodes in the tree follow the property that they are greater than their children i.e. the largest element is at the root and both its children and smaller than the root and so on. Such a heap is called a max-heap. If instead, all nodes are smaller than their children, it is called a min-heap
- Insert Or Get `min or max` Element is O(n(log(n))
- First create heap for first half of array.
- Apply heap sort logic on complete array.

    ```javascript
    const heapify = (arr, n, i) => {
     	//# Find largest among root and children
     	let largest = i;
     	let l = 2 * i + 1;
     	let r = 2 * i + 2;
     	if (l < n && arr[l] > arr[largest])
     		largest = l;
     	if (r < n && arr[r] > arr[largest])
     		largest = r;
     	//# If root is not largest, swap with largest and continue heapifying
     	if (largest != i) {
     		[arr[i], arr[largest]] = [arr[largest], arr[i]];
     		heapify(arr, n, largest);
     	}
     }
     const heapSort = (arr) => {
     	let n = arr.length;
     	// create heap for first half of array.
     	for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
     		heapify(arr, n, i);
     	// heap sort logic on complete array
     	for (let i = n - 1; i >= 0; i--) {
     		[arr[0], arr[i]] = [arr[i], arr[0]];
     		// Heapify root element to get highest element at root again
     		heapify(arr, i, 0);
     	}
     	return arr;
     }
     let arr = [1, 12, 9, 5, 6, 10, 7]
     console.log(heapSort(arr));
    ```

### Stable & In Place Algorithum?
Algorithum    | Stable  | Inplace   | Note  |
------------- | ------  | --------  | ----- |
Selection     | No      | Yes       | NA    |
Bubble        | Yes     | Yes       | NA    |
Insertion     | Yes     | Yes       | If you use temp varibale & do right shift operation. |
Merge         | Yes     | No        | It should be left[j] * <= * right[k] Not left[j] * < * right[k]. |
Quick         | No      | Yes       | Lomutou's or Hoare's algorithm logic. |
Heap          | No      | Yes       | By level Order of tree logic. |
Hoare's       | Yes      | Yes       |O(n(logs(n))). Just Green & Orange |

### Open Source Library
[Sorting Library Quick Access](https://www.npmjs.com/package/sort-algorithms-js)

- 100 million numbers

algorithm |	best time | 	worst time|
--- | --- | --|
quick sort	| 24 seconds 689 ms|	28 seconds 106 ms|
heap sort	|79 seconds 480 ms|	97 seconds 688 ms
javascript .sort() |❌ JavaScript heap out of memory |❌ JavaScript heap out of memory
merge sort	 |❌ JavaScript heap out of memory |❌ JavaScript heap out of memory
radix sort	 |❌ JavaScript heap out of memory |❌ JavaScript heap out of memory