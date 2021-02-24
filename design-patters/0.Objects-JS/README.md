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