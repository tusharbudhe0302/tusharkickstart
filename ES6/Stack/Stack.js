class StaticStack {
    constructor(MAX_SIZE) {
        this.items = [MAX_SIZE];
    }
}
class StaticStackOperation {
    constructor() {
        this.top = -1;
        this.MAX_SIZE = 10;
        this.items = new StaticStack(this.MAX_SIZE);
    }
    // push
    push(data) {
        if (this.MAX_SIZE <= this.top) {
            console.log(`Stack Overflow`);
            return;
        }
        else {
            this.top++;
            this.items[this.top] = data;
        }
    }
    // pop
    // peek
    peek() {
        return this.items[this.top];
    }
    pop() {
        this.items[this.top] = null;
        this.top--;
    }
    isEmpty() {
        this.MAX_SIZE < this.top ? true : false;
    }
    isFull() {
        this.MAX_SIZE >= this.top ? true : false;
    }
}