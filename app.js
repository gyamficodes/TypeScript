"use strict";
// TypeScript Simple Types
// There are three main primitives in JavaScript and TypeScript.
// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"
// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
// In both examples below firstName is of type string
// Explicit Type
// Explicit - writing out the type:
//Explicit type assignment are easier to read and more intentional.
const firstName = 21;
// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstNamea = "Dylan";
//Unable to Infer
const infer = JSON.parse("55");
console.log(typeof infer);
//TypeScript Special Types
//any siable type checking
let Login = true;
Login = "Yaw";
//TypeScript Arrays
const Data = [];
const Items = [1];
// Readonly
// The readonly keyword can prevent arrays from being changed.
let sim = ["MTN"];
// sim.push("Vodaphone")
console.log(sim);
// Readonly
// The readonly keyword can prevent arrays from being changed7
const Locks = ["Name"];
Locks.map((ele) => {
    return console.log(ele);
});
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
//typescript object
let student = {
    name: "Gyamfi John",
    info: "Software Developer",
    age: 23,
};
console.log(student);
//infer object type
const Customer = {
    Name: "John",
    info: "Software Developer",
    age: 23,
};
//Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.
const Workers = {
    Name: "john",
};
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel,
};
let Laptop = {
    name: "Lenovo",
    type: "Lenovo i5",
    gen: 11,
    year: 2023,
};
const gyammfiproperty = {
    name: "land",
    years: 2024,
    owner: "Gyamfi",
    time: "12:00 PM", // Add the 'time' property
};
console.log(gyammfiproperty);
//union types
const Amount = 200;
console.log(Amount);
// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.
// Read more about functions here.
// Return Type
function getTodayTime() {
    return new Date().getTime();
}
//void means the number will not return any type
function getMessage() {
    console.log("Hello");
}
getMessage();
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
function addprice(a, b) {
    console.log(a + b);
}
addprice(50, 50);
// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
const addItems = (rice, Provision, transportation) => {
    console.log(rice + Provision + (transportation || 20));
};
addItems(10, 10, 20);
//default parameters
function defaultData(name, age) {
    return `${name} + ${age}`;
}
//   There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.
// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
const x = 'John';
console.log(x.length);
const a = 30;
console.log(a);
//typescript classes
class Person {
}
const person = new Person();
person.name = "John";
console.log(person);
//There are three main visibility modifiers in TypeScript.
class Cars {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const Cybertruck = new Cars('Cybertruck');
console.log(Cybertruck);
//TypeScript Basic Generics
class Machine {
    constructor(type) {
        this.type = type;
    }
    getData() {
        return `${this.type}`;
    }
}
const machine = new Machine('Car');
console.log(machine);
const Phone = new Machine('Phone');
Phone.getData();
console.log(Phone);
const Locations = {
    x: 5,
    y: 10
};
const laptop = {
    Name: "Lenovo",
    Gen: 11,
    Ssd: 512
};
console.log(laptop);
// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
const nameAge = {
    name: "John",
    age: 10,
};
const Student1 = {
    name: 'John',
    age: 23
};
console.log(Student1);
