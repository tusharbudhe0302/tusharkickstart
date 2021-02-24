const EventeventEmitter = require('events');
class MyeventEmitter extends EventeventEmitter { }

const eventEmitter = new MyeventEmitter();
/** Event eventEmitter Once Only */
console.log(`1. Once Event On Event Emitter`);
let count = 0;
eventEmitter.once('counter', () => {
    console.log(++count);
});
eventEmitter.emit('counter'); // 1
eventEmitter.emit('counter'); // ignore
eventEmitter.emit('counter'); // ignore
console.log(`2. Event Emitter with params`);
const _callback = () => {
    console.log(`a`);
    eventEmitter.removeListener('newEvent', _callback);
}

const callback_ = () => {
    console.log(`b`);
    eventEmitter.removeListener('newEvent', callback_);
}
eventEmitter.on('newEvent', _callback);
eventEmitter.on('newEvent', callback_);

eventEmitter.emit('newEvent'); // a remove listner b remove listner // a b
eventEmitter.emit('newEvent'); // ignore
eventEmitter.emit('newEvent');//ignore


console.log(`3. Event Emitter with settimeout`);

eventEmitter.on("a", () => {
    console.log('***enter in a');
});

eventEmitter.on("b", () => {
    console.log('***enter in b');
});

eventEmitter.on("c", () => {
    setTimeout(() => { console.log('***enter in c'); }, 0)
});


eventEmitter.emit("a");
eventEmitter.emit("c");
eventEmitter.emit("b"); //abc

console.log(`4. Event Emitter  with emit inside On event`)
let countEmitter = 0;

eventEmitter.on('someevent', () => {
    console.log(`********Enter in event*********** ${++count}`);
    eventEmitter.emit('someevent');
})
eventEmitter.emit('someevent');