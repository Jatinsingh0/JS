/**
 * Problem: Check if a String Contains a Substring.
 * - Return true if the main string contains the substring.
 *
 * Example:
 * mainString: "javascript"
 * subString: "java"
 * Output: true
 */

/**
 * Approach:
 * 1. convert mainString and subString to lowerCase to ensure case-insensitive comparison.
 * 2. Use "includes()" method to check if the subString exists in the mainString.
 * 2. Return true if it does, otherwise return false.
 */

// Code...

const checkSubString = (mainString, subString) => {
   mainString = mainString.toLowerCase();
   subString = subString.toLowerCase();
   return mainString.includes(subString);
}

console.log(checkSubString("Hello Jatin", "jatin"));
console.log(checkSubString("Volkswagen owns many brands", "Volks"));
