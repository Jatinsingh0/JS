/**
 * Problem: Flatten a Nested Array
 * - Flatten a nested array into a single array.

/**
 * Approach:
 * 1. First use built-in "flat(infinity)"method to flatten a Nested Array.
 * 2. second use "Reduce" method.
 */

// Code...

// 1- use built-in "flat(Infinity)" method.
const nestedArray = [17, [12, [31, 4], 25], 31];
const arr = nestedArray.flat(Infinity);
console.log(arr)

// 2- reduce method.

const flattenArray = (arr) => {
    return arr.reduce((acc, curElem)=>{
        return Array.isArray(curElem) ? 
        acc.concat(flattenArray(curElem)) : //again call flattenArray with the curElem, if the curElem is nested array.
        acc.concat(curElem);
    }, [])
}
console.log(flattenArray(nestedArray))

//  Array.isArray() function check whether a given value is an array or not. 