### Creation design Pattern
#### Abstract Factory
JavaScript does not support class-based inheritance therefore the abstract classes as depicted in the diagram are not used in the JavaScript sample. Abstract classes and interfaces enforce consistent interfaces in derived classes. In JavaScript we must ensure this consistency ourselves by making sure that each 'Concrete' object has the same interface definition (i.e. properties and methods) as the others

In the example we have two Concrete Factories: EmployeeFactory and VendorFactory. The first one creates Employee instances, the second one Vendor instances. Both products are person types (with the same interface) which allows the client to treat them the same. An array with two employees and two vendors is created. Each person is then asked to say what and who they are.

The log function is a helper which collects and displays results.
Participants
The objects participating in this pattern are:

- AbstractFactory -- not used in JavaScript
declares an interface for creating products
- ConcreteFactory -- In sample code: EmployeeFactory, VendorFactory
a factory object that 'manufactures' new products
the create() method returns new products
- Products -- In sample code: Employee, Vendor
the product instances being created by the factory
- AbstractProduct -- not used in JavaScript
declares an interface for the products that are being created


![javascript-abstract-factory](./images/javascript-abstract-factory.jpg)

```javascript
// abstract factory pattern
class Employee {
	constructor(name) {
		this.name = name;

	}
	say() {
		console.log(`I am Employee:${this.name}`);
	}
}
class Vendor {
	constructor(name) {
		this.name = name;
	}
	say() {
		console.log(`I am Vendor:${this.name}`);
	}
}
class EmployeeFactory extends Employee {
	create(x) {
		return new Employee(x);
	}
}
class VendorFactory {
	create(x) {
		return new Vendor(x);
	}
}
const runObjets = ()=>{
	let persons = [];
	let employeeFactory = new EmployeeFactory();
	let vendorFactory = new VendorFactory();
	persons.push(employeeFactory.create("Tushar"));
	persons.push(vendorFactory.create("Kimi"));
	for(let person of persons){
		person.say();
	}
}
runObjets();
```

```javascript
function employee(name) {
	this.name = name;
	this.say = function() {
		console.log(`I am Employee: ${this.name}`);
	}
}

function vendor(name) {
	this.name = name;
	this.say = function() {
		console.log(`I am Vendor: ${this.name}`);
	}
}

function employeeFactory() {
	this.create = function(x) {
		return new employee(x)
	}
}

function vendorFactory() {
	this.create = function(x) {
		return new vendor(x)
	}
}
var runProcess = function() {
	var persons = [];
	persons.push(new employeeFactory().create("Tushar"));
	persons.push(new vendorFactory().create("Tushar"));
	for (var person of persons) {
		person.say();
	}
}
runProcess();
```