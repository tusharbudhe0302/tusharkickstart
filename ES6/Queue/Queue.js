class Queue {
    constructor() {
        this.items = [];
    }
    EnQueue(data) {
        this.items.push(data);
    }
    Peek() {
        if (this.items.length > 0)
            return this.items[0];
    }
    DeQueue() {
        this.items.shift();
    }
    Print() {
        console.log(this.items);
    }
}
let test = new Queue();
test.EnQueue(5);
test.EnQueue(10);
test.EnQueue(15);
test.EnQueue(20);
console.log(` Print Items after EnQueue`);
test.Print();
let peek = test.Peek();
console.log(`Item Peek : ${peek}`);
test.DeQueue();
test.DeQueue();
console.log(` Print Items after DeQueue`);
test.Print();
