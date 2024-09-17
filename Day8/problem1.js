/**
 * Problem: Find the Longest Word in a String
 */

// Code...
const str = "jatin is a good boy"

const longestStr = (str) =>{
    const words = str.split(" ")  //use "split" method to convert string into and array so that we can perform forEach loop.
    let long = ""
    words.forEach((word)=>{
        if(word.length > long.length){
           long = word
        }
    })
    return long
    
}
console.log(longestStr(str))