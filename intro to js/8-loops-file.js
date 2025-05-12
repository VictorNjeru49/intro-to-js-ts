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