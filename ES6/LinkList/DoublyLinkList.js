class DLinkNode {
    constructor(data) {
        this.val = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkList {
    constructor() {
        this.start = null;
    }
    // Create Dummy List
    createDummyList() {
        let temp = new DLinkNode(11);
        this.start = temp;
        let newTemp = new DLinkNode(22);
        temp.next = newTemp;
        newTemp.prev = temp;
        temp = new DLinkNode(33);
        newTemp.next = temp;
        temp.prev = newTemp;
        newTemp = new DLinkNode(44);
        temp.next = newTemp;
        newTemp.prev = temp;
    }
    // Display A List
    disaplyList() {
        let p = this.start;
        let list = [];
        while (p.next) {
            list.push(p.val);
            p = p.next;
        }
        list.push(p.val);
        return list;
    }
    // Insert Item at beginning Of List
    insertAtBeginningOfList(data) {
        let temp = DLinkNode(data);
        if (!this.start) {
            this.start = temp;
            return this.start;
        }
        let p = this.start;
        p.prev = temp;
        temp.next = p;
        this.start = temp;
        return this.start;
    }
    // Insert Item at end Of List
    insertAtEndOfList(data) {
        let temp = DLinkNode(data);
        if (!this.start) {
            this.start = temp;
            return this.start;
        }
        let p = this.start;
        while (p.next) {
            p = p.next;
        }
        temp.prev = p;
        p.next = temp;
        return this.start;
    }
    // insert Before Item
    insertBeforeItem(checkItem, dataToInsert) {
        let itemNotFound = true;
        if (!this.start) {
            console.log(`List is empty!`);
            return;
        }
        let p = this.start;
        while (p) {
            if (p.val == checkItem) {
                itemNotFound = false;
                break;
            }
            p = p.next;
        }
        if (!itemNotFound) {
            let temp = new DLinkNode(dataToInsert);
            temp.next = p.next;
            temp.prev = p;
        }
    }
    // insert After item
    insertAfterItem(checkItem, data) {
        let p = this.start;
        let itemFoud = false;
        while (p) {
            if (p.val === checkItem) {
                itemFoud = true;
                break;
            }
            p = p.next;
        }
        if (itemFoud) {
            let temp = new DLinkNode(data);
            temp.prev = p;
            p.next = temp;
        } else {
            console.log(`Item Not Found in list`);
        }
    }
    reverseOfDoublyLinkLis() {
        let p = this.start;
        // @|11|200* -->100*  100*|22|300* -->200* 200*|33|400* -->300*  300*|44|@ -->400*
        while (p.next) {
            let _next = p.next;  // 200* 300*
            let _prev = p.prev; // @ 100*
            p.prev = _next; // 200* 300*
            p.next = _prev; // @ 100*
            p = _next;
        }
    }
}
let test = new DoublyLinkList();
test.createDummyList();
let dList = test.disaplyList();
console.log(dList);