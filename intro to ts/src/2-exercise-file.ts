let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;
let nothing: null = null;
let undefinedValue: undefined = undefined;

console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof isActive); // boolean
console.log(typeof nothing); // object (this is a known quirk in JavaScript)
console.log(typeof undefinedValue); // undefined

function greet(fname: string, lname: string): string {
    
    let greeting: string = "Hello, " + `${fname}` + " " + `${lname}` + "!";
    return greeting;
}
function greet2(fname: string, lname: string): string {
    
    let greeting: string = "Hello, " + `${fname}` + " " + `${lname}` + "!";
    return greeting;
}

console.log(greet("John", "Doe")); // Hello, John Doe!
console.log(greet2("Mary", "Doe")); // Hello, John Doe!