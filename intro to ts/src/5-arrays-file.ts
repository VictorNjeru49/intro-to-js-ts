const cars: string[] = ['Ford', 'Chevy', 'Toyota', 'Honda', 'Nissan'];
const numbers: number[] = [1, 2, 3, 4, 5];

const mixedArray: (string | number)[] = ['Ford', 1, 'Chevy', 2, 'Toyota', 3, 'Honda', 4, 'Nissan', 5];
const booleanArray: boolean[] = [true, false, true, false, true];

const totalcars =cars.length; // Getting the length of the array
const lastcarindex =totalcars - 1; // Getting the last element

const car: string = cars[0]; // Accessing the first element
const lastcar: (string| number) = cars[lastcarindex]; // Getting the last index
const number: number = numbers[1]; // Accessing the second element
const mixed: (string | number) = mixedArray[2]; // Accessing the third element
const booleanValue: boolean = booleanArray[3]; // Accessing the fourth element.


//console.log(car); // Output: Ford
//console.log(lastcar); // Output: 4
//console.log(number); // Output: 2
//console.log(mixed); // Output: Toyota
//console.log(booleanValue); // Output: false


cars.push('Mazda'); // Adding a new element to the array
cars.unshift('Subaru'); // Adding a new element to the beginning of the array
// cars.shift(); // Removing the first element from the array
// cars.pop(); // Removing the last element from the array
// cars.splice(2, 1); // Removing the element at index 2 one element

cars.map((car: string, index: number) => {
    console.log(`The car ${index} is in index ${car}`); // Output: Ford, Chevy, Toyota, Honda, Nissan
    return car;
});

numbers.map((number:number, index:number)=>{
    console.log(`The number at index ${index} is ${number}`); // Output: 1, 2, 3, 4, 5
    return number;
})
for (let i = 0; i < cars.length; i++) {
    console.log(`The car ${i} is in index ${cars[i]}`); // Output: Ford, Chevy, Toyota, Honda, Nissan
}

