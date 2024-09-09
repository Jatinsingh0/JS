/**
 * Problem: Count Occurrences of a Character.
 * Count the number of times a specific character appears in a string.
 
 * Example:
 * input("javaScript" "a")
 * output(2)
 */

/**
 * Approach:
 * 1. Initialize a count variable to 0.
 * 2. Using "for" loop to loop through each character of a string str. 
 * 3, using the "if" statement, if the current character matches the target character, then we increment the count.
 * 4. After the loop finishes,return the count.
 */

// CODE...

const func = (str, chr) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
       if(str[i] === chr){                 // str[i] refers to the character at position i in the string str.
         count++
       }
    }
    return count
}
console.log(func("javaScript", "a"));
console.log(func("practice", "c"));
console.log(func("world", "n"))
