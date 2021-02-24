// -  Brackets
var obj = {};
// -  Create
var obj2 = Object.create(Object.prototype);
// -  Empty Object
var obj3 = new Object();


let objbracket = {
    cat: 'meow',
    dog: 'woof'
};
let sound = objbracket.cat;
console.log(sound);
// meow


let objbracket2 = {
    cat: 'meow',
    dog: 'woof'
};
let sound1 = objbracket2['cat'];
console.log(sound1);
// meow
/**Complex Senario */
let objbracketComplex = {
    cat: 'meow',
    dog: 'woof'
};
let dog = 'cat';
let sound2 = objbracketComplex[dog];
console.log(sound2);
// meow
/**Object.defineProperty
 *configurable
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
Defaults to false.
* enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object.
Defaults to false.
A data descriptor also has the following optional keys:
* value
The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
Defaults to undefined.
* writable
true if and only if the value associated with the property may be changed with an assignment operator.
Defaults to false.
 * 
 * 
 */
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

console.log(object1.property1);
// expected output: 42
/**Object.defineProperties */
const object2 = {};
Object.defineProperties(object2, {
    property1: {
        value: 42,
        writable: true
    },
    property2: {}
});

/**bind */
var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX());
//undefined
var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
/**apply */
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max);

var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];
/**call */
for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species
                + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}
var fun = new Toy('robot', 40);
var cheese = new Food('feta', 5);
console.log(`Chese Object : ${JSON.stringify(cheese)}`);



const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(`accumulator : ${accumulator} currentValue : ${currentValue}`);


// 1 + 2 + 3 + 4
console.log(`######################`);
console.log(array1.reduce(reducer));


// Encapsulate : All to Single Unit
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