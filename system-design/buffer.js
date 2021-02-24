console.log(`Example 1 : Copy an ASCII string into a Buffer one byte at a time`);
const str = 'Node.js';
const buf = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
}

console.log(buf.toString('ascii'));
// Prints: Node.js
console.log(buf);

console.log(`Example 2 : Copy buffer example`);
var buffer1 = new Buffer('This is a buffer example');
var buffer2 = new Buffer(5);
buffer1.copy(buffer2);
console.log(buffer2.toString());

console.log(`Example 3 : Buffer length`);

var buffer3 = new Buffer(150);
var leng = buffer3.write('Welcome to node.js');
console.log('Hellow World : ' + leng)

console.log(`Example 4 : Concat buffer example`);
const buff1 = new Buffer('some first buffer');
const buff2 = new Buffer('some second buffer');
const buff3 = Buffer.concat([buff1, buff2]);
console.log(buff3); /**This will shor buffer data but not actula data */
console.log(buff3.toString()); /**.toString() will give us buffer in string */