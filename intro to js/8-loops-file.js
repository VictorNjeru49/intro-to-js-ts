 // Define the height of the triangle
 let height = 5;
 var stars;
 var row;
 var column;

 // Using a for loop to print the triangle
 for ( row = 1; row <= height; row++) {
  stars = ''; // Empty string to build each row

//  // Add '*' to the string for each column in the current row
 for ( column = 1; column <= row; column++) {
 stars += '*';  // Append '*' to the stars string
 }
//  // Print the row
 console.log(stars);
}

for (row =1; row<=height; row++){
    stars='';
    for ( column = 1; column <= row; column++) {
        stars += '⭐'
    }
console.log(stars)
}

 // Using a for loop to print the reversed triangle
 for (let row = height; row >= 1; row--) {
 let stars = ''; // Empty string to build each row
 // Add '*' to the string for each column in the current row

 for (let column = 1; column <= row; column++) {
 stars += '⭐';  // Append '*' to the stars string
 }
 // Print the row
 console.log(stars);
 }


  let row = 1;
 while (row <= height) {
 let stars = ''; // Empty string to build each row
 // Add '*' to the string for each column in the current row
 let column = 1;
 while (column <= row) {
 stars += '*';  // Append '*' to the stars string
 column++;
 }
 // Print the row
 console.log(stars);

 row++;
 }


  do {
 text += "The number is " + i;
 i++;
 }
 while (i < 10);