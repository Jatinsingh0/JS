/**
 * Problem: Create a Frequency Counter for Characters in a String
 */

/**
 * Approach:
 * 1.  create an empty object "counter" to store each character as a key and its frequency.
 * 2. use a "for loop" to iterate over each character in the string.
 * 3. use ifElse statement to check frequency of a character.
 * 4. return the object.
 */

// Code...

const frequencyCounter = (string) => {
    let counter = {}
    for(let i=0; i < string.length; i++){
        let char = string[i]
        if(counter[char]){
            counter[char]++
        }else{
            counter[char] = 1
        }
    }
 return counter
}

console.log(frequencyCounter("jatin singh"))