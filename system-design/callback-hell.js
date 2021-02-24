console.log(`Example 1 : async callback`);
[1, 2, 3].forEach(function (item) {
    setTimeout(function () { console.log('Items are done'); }, 10);
});
function execute() {
    console.log(`Everything is doen!`);
}
// Items is done. Execute never get called;

console.log(`Example 2 : setimeout`);
console.log(`first`);
setTimeout(() => { console.log('second') }, 0)
console.log(`third`);
// first, third,second


console.log(`Example 3 : async.waterfall`);
const async = require('async');
// uncomments for waterfall model callback hell testing
/* 
async.waterfall([
    function (cb) {
        console.log(`1`);
        cb(null, true);
    }, function (cb) {
        setTimeout(function () { console.log(`2`); }, 0);
        console.log(`3`);
        cb(null, true); // this will throw error cb is not functon. Need to implemnet async.waterfall again.
    }
], (err) => {
    if (err) {
        console.log(`err in waterfall : ${err}`);
        return;
    }
    else {
        console.log(`4`);
        console.log(`Program end..`)
    }
})*/

console.log(`Example 4: one more callback hell`);
function isActiveUser(type, callback) {
    if (type == 1) {
        callback(true);
    } else {
        callback(false);
    }
}
isActiveUser(1, (err, response) => {
    console.log(err, response);
})