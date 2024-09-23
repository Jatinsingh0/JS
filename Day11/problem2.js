/**
 * Problem: Find common elements in multiple arrays.
 */

/**
 * Approach:
 * 1. use "reduce" method and "filter" method to checkout the common elements.
 * 2. acc takes first array as initial value and arr starts with second array.
 * 3. then "filter" method filters the common element and store in the acc.
 */

// Code...

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 5, 1];
const arr3 = [2, 3, 1, 8];

const findCommonElements = (arrays) => {
  return arrays.reduce((acc, arr) => {
    return acc.filter((element) => arr.includes(element));
  });
};

console.log(findCommonElements([arr1, arr2, arr3]));
