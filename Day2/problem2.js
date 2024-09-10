/**
 * Problem: Find the Largest Number in an Array
 * -Return the largest number in an array.

/**
 * Approach:
 * 1. This is simple and i used multiple approach to solved this.
 * 2. Reduce Method, orEach Method and Math.max with spread operator.
 */

// Code...

// Reduce Method
const arr = [1,2,3,4,5,6,17,8,9];
const findTheLargestNumber = arr.reduce((acc, curNum) => acc > curNum ? acc : curNum , arr[0]);
console.log(findTheLargestNumber);

// forEach Method
const arr1 = [11,23,36,42,53,69];
let largestNumber = 0;
arr1.forEach((num) => {
    if(largestNumber < num){
        largestNumber = num;
    } 
})
console.log(largestNumber)

// Math.max with spread operator
const arr2 = [21,33,64,43,97,86,32]
const largestNum = Math.max(...arr2)  //The spread operator (...) is used to "spread" the elements of an array into individual arguments. 
// Example: If arr2 = [1, 2, 3], then ...arr2 becomes 1, 2, 3.
console.log(largestNum)