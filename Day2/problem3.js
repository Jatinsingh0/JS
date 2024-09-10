/**
 * Problem: Convert Celsius to Fahrenheit.
 * -Convert a temperature from Celsius to Fahrenheit.
 */

/**
 * Approach:
 * 1. Simply use Celsius to Fahrenheit converting formula from google.
 */

// Code...

const celsius = parseFloat(prompt("Enter Celsius")); // Convert the input to a number
const celToFah = (cel) => {
   const Fahrenheit = (9/5 * cel) + 32;
   return Fahrenheit + "F"
}
console.log(celToFah(celsius))
