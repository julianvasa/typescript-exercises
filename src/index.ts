import { sum, sum2, funcWithTuples, funcWithOptionalParams } from './functions';
import { Colors } from './enums';
import { Person, PartialPerson, NumberOrStringAsNumber } from './interfaces';
import { Greeter, SpecificGreeter } from './classes';

/* ---------------  Variable types --------------- */
console.log('Hello World!')

const myString = "Hello brave new world"
// myString = "Trying to modify"; // Cannot modify const var
console.log(myString);

let myNumber = 4 // Inferred the type of the variable from the assigned value
myNumber = 10
console.log(myNumber)
myNumber = 0xf03 // number can be int, float, hex 
console.log(myNumber)

let myAnyVariable: unknown = "String" // or type = any
console.log(myAnyVariable);
myAnyVariable = 3
console.log(myAnyVariable);

/* ---------------  Arrays, Tuples --------------- */
const firstArray: string[] = ["first", "second", "third"]
console.log(firstArray);
const secondArray: [string, number, boolean] = ["String", 20, true] // fixed number of elements and specified their type, cannot add 4 elements
console.log(secondArray);
let variable: number | string = "string"
variable = 3
console.log(variable);
firstArray.forEach(element => {
    console.log(element);
});

/* ---------------  functions, null, undefined --------------- */
console.log(sum({ num: 2, num2: 3 }));
console.log(sum2("2", 10));
const x = funcWithTuples("Hello function with tuples as params", 21, false);
console.log(x);
const y = funcWithOptionalParams("another string", undefined, 22, 1)
console.log(y);


/* ---------------  Enums --------------- */
const myEnum = Colors.RED
switch (myEnum) {
    case Colors.RED: { console.log("RED"); break; }
    default: console.log("Unknown color");
}

/* ---------------  Interfaces --------------- */
const concatPersonData = (person: Person) => {
    return person.name + " " + person.surname + " age: " + person.age;
}

const person1: Person = {
    name: "John",
    surname: "Doe",
    age: 30
}
console.log(concatPersonData(person1));

const partialPerson: PartialPerson = {
    name: "Just the name"
}
console.log(partialPerson);

const z: NumberOrStringAsNumber = "one"
console.log(z);

/* ---------------  Classes --------------- */
const greeter = new Greeter("World")
console.log(greeter.greet());
const specificGreeting = new SpecificGreeter("Specific World")
console.log(specificGreeting.greet());

/* ---------------  Access modifiers --------------- */
// greeter.greeting // cannot access it's private