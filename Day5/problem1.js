/**
 * Problem: Find the First Non-Repeating Character in a String

/**
 * Approach:
 * 1. Convert the string into an array of characters using "split" methid.
 * 2. use the "reduce" method to create an object that stores the count of each character in the string.
 */

// Code...

const findNonRepeatingCharacter = (str) => {
const split = str.split("").reduce((acc, curElm )=>{
  acc[curElm] = (acc[curElm] || 0) + 1;
  return acc;
}, {});

for (let char of str) {
    if (split[char] === 1) {
      return char;
    }
  }

  return "No, non-repeating character found";

}

console.log(findNonRepeatingCharacter("Jatin"))