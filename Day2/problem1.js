/**
 * Problem: Check if a String is a Palindrome.
 * -Check if a given string reads the same forward and backward.
 
 * Example:
 * 1. input("Java")
 *    output("avaJ")  //Not, a palindrome.
 * 2. input("madam")
 *    output("madam") //Yes, it's a palindrome.
 */

/**
 * Approach:
 * 1. Prompt to enter the string and store it in a variable "str".
 * 2. convert str to lowerCase to ensure case-insensitive comparison..
 * 3. create a function that reversed the str.
 * 4. "ifElse" statement to check if reverseStr equal to the original str.
 */

// Code...

let str = prompt("Enter to check palindrome")
str = str.toLowerCase()                   

const checkPlaindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  if(str === reverseStr){    // Checking if Palindrome.
      return "It's a Palindrome"
  }else{
    return "Not a Palindrome"
  }
}
console.log(checkPlaindrome(str));