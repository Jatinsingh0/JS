/**
 * Problem: Replace all instances of a specific character in a string with another character.
 */

/**
 * Approach:
 * 1. use "split" method to replaceCharacter with newCharacter.
 * 2. Return the modifyChar.
 */

// Code...

const replaceCharacter = (string, replaceChar, newChar) => {
   const modifyChar = string.split(replaceChar).join(newChar)
   return modifyChar;
}

console.log(replaceCharacter("madam", "m", "o"))