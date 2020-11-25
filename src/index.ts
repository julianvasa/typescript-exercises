import { sum, sum2 } from './functions';
import { Colors } from './enums';
import { Person } from './interfaces';
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
console.log(sum(2, 3));
console.log(sum2("2", 10));

/* ---------------  Enums --------------- */
let myEnum = Colors.RED
switch (myEnum) {
    case Colors.RED: { console.log("RED"); break; }
    default: console.log("Unknown color");
}

/* ---------------  Interfaces --------------- */
const concatPersonData = (person: Person) =>{
    return person.name + " " + person.surname + " age: "+person.age;
}

const person1: Person = {
    name: "John",
    surname: "Doe",
    age: 30
}
console.log(concatPersonData(person1));

/* ---------------  Classes --------------- */
let greeter = new Greeter("World")
console.log(greeter.greet());
let specificGreeting = new SpecificGreeter("Specific World")
console.log(specificGreeting.greet());
