"use strict";
//           🚀 Day 32 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 94:
// Use the .map() method to create a new array that contains the length of each word from an array of words.
let words = ["Hello", "World", "TypeScript", "NextJS", "Python"];
let lengths = words.map(word => word.length);
console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.
// Question 95: 
//Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterGreatThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
console.log(filterGreatThanTen([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // Outputs: [11, 12, 13, 14, 15]
// Question 96:
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
let number = [1, 2, 3, 4, 5];
function calculateSum(numbers) {
    return numbers.reduce((accumplator, current) => accumplator + current);
}
console.log(calculateSum(number));
