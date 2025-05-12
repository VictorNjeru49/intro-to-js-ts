let num = 2;
console.log(num)

var x = 5;
var y = 6;
var z = x + y;

console.log(z)


function testVarLet() {
 if (true) {
 var varVar = "I am a var";
 let letVar = "I am a let";

console.log(letVar); // Error: letVar is not defined, because 'let' has block scope

 }
 console.log(varVar); // Works fine, 'var' has function scope
 }
 testVarLet();