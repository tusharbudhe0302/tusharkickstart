class LinkNode {
    constructor(num) {
        this.val = num;
        this.next = null;
    }
}
class SinglyLinkList {
    constructor() {
        this.start = null;
        this.localStorage = null;
    }
    // Insert Item At Begining Of List
    insertItemAtBegining(num) {
        if (!this.isEmpty()) {
            //if List is not empty the you need Hold temp value for start
            let temp = this.start;
            const newTemp = new LinkNode(num);
            newTemp.next = temp;
            this.start = newTemp;
        } else {
            this.start = new LinkNode(num);
            return;
        }
    }
    // Insert Item At End Of List
    insertItemAtEnd(num) {
        if (this.isEmpty()) {
            this.start = new LinkNode(num);
            return;
        }
        let tempLink = this.start;
        while (tempLink.next) {
            tempLink = tempLink.next;
        }
        tempLink.next = new LinkNode(num);
    }
    // Insert Item Before Item of specific position
    insertItemBefore(itemToCheck, num) {
        if (this.isEmpty()) {
            console.log(`List is Empty`);
            return;
        }
        let tempBefore = this.start;
        let isItemFound = true;
        while (tempBefore) {
            if (tempBefore.next && tempBefore.next.val === itemToCheck) {
                let temp = new LinkNode(num);
                temp.next = tempBefore.next;
                tempBefore.next = temp;
                isItemFound = true;
                return;
            }
            tempBefore = tempBefore.next;
        }
        if (!isItemFound) {
            console.log(`No Item found in list`);
        }
    }
    // Insert Item After Item of specific position
    insertItemAfter(itemToCheck, num) {
        if (this.isEmpty()) {
            console.log(`List is Empty`);
            return;
        }
        let tempAfter = this.start;
        let isItemFound = false;
        while (tempAfter) {
            if (tempAfter.val === itemToCheck) {
                let temp = new LinkNode(num);
                temp.next = tempAfter.next;
                tempAfter.next = temp;
                isItemFound = true;
                return;
            }
            tempAfter = tempAfter.next;
        }
        if (!isItemFound) {
            console.log(`No Item found in list`);
        }

    }
    // reverse Order Of List. You need to mugup this.
    reverseOfList() {
        let previous = null, _next;
        let current = this.start;
        while (current) {
            _next = current.next;
            current.next = previous;
            previous = current;
            current = _next;
        }
        this.start = previous;
        return this.start;
    }
    // reverse Order Of List. You need to mugup this.
    reverseOfListRecurrsive(link) {
        if (!link.next) {
            this.start = link;
            return;
        }
        // console.log(`before ${newStart.val}`);
        this.reverseOfListRecurrsive(link.next);
        console.log(link.key);
        let q = link.next;
        q.next = link;
        link.next = null;
        // console.log(`after ${newStart.val}`);
    }
    // Check If List is Empty
    isEmpty() {
        if (this.start)
            return false;
        else
            return true;
    }
    // Total number of Items in List
    count() {
        let count = 0;
        if (this.isEmpty()) {
            return count;
        }
        let tempCount = this.start;
        while (tempCount.next) {
            count++;
            tempCount = tempCount.next;
        }
        return count + 1;
    }
    // Display Link List
    displayLinkList() {
        if (this.isEmpty()) {
            console.log(`List is empty`);
            return;
        }
        let tempResult = [];
        let tempLink = this.start;
        while (tempLink.next) {
            tempResult.push(tempLink.val);
            tempLink = tempLink.next;
        }
        tempResult.push(tempLink.val);
        console.log(`${tempResult}`);
    }
    // Delete first Item of List 
    deleteFirstItem() {
        let tempStart = this.start;
        this.start = tempStart.next;
    }
    // Delete last Item of List 
    deleteLastItem() {
        let temp = this.start;
        while (temp.next.next) {
            temp = temp.next;
        }
        temp.next = null;
    }
    // Delete Specific Item from list 
    deleteItem(num) {
        let temp = this.start;
        let isItemFound = false;
        while (temp) {
            let previous = temp;
            if (temp.next && num === temp.val) {
                isItemFound = true;
                previous.next = temp;
                temp = temp.next;
            }
            temp = temp.next;
        }
        if (!isItemFound) {
            console.log(`No Item found..`);
        }
    }
    // Make a list empty.
    makeEmptyList() {
        // Just need make start as null. It will dealocate rest of memory
        this.start = null;
    }
    // Create Dummy Link List
    createDummyLinkList() {
        let temp = new LinkNode(11);
        temp.next = new LinkNode(22);
        temp.next.next = new LinkNode(33);
        temp.next.next.next = new LinkNode(44);
        this.start = temp;
        return this.start;
    }
}
const singlyLinkListInsertAtBegining = new SinglyLinkList();
singlyLinkListInsertAtBegining.insertItemAtBegining(5);
singlyLinkListInsertAtBegining.insertItemAtBegining(15);
singlyLinkListInsertAtBegining.insertItemAtBegining(25);
console.log(`singlyLinkList : insertItemAtBegining`);
singlyLinkListInsertAtBegining.displayLinkList();// 25 15 5
const singlyLinkListInsertItemAtEnd = new SinglyLinkList();
console.log(`singlyLinkList : insertItemAtEnd`);
singlyLinkListInsertItemAtEnd.insertItemAtEnd(5);
singlyLinkListInsertItemAtEnd.insertItemAtEnd(15);
singlyLinkListInsertItemAtEnd.insertItemAtEnd(25);
singlyLinkListInsertItemAtEnd.displayLinkList();// 5 15 25
console.log(`singlyLinkList : insertItemBefore 25 item to Insert : 20`);
singlyLinkListInsertItemAtEnd.insertItemBefore(25, 20);
singlyLinkListInsertItemAtEnd.displayLinkList();// 5 15 20 25
console.log(`singlyLinkList : insertItemAfter 25 item to Insert : 30`);
singlyLinkListInsertItemAtEnd.insertItemAfter(25, 30);
singlyLinkListInsertItemAtEnd.displayLinkList();// 5 15 20 25 30
console.log(`singlyLinkList : insertItemAfter 5 item to Insert : 10`);
singlyLinkListInsertItemAtEnd.insertItemAfter(5, 10);
singlyLinkListInsertItemAtEnd.displayLinkList();// 5  10 15 20 25 30
console.log(`singlyLinkList : count : ${singlyLinkListInsertItemAtEnd.count()}`);
console.log(`singlyLinkList : deleteFirstItem`);
singlyLinkListInsertItemAtEnd.deleteFirstItem();
singlyLinkListInsertItemAtEnd.displayLinkList();// 10 15 20 25 30
console.log(`singlyLinkList : deleteLastItem`);
singlyLinkListInsertItemAtEnd.deleteLastItem();
singlyLinkListInsertItemAtEnd.displayLinkList();// 10 15 20 25
console.log(`singlyLinkList : isEmpty ${singlyLinkListInsertItemAtEnd.isEmpty()}`);
console.log(`singlyLinkList : makeEmptyList`);
singlyLinkListInsertItemAtEnd.makeEmptyList();
singlyLinkListInsertItemAtEnd.displayLinkList();
console.log(`singlyLinkList : reverse of list`);
singlyLinkListInsertItemAtEnd.createDummyLinkList();
singlyLinkListInsertItemAtEnd.displayLinkList(); // 11 22 33 44
singlyLinkListInsertItemAtEnd.reverseOfList();
singlyLinkListInsertItemAtEnd.displayLinkList(); // 44 33 22 11
console.log(`singlyLinkList : reverse of list recurrsion`);
const reverseListRecurrsiveMode = new SinglyLinkList();
let start = reverseListRecurrsiveMode.createDummyLinkList();
reverseListRecurrsiveMode.displayLinkList(); // 11 22 33 44
reverseListRecurrsiveMode.reverseOfListRecurrsive(start);
reverseListRecurrsiveMode.displayLinkList(); //44 33 22 11