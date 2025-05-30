/**
 * Problem: Create a Simple Promise Implementation
 - Implement a basic version of a Promise with then and catch and Async/Await .
 */

// Code...


// .then().catch() Approach
const myPromise = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    if(!response.ok){
      throw new Error("Response was not Ok")
    }
    return response.json();
  })
  .then((data) => resolve(data))
  .catch((error) => reject(error));
})

myPromise
.then((data) => console.log("API Result:",data))
.catch((error) => console.log("Error:", error))


// Async/Await Approach 
const myPromise2 = async() => {
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok){
       throw new Error("Error in Response.")
    }
    const data = await response.json();
    console.log(data)

    } catch(error){
        console.error("Error fetching data:", error);
    }
}
myPromise2()