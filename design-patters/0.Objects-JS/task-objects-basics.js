var task = {};
task.title = 'Title 1';
task.description = 'My Task Description';
task.toString = function () {
    return this.title + ' ' + this.description;
}
console.log(task.title); // Title 1
console.log(task.toString()); // My Task Description

var task2 = Object.create(Object.prototype);
task2.title = 'Title 2';
task2.description = 'My Task Description';
task2.toString = function () {
    return this.title + ' ' + this.description;
}
console.log(task2.title); // Title 2
console.log(task2.toString()); // My Task Description

var task3 = new Object();
task3.title = 'Title 3';
task3.description = 'My Task Description';
task3.toString = function () {
    return this.title + ' ' + this.description;
}
console.log(task3.title); // Title 2
console.log(task3.toString()); // My Task Description
console.log(`ES6 Arrow Function Issue : `);
/**Need to pass params */
task3.toString = () => {
    return this.title + ' ' + this.description;
}
console.log(task3.toString()); // Undefined
task3.toString = (task) => {
    return task.title + ' ' + task.description;
}
console.log(task3.toString(task3)); // Undefined

var task4 = {
    title: ' Title 4',
    description: 'My Task description'
};
task4.toString = function () {
    return this.title + ' ' + this.description;
}
console.log(task4.title); // Title 4
console.log(task4.toString()); // My Task Description

var task5 = {
    title: 'Task 5',
    description: 'Description for task 5'
};
Object.defineProperty(task5, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false, /** if you set to true can't modify function Or proprty */
    enumerable: true,
    configurable: false /** if you set to true can't modify Object. No duplicate Object */
})

console.log(task5.toString());
task5.toString = 'Hi';
console.log(task5.toString());
/**Inherit Object task5 */
var taskInherit = Object.create(task5);
Object.defineProperty(taskInherit, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false, /** if you set to true can't modify function Or proprty */
    enumerable: true,
    configurable: false /** if you set to true can't modify Object. No duplicate Object */
})
console.log(taskInherit.toString());
var taskInherit = Object.seal(task5); /** new properties can be added to them */
