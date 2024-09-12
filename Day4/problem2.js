/**
 * Problem: Find the Minimum Number in an Array
 * - Return the smallest number in an array.
 *
 * Example:
 * arr: [1,2,3,1,2,3]
 * Output: 1
 */

/**
 * Approach:
 * 1. This is simple and i used multiple approach to solved this.
 * 2. Reduce Method, forEach Method and Math.min with spread operator.
 */

// Code...

// Reduce Method
const arr = [14,15,23,65,12,54,6,17,8,9];
const smallestNum = arr.reduce((acc, curNum) => acc < curNum ? acc : curNum , arr[0]);
console.log(smallestNum);

// forEach Method 
const arr1 = [11,23,36,42,53,69];
let smallestNumb = 76;
arr1.forEach((num) => {
    if(smallestNumb > num){
        smallestNumb = num;
    } 
})
console.log(smallestNumb)

// Math.max with spread operator
const arr2 = [21,33,64,43,97,86,32]
const smallestNumber = Math.min(...arr2)  
console.log(smallestNumber)