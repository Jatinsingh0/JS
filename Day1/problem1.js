/**
 * Problem: Reverse a String.
 * Given a string, return it reversed.
 
 * Example:
 * input("javaScript")
 * output("tpircSavaj")
 */

/**
 * Approach:
 * 1. Convert the string into an array using split("") method, because string can't be reversed.
 * 2. Reverse the array using the reserve() mehthod, this method only applies on array.
 * 3. Join the reversed array into a string using the join("") method.
 * 4. return the reversedString.
 */

// CODE...

const normalString = (str) => {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
};

console.log(normalString("javaScript"));
