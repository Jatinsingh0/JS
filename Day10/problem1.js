/**
 * Problem: Generate a Random String of Given Length.
 */

/**
 * Approach:
 * 1. Define the "Characters" for randomString. 
 * 2. define empty "result" to store randomString.
 * 3. loop through the Given Length.
 * 4. use Math.floor(Math.random() * characters.length) to get the random string and store in the "result".
 */

// Code...

const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMBDKCKJSDCNORSTUVWXYZabcdefghijmnopqrstuvwxyz012338923649456789"; 
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); 
        result += characters[randomIndex]; //This adds the selected character to the "result" string.
    }
    return result;
};

console.log(generateRandomString(11));  
