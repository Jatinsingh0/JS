/**
 * Problem: Sum All Numbers Between Two Values
 * - Return the sum of all numbers between two given values, inclusive.
 *
 * Example:
 * Input: start = 1, end = 5
 * Output: 15
 */

/**
 * Approach:
 * 1. use "If" statement, if somehow start is greater than end, then we swap. 
 * 2. use 'forLoop' to iterate through the numbers from start to end.
 * 3. Return the total.
 */

// Code...

const sumOfAllBetween = (start, end) => {
   let total = 0

   if (start > end) {
    [start, end] = [end, start]; // Swap if start is greater than end
   };

   for(let i = start; i <= end; i++){
     total = total + i;
   }
   return total;
}

console.log(sumOfAllBetween(2, 9));
console.log(sumOfAllBetween(13, 8))  //here's start is greater than end
console.log(sumOfAllBetween(7, 3));  //here's start is greater than end