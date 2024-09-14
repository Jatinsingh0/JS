/**
 * Problem: Merge Two Sorted Arrays
 * - Merge two sorted arrays into one sorted array.

/**
 * Approach:
 * 1. Merge to sorted array using "concat" method.
 * 2. sorted merged array using "Sort" method with comparing.
 */

// Code...

const arr1 = [1,5,7,8];
const arr2 = [1,11,19,22];

const mergedArray = arr1.concat(arr2);
const sortedArray = mergedArray.sort((a,b) => a-b)
console.log(sortedArray)