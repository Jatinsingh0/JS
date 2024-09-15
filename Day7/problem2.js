/**
 * Problem: Find Unique Elements in an Array
 * 
 * Example:
 * Input: [1, 2, 3, 4, 3, 2, 1]
 * Output: [1,2,3,4]
 */

/**
 * Approach:
 * 1. use built-in method "new Set(arr)" creates a Set from the array arr, removing duplicates.
 * 2. The "spread operator" is used to convert the Set back into an array.
 */

// Code...

const arr = [1, 2, 3, 4, 3, 2, 1]
const unique  = [...new Set(arr)];
console.log(unique)