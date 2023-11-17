// Declare a label sum with the keyword let and assign it to the value 0.
let sum = 0;

// Declare a label myGrades with the key word const and assign it to an array of three numbers.
const myGrades = [50, 75, 100];

// Reassign the value of sum to be the sum of the three numbers in myGrades.
sum = myGrades[0] + myGrades[1] + myGrades[2];

// Declare a label average with the keyword let and assign it to the value of sum divided by the length of myGrades.
let average = sum / myGrades.length;

// Print the value of average to the console.
console.log(average);