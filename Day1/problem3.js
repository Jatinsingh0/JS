/**
 * Problem: Find the Average of Numbers in an Array.
 * Calculate the average of numbers in an array.
 */

/**
 * Approach:
 * 1. calculate the sum of all numbers in the array using reduce function.
 * 2. divide the sumOfAll by the arr.length to get the average.
 * 3. then Returning  the average.
 */

// Code...

const arr = [2,3,4,5,6,7,8,9];

const findingAverage = () => {
 let sumOfAll = arr.reduce((acc, curElem)=> acc + curElem, 0 );
 const average = sumOfAll / arr.length;
 return average;
}

findingAverage();