let firstName: string = "John";
let lastName: string = "Doe";

let fullName: string = `The fullname is: ${firstName} + " " + ${lastName}`;

console.log(fullName);  // Output: John Doe


let str1: string = "42";
let num1: number = parseInt(str1);
console.log(num1);  // Output: 42 (as number)


let str4: string = "100";
let num4: number = +str4;
console.log(num4);  // Output: 100 (as number)


let integer: number = 42;
let floatingPoint: number = 3.14159;
console.log(integer);       // Output: 42
console.log(floatingPoint); // Output: 3.14159


console.log(Number.MIN_VALUE);        // Output: 5e-324 (smallest positive number)
console.log(Number.MAX_VALUE);        // Output: 1.7976931348623157e+308 (largest number)
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991 (largest safe integer)
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991 (smallest safe integer)


let isLoggedIn: boolean = true;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}
// Output: Welcome back!

let a: boolean = true;
let b: boolean = false;

let result: boolean = a && b; // Logical AND
console.log(result);  // Output: false


let a1: boolean = true;
let b1: boolean = false;

let result1: boolean = a1 || b1; // Logical OR
console.log(result1);  // Output: true



let a2: boolean = true;
let b2: boolean = false;

console.log(!a2);  // Output: false (Negation of `true`)
console.log(!b2);  // Output: true (Negation of `false`)



let isUserAuthenticated: boolean = false;

// Simulate login process
function login(username: string, password: string) {
    if (username === "admin" && password === "password123") {
        isUserAuthenticated = true;  // User is authenticated
    }
}

login("admin", "password123");

if (isUserAuthenticated) {
    console.log("User has logged in successfully.");
} else {
    console.log("Invalid credentials.");
}
// Output: User has logged in successfully.


// let person: { name1: string, age1: number } | null = null;  // person can either hold an object or be null
let person: { name1: string, age1: number } | null = {
    name1: "Alice",
    age1: 30
};  


if (person === null) {
    console.log("No person found.");
} else {
    console.log(`Name: ${person.name1}, Age: ${person.age1}`);
}
// Output: No person found.


// Object with inferred types
let person2 = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello " + this.name);
  }
};

person2.greet(); // Output: Hello John

// Object with explicit types
let employee: { name: string; age: number; jobTitle: string } = {
  name: "Jane",
  age: 35,
  jobTitle: "Developer"
};
console.log(employee.name); // Output: Jane
console.log(employee.age);  // Output: 35
console.log(employee.jobTitle); // Output: Developer

