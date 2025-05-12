// Variables for comparison
 let a = 10;
 let b = 5;
 // Using ternary operator to check equality (==)
 let equalityCheck = (a == b) ? "a is equal to b" : "a is not equal to b";
 console.log(equalityCheck);  // Output: a is not equal to b
 // Using ternary operator to check strict equality (===)

 let strictEqualityCheck = (a === b) ? "a and b are of equal value and type" 
: "a and b are not equal in value or type";
 console.log(strictEqualityCheck);  // Output: a and b are not equal in value or type,
 // Using ternary operator to check not equal (!=)

 let notEqualCheck = (a != b) ? "a is not equal to b" : "a is equal to b";
 console.log(notEqualCheck);  // Output: a is not equal to b
 // Using ternary operator to check strict not equal (!==)

let strictNotEqualCheck = (a !== b) ? "a and b are not equal in value or type" 
: "a and b are equal in value and type";
 console.log(strictNotEqualCheck);  // Output: a and b are not equal in value or type

 // Using ternary operator to check greater than (>)
 let greaterThanCheck = (a > b) ? "a is greater than b" : "a is not greater than b";
 console.log(greaterThanCheck);  // Output: a is greater than b

 // Using ternary operator to check less than (<)
 let lessThanCheck = (a < b) ? "a is less than b" : "a is not less than b";
 console.log(lessThanCheck);  // Output: a is not less than b

 // Using ternary operator to check greater than or equal to (>=)
 let greaterThanOrEqualCheck = (a >= b) ? "a is greater than or equal to b" : 
"a is less than b";
 console.log(greaterThanOrEqualCheck);  // Output: a is greater than or equal to b

 // Using ternary operator to check less than or equal to (<=)
 let lessThanOrEqualCheck = (a <= b) ? "a is less than or equal to b" : "a is greater than b";
 console.log(lessThanOrEqualCheck);  // Output: a is greater than b