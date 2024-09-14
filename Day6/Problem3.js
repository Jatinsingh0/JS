/**
 * Problem: Find the Missing Number in a Sequence

/**
 * Approach:
 * 1. first i get the length of an array.
 * 2. Calculate the sum of numbers from 0 to arrLength using the formula.
 * 3. Sum of elements in the array and return.
 */

// Code...


const findMissingNum = (arr) => {
  const arrLength = arr.length;
  const sum = (arrLength * (arrLength+1)) / 2;
  const actualSum = arr.reduce((acc, curElm) => acc + curElm, 0);
  return sum - actualSum;
}

console.log(findMissingNum([0,1,2,4]))