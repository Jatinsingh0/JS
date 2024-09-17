/**
 * Problem: Remove All Falsy Values from an Array
 * -Remove all falsy values (e.g., null, undefined, 0, NaN, "", false) from an array.
 * 
*/

// Code...

const arr = ["frontEnd", null, "array", 0, "javaScript", false, 43, "coding", undefined, true, NaN];
const removeFalsyValues = (values) => {
    const trueValues = [];
    values.forEach((value) => {
        if(value){                 // if (value) only passes if value is truthy
            trueValues.push(value)
        }
    });
    return trueValues
}

console.log(removeFalsyValues(arr));
