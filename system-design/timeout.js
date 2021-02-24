
// *** setTimeout
let cue = 'The actors are here!';
// With setTimeout, we can schedule code to be executed after a certain length of time has passed.
// However, the cue is not announced until at least 5000ms have
// passed through the use of setTimeout
setTimeout(function () {
    return console.log(cue);
}, 5000);

// This console log is executed right away
console.log('An exploration of art and music. And now, as we wait for the actors...');

// node setTimeout.js
// An exploration of art and music. And now, as we wait for the actors...
// The actors are here!

// *** setInterval
// In situations where you need repeated, regular, code execution, such as long polling, 
// then setInterval method will be a more natural fit than setTimeout. 
// With this function, we can specify a function to be executed every X seconds. 
// The function actually takes its argument in milliseconds, 
// so you have to do the conversion yourself before entering in your arguments.

let getQueueLength = function () {
    return Math.round(12 * Math.random());
};

// We would like to retrieve the queue length at regular intervals
// this way, we can decide when to make a quick dash over
// at the optimal time
setInterval(function () {
    let queueLength = getQueueLength();

    console.log(`The queue at the McDonald's drive-through is now ${queueLength} cars long.`);

    if (queueLength === 0) {
        console.log('Quick, grab your coat!');
    }

    if (queueLength > 8) {
        return console.log('This is beginning to look impossible!');
    }
}, 3000);


// *** setImmediate.js
// If we'd like a function to be executed as urgently as possible, we use setImmediate. 
// The function we execute this way will 
// execute ahead of all setTimeout or setInterval calls as soon as 
// the current Node.js event loop has finished calling event callbacks.
// A timeout
setTimeout(function () {
    console.log('I am a timeout');
}, 5000);

// An interval
setInterval(function () {
    console.log('I am an interval');
}, 5000);

// An immediate, its callback will be executed before those defined above
setImmediate(function () {
    console.log('I am an immediate');
});

// IO callbacks and code in the normal event loop runs before the timers
console.log('I am a normal statement in the event loop, guess what comes next?');

// node setImmediate.js 
// I am a normal statement in the event loop, guess what comes next?
// I am an immediate
// I am a timeout
// I am an interval
// I am an interval
// I am an interval