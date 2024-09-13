/**
 * Problem: Sum Array Elements
 * - Find the sum of all elements in an array.
 *
 * 
/**
 * Approach:
 * 1. Super simple just use 2 built-in Methods.
 * 2. "reduce" method and "for" loop.
 */

// Code...

const arr = [1,3,4,5,8,25,2,5];

// Reduce Method
const sumOfAll = () => {
    const sum = arr.reduce((acc, curElm) => {
        return acc + curElm;
    }, 0)
    return sum;
}

console.log(sumOfAll());


// for loop
const sumofAll2 = () => {
    let count = 0;
    for(let i =0; i < arr.length; i++){
      count = arr[i] + count
    }
    return count;
}
console.log(sumofAll2());