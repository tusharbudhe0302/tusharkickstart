// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Example:

// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3
// ["MovingAverage","next","next","next","next"]
// [[3],[1],[10],[3],[5]]
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.items = [];
    this.maxSize = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    let average = 0;
    if (this.items.length < this.maxSize) {
        this.items.push(val);
    } else {
        this.items.shift();
        this.items.push(val);
    }
    let sum = 0;
    average = this.items.length;
    this.items.map((item) => {
        sum += item;
    })
    return sum / average;
};


/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var obj = new MovingAverage(3)
console.log(obj.next(1));
console.log(obj.next(10));
console.log(obj.next(3));
console.log(obj.next(5));