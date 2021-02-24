const fs = require('fs');

console.log(`Example 1 : Rename and delete File`);
/**Uncomment fro testing */
// fs.rename('./tmp/sample.txt', './tmp/rename.txt', (err, sucess) => {
//     if (err) { console.log(`rename exception ${err}`); }
//     else { console.log(`file got rename`); }
//     fs.unlink('./tmp/rename.txt', (err) => {
//         if (err) { console.log(`unlink exception ${err}`); }
//         else { console.log(`file got rename and deleted`); }
//     });
// });

console.log(`Example 2 : Read data from one file and write other file using Pipe feature`);
const readStream = fs.createReadStream('./tmp/input.txt');
const writeStream = fs.createWriteStream('./tmp/output.txt');
readStream.pipe(writeStream);
console.log(`File stream testing finished!`);

console.log(`Example 3 : File Stream Callback`);

fs.readFile('./tmp/ip.txt', (err, data) => {
    if (err) {
        console.log(`File read exception : ${err}`);
        return;
    } else {
        console.log(data.toString());
    }
})
console.log(`Example 4 ended.`);

console.log(`Example 5: `);
// What is the difference between addListener(event, listener) and on(event, listener) method in node.js?

var events = require('events');
var eventEmitter = new events.EventEmitter();



var listner1 = function listner1() {
    console.log('listner1 executed.');
}

var listner2 = function listner2() {
    console.log('listner2 executed.');
}

eventEmitter.addListener('connection', listner1);

eventEmitter.on('connection', listner2);

eventEmitter.emit('connection');

// .on() is exactly the same as .addListener() in the EventEmitter object.
// EventEmitter.prototype.on = EventEmitter.prototype.addListener;