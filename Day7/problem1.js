/**
 * Problem: Sort an Array of Strings Alphabetically
 * - Given an array of strings, sort the strings in alphabetical order.
 * 
 * Example:
 * Input: [ "Cheeku", "Banana", "Apple"]
 * Output: ["Apple", "Banana", "Cheeku"]
 */

/**
 * Approach:
 * 1. Use the built-in "sort()" method.
 * 2. "localeCompare()" method compares two strings (a and b)
 * 2. then Return the sorted array.
 */

// Code...

const sortAlphabetically = (fruits) => {
  return fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sortAlphabetically(["Cheeku", "banana", "Apple","Banana"]))