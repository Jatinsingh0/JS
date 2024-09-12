/**
 * Problem: Remove Duplicates from an Array
 * - Remove duplicate values from an array.
 *
 * Example:
 * arr: [1,2,3,1,2,3]
 * Output: [1,2,3]
 */

/**
 * Approach:
 * 1. Use "filter" method to removeDuplicate values.
 * 2. Taking two arguments current value and current index.
 * 3. then compareing and storing and Return new array.
 */

// Code...

const arr = [1,11,21,31,11,62,1,46,29,3,1,62,31,31,31];
const removeDuplicate = (val) => {
  let newArray =  val.filter((value, index) => {
    return val.indexOf(value) == index;
  })
  return newArray
}
console.log(removeDuplicate(arr))
