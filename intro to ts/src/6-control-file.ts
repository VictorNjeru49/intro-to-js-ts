let x: number = 5;
let y: number = 3;

let sum: number = x + y;        // Addition
let diff: number = x - y;       // Subtraction
let prod: number = x * y;       // Multiplication
let quotient: number = x / y;   // Division
let remainder: number = x % y;  // Modulus (Remainder)
let power: number = x ** y;     // Exponentiation

console.log(sum, diff, prod, quotient, remainder, power);

let str: string = "5";
let num: number = +str;         // Converts string "5" to number 5

let positive: number = 5;
let negative: number = -positive; // Negates value to -5

console.log(num, negative);

let a: number = 10;
let b: number = 5;

let isGreaterThan: string = a > b ? 'a  is greater than b': 'a is lesser than b';   // Greater than
let isLessThan: boolean = a < b;      // Less than
let isEqualTo: boolean = a == b;      // Loose equality
let isNotEqual: boolean = a != b;     // Loose inequality

console.log(isGreaterThan, isLessThan, isEqualTo, isNotEqual);



let a1: number = 5;  // Binary: 0101
let b1: number = 3;  // Binary: 0011

let andResult: number = a1 & b1;    // AND: 0101 & 0011 = 0001
let orResult: number = a1 | b1;     // OR: 0101 | 0011 = 0111
let xorResult: number = a1 ^ b1;    // XOR: 0101 ^ 0011 = 0110
let notResult: number = ~a1;       // NOT: ~0101 = 1010

console.log(andResult, orResult, xorResult, notResult);


let name: string | null = null;
let defaultName: string = "Guest";

let userName: string = name ?? defaultName;

console.log(userName);  // Output: Guest (because name is null)


let greeting: string;
let time: number = 20;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)


let day: string;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown day";
}
console.log(day); // Output: Current day of the week

let height: number = 5;

for(let i=1; i<=height;i++){
    let stars:string ='';
        for(let j=1; j<=i;j++){
            stars += '*';
        }
    console.log(stars)
}
for(let row = height; row >=1; row--) {
    let stars: string = '';
    for (let cols = 1; cols <=row;cols++){
        stars += '*';
    }
    console.log(stars)
}
type people={
    fname: string, lname:string, age: number
}


const person4: people ={ 
    fname: "John", 
    lname: "Doe", 
    age: 25 
};

let text: string = "";
for (let x in person4) {
  console.log(`x: ${x} and person4: ${person4[x as keyof typeof person4]}`); // Output: fname, lname, age
}


let row: number = 1;

while (row <= height) {
let stars: string ='';
let column: number = 1;
while (column <= row) {
stars += '*';
column++;
}
console. log(stars);
row++;
}