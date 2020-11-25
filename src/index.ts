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

let myAnyVariable:unknown = "String" // or type = any
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
