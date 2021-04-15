
#### JavaScript Supports First-class Functions
```javascript
// we send in the function as an argument to be
// executed from inside the calling function
function performOperation(a, b, cb) {
    var c = a + b;
    cb(c);
}

performOperation(2, 3, function(result) {
    // prints out 5
    console.log("The result of the operation is " + result);
})
```

#### JavaScript Is Prototype-based

As is the case with many other object-oriented languages, JavaScript supports objects, and one of the first terms that comes to mind when thinking about objects is classes and inheritance. This is where it gets a little tricky, as the language doesn’t support classes in its plain language form but rather uses something called prototype-based or instance-based inheritance.

It is just now, in ES6, that the formal term class is introduced, which means that the browsers still don’t support this (if you remember, as of writing, the last fully supported ECMAScript version is 5.1). It is important to note, however, that even though the term “class” is introduced into JavaScript, it still utilizes prototype-based inheritance under the hood.

Prototype-based programming is a style of object-oriented programming in which behavior reuse (known as inheritance) is performed via a process of reusing existing objects via delegations that serve as prototypes. We will dive into more detail with this once we get to the design patterns section of the article, as this characteristic is used in a lot of JavaScript design patterns.


##### JavaScript Event Loops
If you have experience working with JavaScript, you are surely familiar with the term callback function. For those not familiar with the term, a callback function is a function sent as a parameter (remember, JavaScript treats functions as first-class citizens) to another function and gets executed after an event fires. This is usually used for subscribing to events such as a mouse click or a keyboard button press.

#### Design Pattern Categorization
[Design patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns) can be categorized in multiple ways, but the most popular one is the following:
- Creational design patterns
- Structural design patterns
- Behavioral design patterns
- Concurrency design patterns
- Architectural design patterns


- Creational Design Patterns
These patterns deal with object creation mechanisms which optimize object creation compared to a basic approach. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling object creation. Some of the popular design patterns in this category are:

    ```javascript
        function Person(name, age, isDeveloper = false) {
        	this.name = name;
        	this.age = age;
        	this.isDeveloper = isDeveloper;
        	// Need area of improvement
        	// this.writeCode = function(){
        	//     console.log(isDeveloper ? `${this.name } Writes a code`: `${this.name } Don't write code` );
        	// }
        }
        Person.prototype.writeCode = function() {
        	console.log(this.isDeveloper ? `${this.name } Writes a code` : `${this.name } Don't write code`);
        }
        var person1 = new Person("Tushar", 32, true);
        var person2 = new Person("Kimi", 30);
        person1.writeCode();
        person2.writeCode();
    ```

1. Factory method
2. Abstract factory
3. Builder
4. Prototype

    ```javascript
    var personPrototype = {
        sayHi: function() {
            console.log("Hello, my name is " + this.name + ", and I am " + this.age);
        },
        sayBye: function() {
            console.log("Bye Bye!");
        }
    };
    function Person(name, age) {
        name = name || "John Doe";
        age = age || 26;
        function constructorFunction(name, age) {
            this.name = name;
            this.age = age;
        };
        constructorFunction.prototype = personPrototype;
        var instance = new constructorFunction(name, age);
        return instance;
    }
    var person1 = Person();
    var person2 = Person("Bob", 38);
    // prints out Hello, my name is John Doe, and I am 26
    person1.sayHi();
    // prints out Hello, my name is Bob, and I am 38
    person2.sayHi();
    ```

5. Singleton

    ```javascript
    var singleton = (function() {
    	var config;
    	function init(values) {
    		this.randomNumber = Math.random()
    		values = values || {};
    		this.number = values.number || 5;
    		this.size = values.size || 10;
    	}
    	return {
    		getConfig: function(values) {
    			if (config === undefined)
    				config = new init(values);
    			return config;
    		}
    	}
    })();
    var createObject1 = singleton.getConfig({
    	"number": 8
    });
    console.log(createObject1); //  { randomNumber: 0.17624746538042024, number: 8, size: 10 }
    var createObject2 = singleton.getConfig({
    	"size": 18
    });
    console.log(createObject2); //  { randomNumber: 0.17624746538042024, number: 8, size: 10 }
    ```

- Structural/Modular Design Patterns
These patterns deal with object relationships. They ensure that if one part of a system changes, the entire system doesn’t need to change along with it. The most popular patterns in this category are:

    - using the immediate invoke function expression(IIFE)
    ```javascript
    var counterIncremental = (function() {
    	var counter = 0;
    	return function() {
    		return ++counter; // don't forget this return
    	}
    })();
    console.log(counterIncremental()); //1
    console.log(counterIncremental()); //2
    console.log(counterIncremental()); //3
    ```
    - Using closer
    ```javascript
     var collection = (function() {
 	var objects = [];
 	function addObject(object) {
 		objects.push(object);
 	}
 	function removeObject(object) {
 		let getObjectIndex = objects.indexOf(object);
 		if (getObjectIndex >= 0) objects.splice(getObjectIndex, 1);
 	}
 	function getObjects() {
 		return JSON.parse(JSON.stringify(objects));
 	}
 	return {
 		addObject: addObject,
 		removeObject: removeObject,
 		getObjects: getObjects
 	};
    })();
    collection.addObject("Tushar");
    collection.addObject("Kimi");
    collection.addObject("Udantika");
    console.log(collection.getObjects()); // [ 'Tushar', 'Kimi', 'Udantika' ]
    collection.removeObject("Tushar");
    console.log(collection.getObjects()); // [ 'Kimi', 'Udantika' ]
    ```
1. Adapter
2. Bridge
3. Composite/Modular
4. Decorator
5. Facade
6. Flyweight

   
- Behavioral Design Patterns
These types of patterns recognize, implement, and improve communication between disparate objects in a system. They help ensure that disparate parts of a system have synchronized information. Popular examples of these patterns are:
    -   Publisher Subscriber design pattern

```javascript
var publisherSubscriber = {};
(function(container) {
	var id = 0;
	// we subscribe to a specific topic by sending in
	// a callback function to be executed on event firing
	container.subscribe = function(topic, f) {
		if (!(topic in container))
			container[topic] = [];

		container[topic].push({
			"id": ++id,
			"callback": f
		});
		return id; //don't forget to return id
	}
	/// each subscription has its own unique ID, which we use
	// to remove a subscriber from a certain topic
	container.unsubscribe = function(topic, id) {
		var subscribers = [];
		for (var subscriber of container[topic]) {
			if (subscriber.id !== id) {
				subscribers.push(subscriber);
			}
		}
		container[topic] = subscribers;
	}
	container.publish = function(topic, data) {
		for (var subscriber of container[topic]) {
			// when executing a callback, it is usually helpful to read
			// the documentation to know which arguments will be
			// passed to our callbacks by the object firing the event
			subscriber.callback(data);
		}
	}
})(publisherSubscriber);
var subscriptionId1 = publisherSubscriber.subscribe("mouseClicked", function(data) {
	console.log("I am Bob calling mouseClicked event", JSON.stringify(data));
});
var subscriptionId2 = publisherSubscriber.subscribe("mouseHovered", function(data) {
	console.log("I am Bob calling mouseHovered event", JSON.stringify(data));
});
var subscriptionId3 = publisherSubscriber.subscribe("mouseClicked", function(data) {
	console.log("I am Alice calling mouseClicked event", JSON.stringify(data));
});
// NOTE: after publishing an event with its data, all of the
// subscribed callbacks will execute and will receive
// a data object from the object firing the event
// there are 3 console.logs executed
publisherSubscriber.publish("mouseClicked", {
	"data": "data1"
});
publisherSubscriber.publish("mouseHovered", {
	"data": "data2"
});
// we unsubscribe from an event by removing the subscription ID
publisherSubscriber.unsubscribe("mouseClicked", subscriptionId3);
console.log(`------`);
// there are 2 console.logs executed
publisherSubscriber.publish("mouseClicked", {
	"data": "data1"
});
publisherSubscriber.publish("mouseHovered", {
	"data": "data2"
});
```
1. Chain of responsibility
2. Command

```javascript
// the object which knows how to execute the command
var invoker = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
}

// the object which is used as an abstraction layer when
// executing commands; it represents an interface
// toward the invoker object
var manager = {
    execute: function(name, args) {
        if (name in invoker) {
            return invoker[name].apply(invoker, [].slice.call(arguments, 1));
        }
        return false;
    }
}

// prints 8
console.log(manager.execute("add", 3, 5));
// prints 2
console.log(manager.execute("subtract", 5, 3));
```

3. Iterator
4. Mediator
5. Memento
6. Observer
7. State
8. Strategy
9. Visitor

- Concurrency Design Patterns
These types of design patterns deal with multi-threaded programming paradigms. Some of the popular ones are:
1. Active object
2. Nuclear reaction
3. Scheduler

- Architectural Design Patterns
Design patterns which are used for architectural purposes. Some of the most famous ones are:
1. MVC (Model-View-Controller)
2. MVP (Model-View-Presenter)
3. MVVM (Model-View-ViewModel)
In the following section, we are going to take a closer look at some of the aforementioned design patterns with examples provided for better understanding.


