/**
 * Problem: Capitalize the First Letter of Each Word.
 * - Capitalize the first letter of each word in a string.
 *
 * Example:
 * input: "jatin is a good coder";
 * output: "Jatin Is A Good Coder."
 */

/**
 * Approach:
 * 1. Simply splits the sentence into an array using "split" method.
 * 2. Use "map" function to iterate over each element of on array.
 * 3. use "charAt()" and "toUpperCase" methods to upperCase the first Letter
 * And joined using slice method.
 * 4. Lastly combined the transformed array into a single string using join(" ").
 */

// Code...

const capitalizeLetter = (sentense) => {
const splitToArray =  sentense.split(" ");
return splitToArray.map((word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

}
console.log(capitalizeLetter("jatin is a good coder."));
console.log(capitalizeLetter("javaScript is most important."));