/**
 *Problem: Count the Number of Words in a String.

/**
 * Approach:
 * 1. just use "split" method to convert the string into an array and return the length.
 */

// Code...

const str = "Jatin";
const numberOfWords = (word) =>{
    const split = word.split("")
    return split.length;
}
console.log(numberOfWords(str))