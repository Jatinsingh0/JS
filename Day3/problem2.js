/**
 * Problem: Count Vowels in a String.
 * - Count the number of vowels in a string.
 */

/**
 * Approach:
 * 1. Use 3 different approach to solve this question.
 * 2. In first- I use forEach to iterate "vowels", use "forOf" loop to iterate string,
 *  then use "if" condition to check vowels and increment count.
 * 3.In second- use "split" method to  splits a string into an array,
 * use "forEach" to iterate and use "includes" method inside "if" condition to check.
 * 4. In Third- similar to 2Approach just use "Reduce" method.
 */

// Code...

const vowels = ["a", "e", "i", "o", "u"];

// 1 -
const countVowels = (vowel) => {
    let count = 0;
    vowels.forEach((v) => {
       for(let i=0; i < vowel.length; i++){
           if(vowel[i] === v){
              count++
           }
       }
    })
    return count;
}
console.log(countVowels("Jatin Singh"))
console.log(countVowels("Virat Kohli"))

// 2-
const countVowels2 = (vowel) => {
   let count = 0;
   vowel.toLowerCase().split("").forEach((v) => {
      if(vowels.includes(v)){
        count++
      }
   })
   return count;
}
console.log(countVowels2("jatinSingh"))
console.log(countVowels2("jatin Singh is practicing javascript"))

// 3-
const countVowels3 = (vowel) => {
    return vowel.toLowerCase().split("").reduce((acc, curElem)=>{
        return vowels.includes(curElem) ? acc + 1 : acc 
    }, 0)
 }
 console.log(countVowels3("jatin plays cricket."))