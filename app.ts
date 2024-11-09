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
const firstName: number = 21;

// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:

let firstNamea = "Dylan";

//Unable to Infer
const infer = JSON.parse("55");
console.log(typeof infer);

//TypeScript Special Types
//any siable type checking
let Login: any = true;
Login = "Yaw";

//TypeScript Arrays
const Data: string[] = [];
const Items: (string | number)[] = [1];

// Readonly
// The readonly keyword can prevent arrays from being changed.
let sim: readonly string[] = ["MTN"];
// sim.push("Vodaphone")
console.log(sim);

// Readonly
// The readonly keyword can prevent arrays from being changed7
const Locks: readonly string[] = ["Name"];
Locks.map((ele) => {
  return console.log(ele);
});

// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

//typescript object

let student: { name: string; info: string; age: number } = {
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

const Workers: { Name: string; id?: number } = {
  Name: "john",
};

// Type Aliases
// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// Example Get your own TypeScript Server
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

//Interface

interface laptop {
  name: string;
  type: string;
  gen: number;
  year: number;
}

let Laptop: laptop = {
  name: "Lenovo",
  type: "Lenovo i5",
  gen: 11,
  year: 2023,
};

// Extending Interfaces
// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface Property {
  name: string;
  years: number;
  owner: string;
}

interface Gyammfiproperty extends Property {
  time: string;
}

const gyammfiproperty: Gyammfiproperty = {
  name: "land",
  years: 2024,
  owner: "Gyamfi",
  time: "12:00 PM", // Add the 'time' property
};

console.log(gyammfiproperty);

//union types
const Amount: string | number = 200;
console.log(Amount);

// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.
// Read more about functions here.
// Return Type
function getTodayTime(): number {
  return new Date().getTime();
}

//void means the number will not return any type

function getMessage(): void {
  console.log("Hello");
}

getMessage();

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
function addprice(a: number, b: number) {
  console.log(a + b);
}

addprice(50, 50);

// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
const addItems = (rice: number, Provision: number, transportation?: number) => {
  console.log(rice + Provision + (transportation || 20));
};
addItems(10, 10, 20);

//default parameters
function defaultData(name: 'John', age:30) {
   return `${name} + ${age}`
  }



//   There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.
// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

const x : unknown  = 'John';
console.log((<string>x).length);

const a: unknown = 30;
console.log(a as number);


//typescript classes
  class Person {
    name!: string;
 
  }

const person = new Person()
person.name = "John";
console.log(person);



//There are three main visibility modifiers in TypeScript.
 class Cars {
    public name:string | undefined;
    public constructor(name:string){
       this.name = name;
    }

    public getName() {
        return this.name;
    }
 }

 const Cybertruck = new Cars('Cybertruck');
 console.log(Cybertruck);


//TypeScript Basic Generics

class Machine<T>{
    public type: T | undefined;

    constructor(type:T){
       this.type = type;
    }

    getData(): string {
        return `${this.type}`
    }
}

const machine = new Machine<string>('Car');
console.log(machine);

const Phone = new Machine<string>('Phone');
Phone.getData()
console.log(Phone);



//Utilities type;
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
// This chapter covers the most popular utility types.

// Partial
// Partial changes all the properties in an object to be optional.

interface Point {
    y:number,
    x:number
}


const Locations: Partial<Point> = {
    x:5,
    y:10
}



// Required
// Required changes all the properties in an object to be required.

interface Laptops {
    Name: string,
    Gen: number,
    Ssd: number
}


const laptop: Required<Laptops> = {
    Name: "Lenovo",
    Gen: 11,
    Ssd:512
}

console.log(laptop);


// Record
// Record is a shortcut to defining an object type with a specific key type and value type.

const nameAge: Record<string, string | number> = {
    name: "John",
    age: 10,
};


// Omit
// Omit removes keys from an object type.
 interface Student {
    name: string,
    age: number,
    school:string
 }


 const Student1: Omit<Student, 'school'> = {
    name: 'John',
    age: 23
 }

 console.log(Student1);



//  Pick
// Pick removes all but the specified keys from an object type.

  interface Water{
    verna:string,
    oa:string,
    voltic:string
  }

const water: Pick<Water, 'verna'> = {
    verna: 'verna',
}


const water2: Pick<Water, 'oa'> = {
    oa:'OA'
} 


// Exclude
// Exclude removes types from a union.
 type primitives = string | number | boolean;

 const valueL: Exclude<primitives, string> = true



//  Readonly
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.


interface Person {
    name: string;
    age: number;
  }


  const person3: Readonly<Person> = {
    name: "Dylan",
    age: 35,
  };


 // person3.name = 'Israel';  // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.





// interface history

