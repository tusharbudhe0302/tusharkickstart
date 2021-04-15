
### Object JS
Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

-  Objects and properties objectName.propertyName
       
    -  Brackets ` var obj = {};`
        * Curly Brackets
        ```javascript
        let obj = { cat: 'meow',dog: 'woof'};
        let sound = obj.cat;
        console.log(sound);// meow
        let obj = {cat: 'meow',dog: 'woof'};
        let sound = obj['cat'];
        console.log(sound);// meow
        ```
        * Square Brackets
        ```javascript
        let obj = {}; obj['cat'] = 'meow'; obj['dog'] = 'woof';
         console.log(obj['cat']) // meow
        console.log(obj.cat) // meow
        ```
        * Complex Senario 
         ```javascript
        let obj = {cat: 'meow',dog: 'woof'};
        let dog = 'cat';
        let sound = obj[dog];
        console.log(sound);// meow
        ```
    - Create `var obj2 = Object.create(Object.prototype);`
        * Empty Object 
         ```javascript 
         var task2 = Object.create(Object.prototype);
        task2.title = 'Title 2';
        task2.description = 'My Task Description';
        task2.toString = function () {return this.title + ' ' + this.description;}
        console.log(task2.title); // Title 2
        console.log(task2.toString()); // My Task Description
        ```
    - new Object `var obj3 = new Object();`
         * new keyword 
           ```javascript 
            var task4 = new Object();
            task4.title = 'Title 4';
            task4.description = 'My Task Description';
            task4.toString = function () {return this.title + ' ' + this.description;}
            console.log(task4.title); // Title 4
            console.log(task4.toString()); // My Task Description
            ```
    - Object.defineProperties 
        * Object.defineProperties
    ```javascript 
    const object2 = {};
    Object.defineProperties(object2, {
        property1: {
            value: 42,
            writable: true
        },
        property2: {}
    });
    console.log(object2.property1);
    // expected output: 42
    ```
    ```javascript 
    var object1 = {};
    Object.defineProperty(object1, 'property1', {
        value: 72,
        writable: false,
        enumerable: true,
        configurable: true
    })
    if (Object.isSealed(object1))
        console.log(`Is Sealed Object`);
    else
        object1.property1 = 77;
    // throws an error in strict mode
    ```
    * Other Options
    ```javascript  
    Object.defineProperty(obj, prop, descriptor)
    Object.defineProperties(obj, props)
    Object.seal(task5);
    obj.hasOwnProperty(prop)
    Object.getOwnPropertyNames())
    Object.isExtensible(object1), Object.preventExtensions(), Object.seal(), or Object.freeze()
    ```
    1.  writable: false | if you set to true can't modify function Or proprty 
    2. enumerable: true
    3. configurable: false | if you set to true can't modify Object. No duplicate Object 
    4. seal  | new properties can be added to them, but can modify existing property 
    5. freeze | Stop Inheritance
    6. preventExtensions | Stop Inheritance , Stop Adding  , Stop Modifiying
- Class in Javascript
    * In javascript Classes are function. There is no`Class` keyowd like C#, Java, C++ etc..
    ```javascript
    // Simple Class with out default constructor
    function customer(firstName, lastName, age) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
    }
    const newCustomer = new customer("Tushar", "Budhe", 32);
    console.log(newCustomer.FirstName); // Tushar

    // Simple Class with default constructor. If You want to get data from db and set to an Object .Best way to implement. 3 tier Arcthitecture.
    function defaultCustomer(newObj) {
        this.FirstName = newObj.firstName || "";
        this.LastName = newObj.lastName || "";
        this.Age = newObj.age || -1;
    }
    // returns empty Object
    const defaultCustomer = new defaultCustomer();
    console.log(defaultCustomer.FirstName); // Empty String
    defaultCustomer.FirstName = "Tushar";
    console.log(defaultCustomer.FirstName); // Tushar
    // Set values to empty object
    let predefinedObj = {
        firstName: "John",
        lastName: "Doe",
        age: 35
    }
    //returns Object with predefined values.
    const defaultCustomerWithOverloadedConstructor = new defaultCustomer(predefinedObj);
    console.log(defaultCustomerWithOverloadedConstructor.FirstName);// John
    ```
- Hoisting in  Javascript
    * Hoisting will return value even it's not assigned.
    ```javascript
    alert(x); // undefined (Run time Error : undefined)
    var x =10
    alert(x) // 10
    ```
    ```javascript
    alert(z); // Compile time Error: z is not defiend
    ```
    * Assign function to variable.
    ```javascript
    var myfunc = function(){ //anonymus function
        return "Hello";
    }
    alert(myFunc());//Hello
    ```
    ```javascript
    x = 5; // Assign 5 to x
    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element
    var x; // Declare x
    ```
- Lexical Scope
    * In javascript only 2 scope Private and Global
    ```javascript
         var x = 10; // Global Scope
        console.log(x);

        function funLexicalScope() {
            var x = 5; // Local Scope Or Private Scope. Private Scope has more pripority.
            console.log(x); //5
        }
        funLexicalScope(); // 5 Overrride global scope to local scope
    ```
- Closer In Javascript
    * Closer is used to assign return value to outer function. This help to maintain state of your code. 
    ```javascript
    function Counter(){
        var counter = 0; // Don't use global varible always in Javascript,as best practices.
        //This function ENCLOSE inside other function.
        var _increment = function(){
             counter++;
             alert(counter); 
        }; // Don't miss this semicolon
        return {
            _increment
        };
    }
    var x = Counter(); // x has it's own state. We can't achive this with global varibles.
    x._increment(); // 1
    x._increment(); // 2
    var y = Counter(); // y has it's own state. We can't achive this with global varibles.
    y._increment(); // 1
    ```

    * Advace Exmple

    ```javascript
    // Abstraction :- Only show relavent data,Hide non required
    // Encpasulation :- Gathering of Object in to Single Unit. e.g. namespace
    // Inheritace :- Reuseability of the code. Parent Relationship
    // Polymorphisum :- overriding base class using virtual keyword and overloading same name but diffrent numbers of params.

        function Customer() {
            // All are private 
            var _customerName = "";
            var _customerCode = "";
            var _validate = function () {
                _dbConnect();//Connect to db first
                // Do Some Validation
                console.log(`This is validate`);
            }
            var _dbConnect = function () {
                // this will connect to DB.
            }
            // Abstraction : Hide _dbConnect function to Outer World. Show relevent data
            return {
                customerName: _customerName,
                customerCode: _customerCode,
                validate: _validate
            }
        }

        var newCustomer = new Customer();
        newCustomer.customerCode = "1001";
        newCustomer.validate();
        // Inheritance & Polymorphisum (prototype)
        Customer.prototype = new Customer();
    ```

- IIFM in  Javascript
    * Immediately  Invoke Function Expression.

     ```javascript
        var counter =10;
        counter++;
        function WrongIIFM(){
                counter = counter+1; // Overwrite Global Value
        }
       console.log(WrongIIFM());//12
     ```

    * Let's take a look fo 2 requirments:
    1. Don't want to modify Global Varibale
    2. Don't want to initialize multipule time, Only Once
    ```javascript
    (function(){//anonymus function
    var counter = 10;
    counter++;
    })()
    // It should thow an exception
    function InvokeIIFMException(){
            counter = counter+1; // UnCought Exception. This Correct It shoun't refer to Global Counter
    }
    InvokeIIFMException();
    ```
### Types Of In Javascript  
* typeof

|Type   | Result |
---     | --     |
| Undefined	| "undefined"|
| Null | "object" (see below)|
| Boolean |	"boolean"|
| Number	| "number" |
| BigInt	| "bigint" |
|String	| "string" |
|Symbol (new in ECMAScript 2015) |	"symbol"|
|Host object (provided by the JS environment) |	Implementation-dependent|
|Function object (implements [[Call]] in ECMA-262 terms) |	"function"|
|Any other object |	"object"|

### Array Properties

- Array.length
The Array constructor's length property whose value is 1.
- get Array[@@species]
The constructor function that is used to create derived objects.
- Array.prototype
Allows the addition of properties to all array objects.
Methods
- Array.from()
Creates a new Array instance from an array-like or iterable object.
- Array.isArray()
Returns true if a variable is an array, if not false.
- Array.of()
Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
- Array instances
All Array instances inherit from Array.prototype. The prototype object of the Array constructor can be modified to affect all Array instances.

###### Prototype Properties

- Array.prototype.constructor
Specifies the function that creates an object's prototype.
- Array.prototype.length
Reflects the number of elements in an array.
- Array.prototype[@@unscopables]
A symbol containing property names to exclude from a with binding scope.
Methods
Mutator methods
These methods modify the array:
- Array.prototype.copyWithin()
Copies a sequence of array elements within the array.
- Array.prototype.fill()
Fills all the elements of an array from a start index to an end index with a static value.
- Array.prototype.pop()
Removes the last element from an array and returns that element.
- Array.prototype.push()
Adds one or more elements to the end of an array and returns the new length of the array.
- Array.prototype.reverse()
Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
- Array.prototype.shift()
Removes the first element from an array and returns that element.
- Array.prototype.sort()
Sorts the elements of an array in place and returns the array.
- Array.prototype.splice()
Adds and/or removes elements from an array.
- Array.prototype.unshift()
Adds one or more elements to the front of an array and returns the new length of the array.

###### Accessor methods

These methods do not modify the array and return some representation of the array.
- Array.prototype.concat()
Returns a new array that is this array joined with other array(s) and/or value(s).
- Array.prototype.includes()
Determines whether an array contains a certain element, returning true or false as appropriate.
- Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
- Array.prototype.join()
Joins all elements of an array into a string.
- Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
- Array.prototype.slice()
Extracts a section of an array and returns a new array.
- Array.prototype.toSource() 
Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.
- Array.prototype.toString()
Returns a string representing the array and its elements. Overrides the - Object.prototype.toString() method.
- Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

###### Iteration methods

Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

- Array.prototype.entries()
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
- Array.prototype.every()
Returns true if every element in this array satisfies the provided testing function.
- Array.prototype.filter()
Creates a new array with all of the elements of this array for which the provided filtering function returns true.
- Array.prototype.find()
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
- Array.prototype.findIndex()
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
- Array.prototype.forEach()
Calls a function for each element in the array.
- Array.prototype.keys()
Returns a new Array Iterator that contains the keys for each index in the array.
- Array.prototype.map()
Creates a new array with the results of calling a provided function on every element in this array.
- Array.prototype.reduce()
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
- Array.prototype.reduceRight()
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
- Array.prototype.some()
Returns true if at least one element in this array satisfies the provided testing function.
- Array.prototype.values()
Returns a new Array Iterator object that contains the values for each index in the array.
- Array.prototype[@@iterator]()
Returns a new Array Iterator object that contains the values for each index in the array.

### Function.prototype

 *  bind() method creates a new function  
  `function.bind(thisArg[, arg1[, arg2[, ...]]])`
Code : 
 ```javascript 
 var module = { x: 42, getX: function() { return this.x; } }
var unboundGetX = module.getX;
// The function gets invoked at the global scope
console.log(unboundGetX()); // expected output: undefined
var boundGetX = unboundGetX.bind(module); // Polymophisum
console.log(boundGetX());// expected output: 42
```

* apply() method calls a function with a given this value, and arguments  
 `function.apply(thisArg, [argsArray])`
Code :
 ```javascript 
 var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max);// 7
```
* call() to chain constructors for an object, similar to Java
`function.call(thisArg, arg1, arg2, ...)`
Code:
```javascript 
function Product(name, price) {
  this.name = name;
  this.price = price;
};
function Food(name, price) {
  Product.call(this, name, price); // Inheritace
  this.category = 'food';
};
function Toy(name, price) {
  Product.call(this, name, price); // Inheritace
  this.category = 'toy';
};
var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(`Chese Object : ${JSON.stringify(cheese)}`);  
//Chese Object : {"name":"feta","price":5,"category":"food"}
```

### Iterators and Generators in Javascript
- Iterators
An iterator is an object that can access one item at a time from a collection while keeping track of its current position. Javascript is a bit ‘simpler’ than c# in this aspect and just requires that you have a method called next to move to the next item to be a valid iterator.
```javascript
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
```
We could now use this function to create an iterator and iterate over it:
```javascript
let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}
console.log("Iterated over sequence of size: ", result.value); 
// [5 numbers returned, that took interval in between: 0 to 10]

```

- Generators 
Generator functions are written using the function* syntax. When called initially, generator functions do not execute any of their code, instead returning a type of iterator called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

```javascript
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
```

- Deferred Execution
Since we have the same possibilities for yielding return values in Javascript as in C#, the only what’s missing to be able to recreate LINQ in Javascript are extension methods. Javascript doesn’t have extension methods, but we can do something similar.

What we’d like to do is to be able to write something like this:
`generateNumbers().skip(3).take(5).select(n => n * 3);`

```javascript
function* Chainable() {
} 
function createChainable(f){ 
    f.prototype = Chainable.prototype; 
    return f; 
}
```

```javascript
function createFunction(f) { 
    createChainable(f); 
    Chainable.prototype[f.name] = function(...args) { 
        return f.call(this, ...args); }; 
        return f; 
    }
}
```

In the above method:

- It makes sure the function itself is also chainable, by calling createChainable
- Then it attaches the method to the shared protoype (using the name of the function). The method receives the arguments, which gets passed on to that method while supplying the correct this-context.

With this in place we can now create our “extension methods” in Javascript:
```javascript
// the base generator 
let test = createChainable(function*(){ 
    yield 1; 
    yield 2; 
    yield 3; 
    yield 4; 
    yield 5; 
}); 
// an 'extension' method 
createFunction(function* take(count){ 
    for(let i=0;i<count;i++){ 
        yield this.next().value; 
    } 
}); 
// an 'extension' method 
createFunction(function* select(selector){ 
    for(let item of this){ 
        yield selector(item); 
    } 
}); 

// now we can iterate over this and this will log 2,4,6) 
for(let item of test.take(3).select(n => n*2)){ 
    console.log(item); 
}
```
Note that in the above method, it doesn’t matter whether we first <font face="Courier New">take</font> and then <font face="Courier New">select</font> or the other way around. Because of the deferred execution, it will only fetch 3 values and do only 3 selects.

### Caveat

One problem with the above is that it doesn’t work on standard iterables such as Arrays, Sets and Maps because they don’t share the prototype. The workaround is to write a wrapper-method that wraps the iterable with a method that does use the shared prototype:

```javascript
let wrap = createChainable(function*(iterable){ 
    for(let item of iterable){ 
        yield item; 
    } 
});
```
```javascript
function* genFb(n) {
    let current = 0, next = 1, sum;
    yield current;
    for (let i = 0; i < n; i++) {
        sum = current + next;
        current = next;
        next = sum;
        yield current;
        // console.log(`sum : ${sum} current : ${current} next : ${next} `);
    }
}
let fibonacciGenratorPointer = genFb(7);
console.log(...fibonacciGenratorPointer);
```

With the wrap function, we can now wrap any array, set or map and chain our previous function to it:
```javascript
let myMap = new Map(); 
myMap.set("1", "test"); 
myMap.set("2", "test2"); 
myMap.set("3", "test3"); 
for(let item of wrap(myMap).select(([key,value]) => key + "--" + value)
                           .take(3)){ 
   console.log(item); 
}

```
One more thing I want to add is the ability to execute a chain, so that it returns an array (for c# devs: the ToList-method). This method can be added on to the prototype:
```javascript
Chainable.prototype.toArray = function(){ 
    let arr = []; 
    for(let item of this){ 
        arr.push(item); 
    } 
    return arr; 
}
```

 reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
`arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`

```javascript
const sortArray = (list) => {
    return list.sort((a, b) => a - b).reduce((ObjectMap, n, i) => {
        if (i == 0) { ObjectMap.previous = n; return ObjectMap; }; // 2
        const sumv2 = ObjectMap.previous + n;
        ObjectMap.previous = sumv2; // 2 6
        ObjectMap.total += sumv2; // 
        return ObjectMap;
    }, { previous: 0, total: 0 }).total
}
console.log(`Mininum Cost :  ${sortArray([20, 4, 8, 2])}`); // 54
```

### Spread Operator in JavaScript


- Expanding Arrays
We can use the spread operator on iterables like a String or an array and it'll put the contents of the iterable into individual elements.

```javascript
let greet = ['Hello', 'World'];
console.log(greet); // ['Hello', 'World']
console.log(...greet); // Hello World
```
```javascript
let greetings = "hello";
let chars = [...greetings];
console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]
```
- Combining Arrays
Let us take advantage of the fact that we can now expand an array using the spread operator.
```javascript
let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
let subscribers = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribers);
 //[ 'billy@example.com', 'sally@gmail.com','timmy@gmail.com','tammy@example.com','tommy@gmail.com' ]
```
```javascript
let arr1 = ['John', 'Sofia', 'Bob'];
let arr2 = ['Julia', 'Sean', 'Anthony'];
arr2.push(...arr2);
console.log(arr1);
// [ 'Julia', 'Sean', 'Anthony', 'John', 'Sofia', 'Bob' ]
```
- Copying Arrays and Objects
In JavaScript every non-primitive entity is an Object, which means that arrays are also objects
```javascript
let arr1 = ['John', 'Sofia', 'Bob'];
let arr2 = arr1;
console.log(arr2); // [ 'John', 'Sofia', 'Bob' ]
arr1.push('Sally'); // Change arr1
console.log(arr2); // [ 'John', 'Sofia', 'Bob', 'Sally' ]
```
```javascript
let arr1 = ['John', 'Sofia', 'Bob'];
let arr2 = [...arr1];
console.log(arr2); // [ 'John', 'Sofia', 'Bob' ]
arr1.push('Sally'); // Change arr1
console.log(arr2); // [ 'John', 'Sofia', 'Bob' ]
```
```javascript
let arr1 = ['John', 'Sofia', 'Bob'];
let arr2 = [...arr1, 'Anthony', 'Sean'];
console.log(arr2); // ['John', 'Sofia', 'Bob', 'Anthony', 'Sean']
```
```javascript
const billing = { billingContact: '0987654321', billingAddress: 'street no 123, xyz city' };
const shipping = { shippingContact: '123456789', shippingAddress: 'street no 999, abc city' };
const custInfo = { ...billing, ...shipping };
console.log(custInfo);
// {
//   billingContact: '0987654321',
//   billingAddress: 'street no 123, xyz city',
//   shippingContact: '123456789',
//   shippingAddress: 'street no 999, abc city'
// }
```
```javascript
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4, ...o1};
console.log(o2); // { b: 2, c: 4, a: 1 }
const o1 = { a: 1, b: 2 };
const o2 = { ...o1, b: 3, c: 4};
console.log(o2); // { a: 1, b: 3, c: 4 }
```

- Using with Math Functions
JavaScript has a Math object which contains several methods to operate with a set of data, i.e. a list of data.
```javascript
let mylist = [10, 23, 83, -1, 92, -33, 76, 29, 76, 100, 644, -633];
Math.max(mylist[0], mylist[1], mylist[2]); // 83
let mylist = [10, 23, 83, -1, 92, -33, 76, 29, 76, 100, 644, -633];
Math.max(...mylist); // 644
```


## synchronus Vs asynchronus

- synchronus 
    Thiis will execute your code line by line. It means it will not go to next line unless your current line of code get executed.
- asynchronus 
    If you any IO operation, It will not wait to execute your line of code. it will go to next line.


## Event loop in Javascript
 Please check below code :

```javascript
        (function() {
          console.log('this is the start');
          setTimeout(function cb() {
            console.log('Callback 1: this is a msg from call back');
          }); // has a default time value of 0
          console.log('this is just a message');
          setTimeout(function cb1() {
            console.log('Callback 2: this is a msg from call back');
          }, 0);
          console.log('this is the end');
        })();
```
* How event loop works?
    1. Push all command to callback Stack. 
    2. Stack execute this command, whoevver will get executed first it will go to step 3.
    3. Event loop will keep a Count of Step 1 &  Step 2.
    3. Once Callback Stack is empty and callback Queue is full.
    4. Event loop with print it.

* Out Put  for Program :

    // "this is the start" 
    // "this is just a message"
    // "this is the end"
    // "Callback 1: this is a msg from call back"
    // "Callback 2: this is a msg from call back"

   ## SOAP Vs REST

| SOAP   |      REST      |  
|----------|:-------------:|
| SOAP is a standardized protocol that sends messages using other protocols such as HTTP, TCP,FTP and SMTP etc..| Only HTTP protocol for data transmission|
| WSDL Files, defualt XML |    JSON   | 
| SOAP UI | Postman |  
| NodeJS SOAP, WCF & Web Services  | ExpressJS & C# Web API |  
