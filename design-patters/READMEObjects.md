##### Create Object
-  Brackets
`var obj = {};`
-  Create
 ` var obj2 = Object.create(Object.prototype);`
-  Empty Object
`var obj3 = new Object();`
###### Object Key Value Pair
- Dot Notation
`var obj = {};`
`obj.temp = 'new value';`
Advantage : This will help create strong type Object
Disadvantage : When working with dot notation, property identifies can only be alphanumeric (and _ and $). Properties can’t start with a number.
**syntax:** `objectName.propertyName;`

1. Property identifies can only be alphanumeric (and _ and $)
2. Property identifiers cannot start with a number.
3. Property identifiers cannot contain variables.
4. OK — obj.prop_1, obj.prop$
5. Not OK — obj.1prop, obj.prop name

- Bracket Notation 
`var obj = {};`
`var val = 'new value'`
`obj[val] = 'update value';`
Advantage : This wil help if you don't know what will assign to your Object.
Disadvantage : Difficult to validate at run time
**syntax:** `objectName["propertyName"]`

1. Property identifiers have to be a String or a variable that references a String.
2. It is okay to use variables, spaces, and Strings that start with numbers
3. OK — obj["1prop"], obj["prop name"]


#### Javascript Proptype

`Object.defineProperty(obj, prop, descriptor)`
`Object.defineProperties(obj, props)`
`Object.seal(task5);`
`obj.hasOwnProperty(prop)`
`Object.getOwnPropertyNames()).`
`Object.isExtensible(object1), Object.preventExtensions(), Object.seal(), or Object.freeze()`
- writable: false, /** if you set to true can't modify function Or proprty */
- enumerable: true,
- configurable: false /** if you set to true can't modify Object. No duplicate Object */
- seal /** new properties can be added to them, but can modify existing property */
- freeze or  /*Stop Inheritance*/
- preventExtensions /** Stop Inheritance , Stop Adding  , Stop Modifiying**/

#### Javascript Prototype Function

`function.bind(thisArg[, arg1[, arg2[, ...]]])`
`function.apply(thisArg, [argsArray])`

- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
- The apply() method calls a function with a given this value, and arguments provided as an array 
- The call() method calls a function with a given this value and arguments provided individually.



#### Bind()

We can also pass extra arguments to the bind method. The general syntax for this is `function.bind(this, arg1, arg2, ...)`. For example:

```javascript
function greeting(lang) {
    console.log(`I am ${this.name} spoke language ${lang}`);
}
const person1 = {
    name: "x"
}
const person2 = {
    name: "y"
}
const greetingx = greeting.bind(person1, 'en'); // send current object person1 to function
greetingx(); // Not it should print;
// I am x spoke language en
// I am y spoke language de
const greetingy = greeting.bind(person2, 'de')
greetingy(); // Not it should print;
```

In the above example, the bind method creates a new function with certain parameters predefined (lang in this case) and this keyword set to the john and x & y objects.

#### Call ()
The call method sets the this inside the function and immediately executes that function.
The difference between call() and bind() is that the call() sets the this `function.call(thisArg, arg1, agr2, ...)` keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword.

```javascript
function greeting(lang) {
    console.log(`I am ${this.name} ${this.age} spoke language: ${lang}`);
}

function greetingII() {
    console.log(`I am ${this.name} ${this.age}`);
}
const person1 = {
    name: "x",
    age: 35
}
const person2 = {
    name: "y",
    age: 32
}
greeting.call(person1, 'en'); //argumets like "en" is optional
// I am x 35 spoke language : en
greeting.call(person2, 'de');
// I am y 32 spoke language : de
greetingII.call(person1);
// I am x 35
greetingII.call(person2);
// I am y 32
```

Above example is similar to the bind() example except that call() does not create a new function. We are directly setting the this keyword using call().

#### Apply ()

The apply() method is similar to call(). The difference is that the apply() `function.apply(thisArg, [argumentsArr])` method accepts an array of arguments instead of comma separated values.

```javascript
function greet(greeting, lanuage) {
    console.log(`${greeting}, ${this.name} spoke ${lanuage}`);
}
const person1 = {
    name: 'X'
}
const person2 = {
    name: 'Y'
}

greet.apply(person1, ['Hi', 'en']); //Hi, X spoke en 
greet.apply(person2, ['Hola', 'de']);//Hola, Y spoke de 
```

#### All in One 

```javascript
var name = "Tushar";
var myCar = {
	name:"Hyundai",
	colorChange:function(color){
		console.log(`${name} ${this.name} Color is - ${color}`);
	}
}
myCar.colorChange();
myCar.colorChange("blue");
myCar.colorChange.call(myCar, "black");
myCar.colorChange.apply(myCar, ["gray"]);
let newCar = myCar.colorChange.bind(myCar);
newCar("white");
console.log(`-------------------`);
var yourCar ={
	name: "Mercedes"
}
myCar.colorChange.call(yourCar, "black");
myCar.colorChange.apply(yourCar, ["gray"]);
let yourNewCar = myCar.colorChange.bind(yourCar);
yourNewCar("white");
// Tushar Hyundai Color is - undefined
// Tushar Hyundai Color is - blue
// Tushar Hyundai Color is - black
// Tushar Hyundai Color is - gray
// Tushar Hyundai Color is - white
// -------------------
// Tushar Mercedes Color is - black
// Tushar Mercedes Color is - gray
// Tushar Mercedes Color is - white

```

#### reduce()

```javascript
function add(total, num) {
    return total + num; 
}
function substract(total, num) {
    return total - num; 
}
var numbers = [175, 50, 25];
numbers.reduce(add);//250
numbers.reduce(substract);//100
```

### splice()
 
- insert & remove element from index 

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.splice(2, 1, "Lemon", "Kiwi");
 // Banana,Orange,Lemon,Kiwi,Mango
fruits.splice(2, 2, "Lemon", "Kiwi");
 // Banana,Orange,Lemon,Kiwi
 fruits.splice(2, 2);
//  Banana,Orange,Kiwi
```

### slice()

- return a new array object
```javascript
 var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(-3, -1);
// Lemon,Apple
 fruits.slice(1, 3);
//  Orange,Lemon
fruits.slice(0, -3);
// Banana,Orange
```


### continue label

```javascript
let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
```

#### Storage
- Local Sotarge 

    `windows.localStorage `
    `document.cookie`