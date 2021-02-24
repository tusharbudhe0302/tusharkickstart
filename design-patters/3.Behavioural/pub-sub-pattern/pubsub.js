let subscribers = {};
module.exports = {
    publish(event, data) {
        // Some publisher function code will go here
        if (!subscribers[event]) return;
        subscribers[event].forEach(subscriberCallback => subscriberCallback(data))
    },
    subscribe(event, callback) {
        if (!subscribers[event]) {
            subscribers[event] = [];
        }
        subscribers[event].push(callback);
        // Some Subsciber Code wiill come here
    }
}