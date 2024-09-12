/**
 * Problem: Generate a Random Number Between Two Values
 * - Generate a random number between two given values.

/**
 * Approach:
 * 1. simply used "Math" built-in methods to solve this question.
 */

// Code...


//This generates random number between 1 and 2;
let x = Math.random() + 1  
console.log(x)

// Random Number Between Two Values.
const randomGenerator = (min, max) => {
 let randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
 console.log(randomNum)
}
randomGenerator(27, 37)