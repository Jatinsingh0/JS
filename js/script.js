// this will popup hello world.

// var a;
// a = 'hello Jatin';
// alert(a);

// let x = 'jatin';
// let y = 'singh';
// console.log(x+" "+y)   //how to give a gap b/w words

// let g = 6;
// let u = (g+4) / 2;  // if you have to add or subtract first you must have to put in brracket.
// console.log(u);

// // if and else condition in java script.

// let age = 19;
// let voterid = "must";

// if(age>18 && voterid === "must"){
//     console.log("you can vote go ahead");
// }
// else{
//     console.log("you can't vote");
// }

// // turnry operator

//  const virat = 100;
//  const result = (virat === 100 ? "century" : "Half-century");
//  console.log(result)

// LOOPS

// while loop

// let counter = 1;
// while(counter <= 10){
//     document.write('jatin singh');
//     document.write('<br>');
//     counter++;
// }

// for loop

// for(let counter = 1; counter <= 10; counter++ ){
//     document.write('jatin singh');
//     document.write('<br>');
// }

// for(let counter=1; counter<=10; counter++){
//     if(counter==5){
//         continue;
//     }
//     document.write(counter);
//     document.write("<br>")
// }

// nested loop

// for(let counter =1; counter <= 15; counter++){
//     document.write(counter);
//     document.write("</br>");
//     for(countSecond = 1; countSecond < 3; countSecond++){
//         document.write("Jatin singh");
//         document.write("</br>");
//     }
// }

// prompt,confirm and alert for user interact.

// prompt

// let age = prompt('enter your age' ,19);

// if(age == null){
//     document.write('your age field was blank');
// }
// else{
//     document.write(`your age is ${age}`);
// }

// confirm
// let response = confirm("sure you want to delete this file");
// if(response){
//     document.write('deleted');
// }
// else{
//     document.write('not deleted');
// }

// string manipulation

// let str = 'jatin'
// let greet = `hlo ${str}`;
// console.log(greet);

// let line = "jatin\nsingh";  //  i used \n for singh start from new line.
// console.log(line);

// let lie = "jatin\tsingh";  //  i used \t for space as tab button.
// console.log(lie);

// let nam = 'jatin';
// let nam1 = 'singh';

// console.log(nam + " " + nam1); // combine two string together.

// let hi='jatin';
//  if('Jatin'== hi){            //java script is case sensitive.
//     console.log('equal');
//  }
//  else{
//     console.log('not equal');
//  }

/*let upper = "jatin is a good boy.";
let up = upper.toUpperCase();              //for upper case
console.log(up);

let down = "jatin is a good boy.";
let dwn = down.toLowerCase();              //for lower case
console.log(dwn);   */

/* let find = "jatin is a good boy.";
let fin = find.includes('jatin');         // find any word in the sentence. if it's there it will show you true.        
console.log(fin); 



// ARRAYS

/*let play =['cricket', 'football', 'badminton', 'basketball']; // counting 
console.log(play[0]);
console.log(play);*/ // to see full array.

// functions in javascript

// for(i=1; i<=10; i++){
//     document.write(`2 x ${i} = ${2*i}`);
//     document.write('<br>');

// }

// function Table(num){      // if you want to any repeated task you can usefunction.

//     for(i=1; i<=10; i++){
//         document.write(`${num} x ${i} = ${num*i}`);
//         document.write('<br>');
//         }
//         document.write('<br>');
// }

// Table(2);
// Table(3);   //table of 3
// Table(4);   //table of 4

//arguments object

// function add(){

//  if(arguments.length == 0){
//     console.log('no argument passed !');

//  }
//  else{
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum = sum + arguments[i];
//        }
//        console.log(sum);
//     }

// }

//  add(4,7,7);     // for any number of digit.

//global and local variable

/*let u = 'jatin';  // gloable variable - you can use it anywhere. but you can't use same variable second time.

function add(){

    let result = 66; // local variable you can't use this out of the function. but you can use same variable in another function.
    console.log(result);

}

add();*/

//immediately invoked function

/*(function(){                    // use this for using less RAM and use this for short use. because function delete variable after function finish.
    let hi = 'hello jatin';                  
    console.log( hi);
    alert( hi);
})();  */

//object properties

// let person = {
//     firstName: 'jatin',
//     lastName: 'singh',
//     age:19
// };

// console.log(person);

// this keyword

// let person = {
//     firstName: 'jatin',
//     lastName: 'singh',
//     sayHello () {
//         console.log("hello ! i am "+this.firstName+" and i have a "+car.model+" car.")
//     }
// };

// let car ={
//     brand: "wollsvogn",
//     model: 'buggati'

// }

// person.sayHello()

// math object

// let x = Math.round(5.8);
// let y = Math.ceil(8.1);
// let z = Math.floor(3.9);
// let a = Math.pow(5,3);     //power of 5(find any number of power.)
// let b = Math.sqrt(100);    //square root of any number.c
// let c = Math.min(3,66,93,9,24,55,5,36,58,8,56,568,)  //find the minimum number of them.
// let d = Math.max(3,66,93,9,24,55,5,36,58,8,56,568,)  //find the minimum number of them.

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// generate random number

// let x = Math.random();                           // it generates any random number b/w  0 to 0.99 every time you refresh.
// let y = Math.floor(Math.random()*10)+1;         // it generates any random number b/w  1 to 10 every time you refresh.

// console.log(x);
// console.log(y);

// function getRandom(min,max){                                          // we use this when we have specific numbers.
//     let x = Math.floor(Math.random() * (max - min + 1 ) ) + min;
//     return x;

// }

// console.log(getRandom(10,20) );

//Date object

// let x = new Date();            // it shows current date or time
// console.log(x);

// let y = new Date('sep 6, 2003  12:00');  // when we have to use some specific time.
// console.log(y);

//object constructor

// function Student(first, last, age, cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }

// var student1 = new Student("jatin", "singh" , 20, 12 );
// var student2 = new Student("virat", "kohli" , 35, 12 );
// var student3 = new Student("ben", "stokes" , 34, 12 );

// console.log(student1);

//nested object

/* var user = {
    id: 101,
    email: 'abc@gmail.com',

    personalInfo: {
       name: 'jatin',
       address: {
        street: 'najafgarh',
        city: "delhi",
        country: "india"
       }

    }

};

console.log(user.personalInfo.address); */

// if else

// let age = 18;           //user type his/her age & hasvoterid then page respond according to conditions written down bwlow.
// let hasvoterid = "yes"

// if(age >= 18 && hasvoterid == 'yes'){
//     alert('you can vote.');
//     alert('go ahead')

// }else if(age>=18 && hasvoterid !='yes'){
//     alert("you need to get voter id card. ")

// }else if(age<18 && hasvoterid =='yes'){
//     alert("you have to wait until you turn 18 . ")

// }else{
//     alert("you can't vote");
// }

// PRACTICE LOCAL STORAGE

// let nam = prompt("write your name.");
// let age = prompt("your age please.")

// localStorage.setItem(nam, age);

// Learning SWITCH STATEMENT.

// let input = "y";

// switch(input){
//     case 1:
//         document.write("continue")
//         break;

//     case "y":
//         document.write("continue")
//         break;

//     case "yes":
//         document.write("continue")
//         break;

//      case 0:
//      case "n":
//      case "no":
//          document.write("End")
//          break;

//     default:
//         document.write("wrong input")
// }

// Argument object
// function add(){
//     if(arguments.length===0){
//         console.log("No argument passed")

//     }else{
//         let sum=0;
//         for(let i = 0; i<arguments.length; i++){
//             sum = sum + arguments[i];
//         }
//         console.log(sum);
//     }
// }

// add(5,6,4,5,4,5,);

// let counter = 1;
// while(counter <= 10){
//     document.write("jatin ")
//     document.write("<br>")
//     counter++;
// }

// MAP FUNCTION

// const arr = [2,4,6,8,9];
// const arr1 = arr.map((value)=>{
//     return value * 2
// })
// console.log(arr1);

// FILTER FUNCTION

// const arr = [2,14,6,30,26,38,3,19,9,74,11,8];
// const arr1 = arr.filter((value)=>{
//     return value > 10
// })
// console.log(arr1)

// CALLBACK FUNCTION

// function xyz(ab, callback){
//     console.log(ab);
//     callback();
// }

// function sayJatin(){
//     console.log("JATIN")
// }

// function sayVirat(){
//     console.log("Virat")
// }

// xyz("hello", sayJatin);
// xyz("hi", sayVirat);        /*here you only have to change the  function in arrgument. that will change in parameter through the name of callback*/

// xyz("you mostly use",() => {
//     console.log("anonymous function");
// })

// PROMISES

// let p = new Promise((resolve, reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//          resolve(1)
//     },3000)
// });

// p.then(()=>{
//     console.log("first promise is done");
//     let p2 = new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         resolve("promise 2 done")
//        },3000)
//     })
//     return p2
// }).then((value)=>{
//      console.log(value);
// })

// ASYNC / AWAIT
// if you are using different async function they will execute parallely. and if you used await then the other function wait for 1st finished.

// let jatin = async () => {

//     let delhiWeather = new Promise((resolve, reject)=>{
//              setTimeout(()=>{
//                 resolve("29 deg")
//              }, 9000)
//     })

//     let bangaloreWeather = new Promise((resolve, reject)=>{
//              setTimeout(()=>{
//                   resolve("21 deg")
//              }, 8000)
//     })

//     console.log("fetching delhi weather please wait.")
//     let delhi = await delhiWeather
//     console.log("delhi weather fetched: " + delhi)

//     console.log("fetching bangalore weather please wait.")
//     let bangalore = await bangaloreWeather
//     console.log("bangalore weather fetched: " +  bangalore)
//     return[delhi, bangalore]
// };

// let virat = async () => {
//     setTimeout(()=>{
//         console.log("virat is batting on 99* ")
//    }, 2000)
// }

// let main = async () =>{
//     let j = await jatin();
//     let v = await virat();
// }

// main();

// FETCH API and  TRY & CATCH METHOD

// async function  perform(){
// try {
//     const res = await fetch("https://api.covid19api.com/summary");
//     const data = await res.json();
//     console.log(data.Countries[100 ].Country)
// } catch (error) {
//     console.log("error")
// }
// }
// perform();

// LOCAL STORAGE

// localStorage.setItem("jatin", "cricketer")

// let k = "virat"
// let v = "king"

// localStorage.setItem(k,v)

// DESTRUCTURING & SPREAD OPERATOR

// let arr = [3,6,9];
// let [a,b,c] = arr;
// console.log(a,b,c);

// let arr = [1,2,3,4];
// let arr2 = [...arr,5,6,7]
// console.log(arr2);

// let arr5 = [8,1,5,7];
// let spread = (s1,s2,s3,s4) => {
//        return s1+s2+s3+s4
// }

// console.log(spread(...arr5 ));

// let ex = {
//     name: "virat",
//     city: "delhi",
//     county: "india",
// }
// console.log({...ex, name: "JATIN"});  //you must have to use the spread operator before the changes

// LEARN JSON

// You have to write json in object and doublequotation.
// you must have json file like (app.json) .

// {
//     "name": "Jatin singh",
//     "address": "jai vihar najafgarh",
//     "age": 20,
//     "city": "delhi"
// }

// MAP FUNCTION

// let num = [
//     {
//         "name": "jatin",
//         "profession": "cricketer"
//     },
//     {
//         "name": "virat",
//         "profession": "cricketer"
//     },
//     {
//         "name": "kane",
//         "profession": "cricketer"
//     },
//     {
//         "name": "faf",
//         "profession": "cricketer"
//     }
// ]
// let arr2 = num.map((val)=>{
//      return val.name;
// })

// let arr1 = document.getElementById("map").innerHTML = arr2 ;

// FILTER FUNCTION

// let arr1 = [12,42,23,33,1,32,2,31,75,44,32,52,45,76];
// let fil = arr1.filter((i)=>{
//     return i<50
// })
// console.log(fil)

// how to use API'S

// const apis = async ()=>{
// try{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   data.forEach((i)=>{
//       console.log(i.name)
//   })

//     }catch(error) {
//        console.log(error)
//   };
// };
// apis();

// const str1 = "jatin singh";
// const str2 = "virat kohli";
// const areEqual = (str1==str2) ? "true" : "false" ;

// console.log(areEqual)

// for(let value = 0; value<100; value++ ){
//     document.write("I'm sorry");
//     document.write("<br>")
// };

// for of loop
// const bat = ["mrf", "ceat", "sg", "ss", "kokabura", "greynicolas"];

// for (const brand of bat) {
//   document.write(brand);
//   document.write("<br>");
// }

// Closure:
// closure is created when a function is defined inside another function (the outer function),
// and the inner function has access to variables from the outer function, even after the outer function has finished executing.

// let sum = function(a){
//     console.log("Jatin is learning " + a);
//     let c = "react.js";
//     return function(b){
//          return a+b+c           // using outer function output (a) here. Using (a) second time. and the access of a and c again called lexical scope.
//     }
// }
// let store = sum("javascript");
// console.log(store("next.js"));

// Example 2

// let sum2 = function(a, b, c){
//     console.log(a+ b+ c);

//     return {
//         getSumTwo: function(){
//         return a + b ;
//       },
//       getSumThree: function(){
//         return a+b+c;
//       },
//       getSumFour: function(z){
//         return a+b+c+z;
//       },
// }
// }

// let str = sum2(3,2,5)
// console.log(str.getSumTwo());
// console.log(str.getSumThree());
// console.log(str.getSumFour(9));

// function callApi(method){
//     return function(url){
//         console.log(`we are using ${method} and fetching ${url}`);
//     }
//   }
//   const store = callApi("GET");
//   store("https://example.com/api");

//   function cartCounter(){
//     let count = 0;
//     function updateCount(val){
//         count += val;
//     }

//     return{
//         increment(){
//            updateCount(1);
//         },
//         decrement(){
//            updateCount(-1);
//         },
//         value(){
//            return count;
//         },
//     }
//   }
//   const store = cartCounter();
//   store.increment();
//   store.increment();
//   store.increment();
//   store.decrement();
//   console.log(store.value())

// CALL, APPLY, BIND

// CALL: we have just made one function and we we are calling that function with different object. Just with the help of CALL keyWord.
// const user1 = {
//   name: "Jatin",
//   proffession: "software developer",
//   age: 20,
//   interest: "playing cricket",
// }
// function print(city, country, method){
//   return console.log(this.name +" " +city+" " +country+" " +method
//   );
// }
// print.call(user1, "Delhi", "India", "callMethod");

// const user2 = {
//   name: "Virat",
//   proffession: " Indian Cricketer",
//   age: 35,
//   interest: "business",
// }

// print.call(user2, "Delhi", "India", "callMethod");

// // APPLY: you can use many arguments as an array list. but You must have to use Array list in Apply method otherwise method shows you error.
// print.apply(user2, ["Delhi", "India", "applyMethod"]);

// // BIND : bind is same as call but here you just have to make a copy the result and invoke later.
// let newFun = print.bind(user2, "Delhi", "India", "BindMethod");
// newFun();

// print.call(user2, ["Delhi", "India", "callMethod"]); // you can also you (call and bind) method like this just put the arguments in array bracket and only use one parameter.

// setTimeout and setInterval
// settimeout runs only once after the given time.
// setinterval runs again & again after the given time.

// console.log("first");

// setTimeout(()=>{
//     console.log("second line");
// }, 1000);
// setTimeout(()=>{
//     console.log("third line");
// }, 2000);

// console.log("fourth line")
// setTimeout(function(){
//     console.log("fifth line");
// }, 500);

// console.log("sixth line");

// setInterval(function(){
//     console.log("I'm setInterval")
// },1000)

// let setinter = function(i){
//     console.log("function for setInterval" + i)
// };
// setInterval(setinter , 1000, 3);

// FUNCTIONAL Programming

// In js we can assign a function to a variable.
// const func = function(){
//     console.log("assign a function to a variable.");
//     return {
//          rdds(){
//         console.log("dcnks")
//         },
//         edds(){
//         console.log("dcnsabkxsks")
//     }
// }
// }
// const hh = func(); //func is not a object it is function. that's why we need to invoke func first to get the object, and then call rdds.
// hh.rdds();

// Pass a Function as an Argument.
// -since functions are first class citizens in javascript, we are able to pass them as an argument.
// const func1 = function(){
//     return "i'm a first function";
// };
// const func2 = function(fun){
//     console.log(fun, "But we are in second function.");
// };
// func2(func1());

// Returning a Function.
// -this is the key concept when it comes to function progamming.
// const func3 = () => {
//     return function(){
//         console.log("returning function");
//     }
// };
// func3()();

// just a problem trying to solve ?

// for(var i = 0; i<3; i++){
//   setTimeout(function(){
//     console.log(i)
//   }(), 1000)        // IIFE (Immediately Invoked Function Expression)
// };

// The for loop runs quickly, and all three setTimeout functions are set up almost simultaneously.

// The setTimeout functions capture the variable i from the outer scope. But they don't capture the current value of i at the time setTimeout is called; they capture a reference to the variable.

// By the time the setTimeout functions execute (after a delay of 1000 milliseconds), the loop has finished, and the value of i is 3.

// So, all three console.log(i) statements print the current value of i, which is 3.
// for(var a = 0; a<3; a++){
//     setTimeout(function(){
//       console.log(a)
//     }, 1000)
//   };

// "this" KEYWORD ?

// The value of "this" is not fixed; it depends on the way a function is invoked. Here are some common scenarios:

// situation 1
// console.log(this);

// situation 2
// function log(){
//     console.log(this)
// }
// log();

// situation 3
// let user1 = {
//     firstName: "Jatin",
//     lastName: "singh",
//     printFullName: function(){
//         console.log(this)
//     }
// }
// user1.printFullName();

// situation 4

// function user(name, age){
//     console.log(this);
// }

// const cnstrtrFunction = new user("Jatin", 20);

// situation 5
// let user2 = {
//     firstName: "Jatin",
//     lastName: "singh",
//     printFullName: function(){
//         console.log(this)
//     },
// }
// let copy = user2.printFullName;
// copy();

// situation 6
// Arrow functions behave differently regarding this. They inherit the this value from the surrounding scope and do not have their own this. This can be useful in avoiding the confusion of traditional function scoping.

// let trying = {
//     name: "Jatin",
//      myArrowFunction: function(){
//         console.log(this.name);

//         const nextArrow = () => {
//            console.log(this)
//         }
//         nextArrow();
//       }

// }
// trying.myArrowFunction()

// Find duplicate numbers ?

// const arry = [1,2,3,4,5,2,4,6,7,8,9,6,7];
// const findDuplicate = arry.filter((value,index,array) => array.indexOf(value) !== index);
// console.log(findDuplicate);

// Find the MAX and Min value in array ?

// const arry = [21,32,53,34,56,42,43,66,72,98,69,86,97];
// const maxNumber = Math.max(...arry)
// console.log(maxNumber);

// USING REDUCE METHOD FOR MAXVALUE.
// const arry3 = [21,32,53,34,56,42,43,66,72,98,69,86,97];
// const maxNumberUsingReduceMethod = arry3.reduce((max, curElement) => (curElement > max ? curElement : max ), arry3[0])
// console.log(maxNumberUsingReduceMethod);

// const arry2 = [21,32,53,34,56,42,43,66,72,98,69,86,97];
// const minNumber = Math.min(...arry2)
// console.log(minNumber);

// FINDING SECOND LARGEST VALUE ?

// const arry4 = [21,32,93,34,56,42,43,66,72,95,69,86,97];
// const maxNumber = Math.max(...arry4)
// console.log(maxNumber);
// const indexNumberOfMaxVal = arry4.indexOf(maxNumber);
// const usingSpllice = arry4.splice(indexNumberOfMaxVal, 1);
// const secondMaxNumber = Math.max(...arry4)
// console.log(secondMaxNumber);

// SPLICE METHOD - array.splice(start, deleteCount, item1, item2, ...); ?

// const array99 = [90, 80, 30, 70, 50];
// array99.splice(0, 2);
// console.log(array99);

// const array89 = [90, 80, 30, 70, 50];
// array89.splice(0, 2, 77, 22);
// console.log(array89);

// FIND MISSING NUMBER ?

// const numbers = [21,32,53,34,56,42,43,66,72,98,69,86,97];
// const missNum = [];
// const findMissingNum = (curVal) => {
//      const maxNum = Math.max(...curVal);
//      const minNum = Math.min(...curVal);
//      for(let i = minNum; i<maxNum; i++){
//         if(curVal.indexOf(i) < 0){            //when indexOf not able to find the (i) in curVal it returns -1 and -1 is smaller than 0. and then the condition becomes true.
//             missNum.push(i);
//         }
//      }
//      return(missNum) ;
// }
// console.log(findMissingNum(numbers));

// FIND EVEN AND ODD NUMBERS IN GIVEN ARRAY ?

// const numbers = [21,32,53,34,56,42,43,66,72,98,69,86,97];
//     const even = numbers.filter((curVal)=> {
//        return curVal%2 === 0;
//     })
//     console.log(`Even Numbers: ${even}`);

//     const odd = numbers.filter((curVal)=> {
//         return curVal%2 === 1;
//      })
//      console.log(`Odd Numbers: ${odd}`);

// FINDING SUM OF ALL ELEMENTS ?

// const numbers2 = [21,32,53,34,56,42,43,66,72,98,69,86,97];
// const sum = (curElm) => {
//     const sumOfElements = curElm.reduce((previous, curElement)=>{
//        return previous + curElement
//     }, curElm[0])
//     console.log(sumOfElements);
//  }
//  sum(numbers2);

// CHECKING IF THE NUMBER IS PRIME OR NOT ?

// let number = prompt("enter");
// let i = 2;
// if(number === 1){
//    console.log(`${number} is not prime number neither composite.`)
// }else if(number < 1){
//     console.log(`prime number of ${number} is not possible.`)
// }else if(number%i === 0){
//     console.log(`${number} is not a prime number.`)
// }else if(number%i === 1){
//     console.log(`${number} is a prime number.`)
// }else{
//     console.log("please write numbers.")
// }

// REVERSE A STRING IN JS ?

// const strReverse = (str) => {
//  let strToArray = str.split("");     //FIRST CONVERT STRING INTO ARRAY.
//  let strToArrayReverse = strToArray.reverse();  //WE'VE INBUILT METHOD TO REVERSE ARRAY.
//  let strToArrayReverseJoin = strToArrayReverse.join("");  //NOW WE MAKE THE REVERSE ARRAY JOIN.
//  return strToArrayReverseJoin ;
// }
// console.log(strReverse("javaScript"));

// HOW TO FIND PALINDROME ?
// PALINDROME is a word, verse, or sentence (such as "madam") or a number (such as 1881) that reads the same backward or forward.

// let str = prompt("enter");
// str = str.toLocaleLowerCase();

// const palindrome = (val) => {
//     let valReverse = val.split("").reverse().join("");
//     if(val === valReverse){
//        return "It's Palindrome" ;
//     }else{
//         return "Not a Palindrome";
//     }
// };

// console.log(palindrome(str));

// HOW TO SWAP TWO VARIABLE WITHOUT USING THE THIRD VARIABLE ?

// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(`value of a is ${a} and value of b is ${b}`);

// HOW TO MERGE TWO ARRAYS ?

// let arr11 = [1,2,3,4];
// let arr12 = [5,6,7,8];
// let merge = arr11.concat(arr12);
// console.log(merge);

// WRITE A PROGRAM TO FIND THE FACTORS OF AN INTEGER ?

// const integer = prompt("enter a number");
// console.log(`factors of ${integer}`)
// for(let i =1; i<=integer; i++){
//      if(integer%i === 0){
//        console.log(i);
//      }
// }

// TRYING TO MAKE A SIMPLE CALCULATOR ?

// let operator = prompt("Choose either +, -, *, /");
// let number1 = parseFloat(prompt(`Your number1 for ${operator}`));
// let number2 = parseFloat(prompt(`Now your number2`));

// if(operator == "+"){
//    let result =  number1 + number2;
//    console.log(result);
// }else if(operator == "-"){
//     let result =  number1 - number2;
//     console.log(result);
// }else if(operator == "*"){
//     let result =  number1 * number2;
//     console.log(result);
// }else if(operator == "/"){
//     let result =  number1 / number2;
//     console.log(result);
// }else if(operator == ""){
//     console.log("write a number")
// }

// FIND THE FIBONACCI SEQUENCE

// let a = 0;
// let b = 1;
// for(let i = 0; i<=15; i++){
//     let fibb = a + b;
//     a=b;
//     b=fibb;
//     console.log(fibb)
// }

// how many times a letter occurence in a string;

// let str101 = prompt("enter a string");
// let ltr = prompt("find a letter")
// let counter = 0;
// const strlnth = str101.length;

// for(let i = 0; i<= strlnth; i++){
//     if(str101[i] == ltr){
//        counter++
//     }
// }
// console.log(counter);

// TABLE FOR ANY NUMBER

// let tblnbr = prompt("write a number for table");
// for(i= 1; i<= 10; i++){
//    document.write(`${tblnbr}x${i} = ${tblnbr*i}`)
//    document.write("<br>")
// }

// just passing colors to students according to their name length.

// let names = ["Jatin", "virat", "conor","messi", "ronaldo", "khabib", "jonathan", "anishdfd", "romandf", "piyush", "ammu", "rohit"];
// let houses = [];

// for(let name of names){
//     if(name.length < 6){
//         houses.push("blue");
//     }
//     else if(name.length < 8){
//         houses.push("red");
//     }
//     else{
//         houses.push("green");
//     }
// }
// console.log(houses);

// Check if the Object is ARRAY or NOT?

// const checkArray=(elm)=>{
//    return Array.isArray(elm);
// }
// console.log(checkArray({}));      //output: false
// console.log(checkArray([]))       //output: true

// How to empty an Array?
// const arr101 = [1,2,3,4,5]
// arr101.length = [];
// console.log(arr101.length)

// Check if the number ia an integer or not?

// const integer = 1;
// const check = Number.isInteger(integer)
// console.log(check)

// Concat method for duplicat Array.

// const dublicate = (arr) => {
//     return arr.concat(arr)
// }
// console.log(dublicate([1,2,3,4,5]))

// const nn = [6,7,8,9]
// const ddd = nn.concat(nn)
// console.log(ddd)

// REVERSE A NUMBER.
// const num102 = 21
// const rvrseNum = (val) => {
//     return Number(val.toString().split("").reverse().join(""))   //we used Number method for convert 21 into a number because after used toString method it became string so that's why.
// }
//  console.log(rvrseNum(num102))

// Check if a passed string is palindrome or not?

//  let str102 = prompt("check palindrome");
//  str102 = str102.toLocaleLowerCase();

// const checkpalindrome = (val) => {
//    const revVal = val.split("").reverse().join("");
//    if(str102 === revVal){
//      console.log("it's a palindrome")
//    }else(
//     console.log("Not a palindrome")
//    )
// }
// checkpalindrome(str102)

// Converting first letter of a string in upperCase

// const  nletterUpperCase(str103))

// Slice METHOD

// let originalString = "Hello, World!";
// let slicedString = originalString.slice(2,11);
// console.log(slicedString);

// Sum of array

// let arr104 = [1,2,3,4,5,6];
// let sum = 0;
// let sumOfArray = arr104.forEach((curVal)=>{
//     sum = curVal + sum  ;
// })
// console.log(sum)

// let arr105 = [2,2,"jhbj","kllk",7,"llmkjh",9];
// let sum = 0;
// let sumOfArray = arr105.forEach((curVal)=>{
//       if(typeof curVal == "number"){
//          sum = curVal + sum
//       }
// })
// console.log(sum)

// just getting the elements of an array passed in N.

// const arr = [54,34,23,11,44,55];
// const arrfunc = (arrr, n = 1) => {            //default value of n is 1;
//            for(let i = 0; i<n; i++){
//                console.log(arrr[i])
//            }
// }
// arrfunc(arr,2);

// write a javascript function to find most frequent element of an array?

// const arr109 = [29,12,22,12,22,12,1,54];
// const counter = 0;
// const mostFrequent = (val) => {
//        //  solve this later.
// }
// console.log(counter)
// mostFrequent(arr109);

// Shuffle an array.

// const shuffle = (val) => {
//   let totalShuffleElm = val.length;
//   while(totalShuffleElm > 0){
//     totalShuffleElm--;
//     let swapToElm = Math.floor(Math.random()*totalShuffleElm);
//     let temp = val[totalShuffleElm];
//     val[totalShuffleElm] = val[swapToElm];
//     val[swapToElm] = temp;
//   }
//   return val;
// }

// console.log(shuffle([1,2,3,4,5,6,7]));

// HIGHER ORDER FUNCTION = when a function takes another function as an argument and return a function called Higher order function.

// const radius = [12, 11, 22, 28];

// const area = (rad) => {
//  return Math.PI * rad * rad;
// }
// const circumstance = (rad) => {
//   return (2 * Math.PI * rad);
// }
// const diameter = (rad) => {
//   return 2 * rad;
// }

// const calculate = (rad, logic) => {
//   const output = [];
//   for(let i = 0; i < rad.length; i++){
//       output.push(logic(rad[i]))   // `rad[i]` refers to the element in the array `rad` at the index `i`. This value is the radius at the current iteration of the loop. basicaly i is index value
//   }
//   console.log(output)
// }
// calculate(radius, area);
// calculate(radius, circumstance);
// calculate(radius, diameter);

// CALLBACK function.
// function xyz(a,b,callback){
//    let mn = a + b ;
//    callback(mn)
// }

// const ab = (mn) => {
//   console.log(mn, "this is a callback function")
// }
// xyz(2,3, ab);

// Infinite currying.

// function abx(a){
//     return function(b){
//       if(b) {
//         return abx(a+b)
//     };
//        return a;
//     }
// }

// console.log(abx(2)(8)(7)())

// Ques

// function xy(){
//     for(var i = 0; i<3; i++){
//         const val = (i) => {
//             setTimeout(()=>console.log(i), 1000)
//         }
//         val(i)
//       }
// }
// xy()

// Reverse a String

// const cba = (e)=>{
//   const abc = e.split("").reverse().join("");
//    console.log(abc)
// }
// cba("Jatin")

// Finding a Specific data from large dataset.
// const arr99 = ["jatin", "virat", "kane", "stokes"];
// const searchedItem = "ja";
// const find = arr99.filter((item) => item.includes(searchedItem))
// console.log(find)

// CLOSURE
// const main = (name) => {
//    function child(){
//     console.log(name)
//    }
//    return child;
// }
// let res = main("virat");
// res();

// const arr21 = ["jatin", "virat", "kane"]
// for(let cricketer of arr21){
//     console.log(cricketer)
// }

// const findLongestWord = (str) => {
//    const word = str.split(" ")
//    const longestWord = word[0];
//    for(let i = 0; i<word.length; i++){
//     if(word[i].length > longestWord.length){
//         longestWord = word[i]
//     }
//    }
//    return longestWord

// }
// console.log(findLongestWord("JatinSingh and Virat are best batsman in the world"));

// you have to implement a function generateHash that generate a hash tag from a given input string. And each word should be capitalized.

// const generateHash = (str) => {
//  const words = str.split(" ");
//  const capitalizedWords = words.map((word)=>{               //you can return a value in for each that is why we choose map function.
//     return word.charAt(0).toUpperCase()+ word.slice(1);
//  })
//  return "#" + capitalizedWords.join("")

// }
// console.log(generateHash("jatin is the best batsman"))

// write a function that takes two parameter a string and a character to count. function should return the number of times the specified character appears in the string.
// const countChar = (a, b) => {
//   const char = b.toLowerCase();
//   const lower = a.toLowerCase();
//   const word = lower.split("");
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countChar("jatinsinghandviratIII", "I"));

// Checking if the word is palindrome or not.
// const val = prompt("check palindrome")
// const isPalindrome = (val) => {
//     const word = val.toLowerCase();
//     const check = word.split("").reverse("").join("");
//     return word === check ? "It's a Palindrome" : "Not a Palindrome";
//     // if(word == check){
//     //      return "It's a Palindrome"
//     // }else{
//     //     return "Not a Palindrome"
//     // }
// }
// console.log(isPalindrome(val))

// MAXIMUM NUMBER IN ARRAY.
// let maxii = [11,24,63,14,57,66,37]
// const max = maxii.reduce((max, curEle) => max > curEle ? max : curEle, maxii[0])
// console.log(max)

// Find the Average.
// const average = (arr) => {
//  let sum = arr.reduce((accumulator, curElem) => accumulator + curElem , arr[0])
//  return sum / arr.length;
// }

// console.log(average([1,3,4,5,77,6,54,5,65,9]))

// INFINITE CURRYING
// function sum(num1){
//   return function func(num2){
//      if(num2 === undefined){
//         return num1
//      }else{
//         return sum(num1 + num2)
//      }
//   }
// }

// console.log(sum(1)(2)(5)(6)(7)())

// checking if the arrays in argument are equal or not.
// const arraysAreEqual = (a, b) => {
//     if (a.length !== b.length) {
//         return false;
//     }

//     for(let i = 0; i<a.length; i++){
//        if(a[i] !== b[i]){
//            return "false"
//        }
//     }
//     return "true"

// }
// console.log(arraysAreEqual([7,1,3], [7,2,3]))

// REST operator
// const dis = (a, b, ...c) => {
//   console.log(c)
// }
// dis(1,2,3,4,5,6,7,8,9)

// SPLICE METHOD
// const arr21 = [1,2,3,4,5,6];
// const arr19 = arr21.splice(3,1,"update"); //3 is the StartingIndex, 1 is the deletecount, then adding values.
// console.log(arr21)

// const arr22 = ["a", "b", "c", "d" ];
// const arr23 = arr22.splice(2, 0, "x", "y", "Z");
// console.log(arr22)

// const arr25 = ["a", "b", "c", "d","e"];
// const arr26 = arr25.splice(2, 2);
// console.log(arr25)

// SLICE METHOD

// const arr25 = ["a", "b", "c", "d","e","i"];
// const arr26 = arr25.slice(2, 5);  //2 is the starting index and 5 is the end index (end not included)
// console.log(arr26)

// for ...of loop
// const arr88 = [1,2,3,4,5,6,7,8]
// for(let val of arr88){
//     console.log(val)
// }

//for...in loop is used to loop through the properties of an object.
// const arr89 = {
//     name: "Jatin singh",
//     role: "developer",
// }
// for(let xyz in arr89){
//     console.log(xyz)         //it allows you to iterate over the keys of an object.
//     console.log(arr89[xyz])  //and access the values by using the [xyz] as an Index value.
// }

// Removing duplicate element
// const removeDuplicate = (arr) => {
//     const checking = arr.filter((value, index) => arr.indexOf(value) === index);
//     return checking;
// }
// console.log(removeDuplicate([1, 2, 3, 1, 2, 3, 4, 2, 6, 7, 8, 6, 7]));

// Finding vowels.
// const countVowels = (val) => {
//   let count = 0;
//   const str = val.toLowerCase();
//   const vow = str.split("");
//   vow.map((curEle) => {
//     if (
//       curEle === "a" ||
//       curEle === "e" ||
//       curEle === "i" ||
//       curEle === "o" ||
//       curEle === "u"
//     ) {
//       count++;
//     }
//   });
//   return count
// };

// console.log(countVowels("Hello worldUU"));


// REMOVING vowels Form String.
// const str = "hey JS! you are Amazing";
// const removeVowels = (para) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const val = para.toLowerCase().split("");
//   const withoutVow = val.filter((val)=>{
//       return !vowels.includes(val) 
//   })
//  return withoutVow.join("");
// }
// console.log(removeVowels(str));



// COUNT VOWELS
// const str = "hey JS! you are Amazing";
// const countVowels = (para) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0; 
//   const val = para.toLowerCase().split("");
//   val.forEach((val)=>{
//       vowels.includes(val) && count++
//   })
//  return count;
// }
// console.log(countVowels(str));



// WHEN YOU USE TIMERS AND YOU CHANGED YOUR TAB. THEN OUR BROWSER SUSPEND ALL THE TIMERS. BECAUSE TAB BECOME INACTIVE.
// let num11 = 0;
// setInterval(()=>{
// console.log(++num11);
// }, 100);


// WRONG CODE REASON IS DEFINED BELOW
// const obj = Object.create(null);
// const keyToCheck = "randonKey";

// if(obj.hasOwnProperty(keyToCheck)){
//   console.log("Key Found")
// }else{
//     console.log("Key Not Found")
// }
// - whenEver you create a new object with null.
// - that newly object has nothing in it's prototype chain.
// - so we can't access obj.hasOwnProperty instead we use Object.hasOwn(nameofObject, foundvalue).


// FINDING SUM OF SQUARES
// const elem = [1,2,3,4];
// const sumOfSquare = elem.reduce((acc, curEle)=>{
//     return acc + curEle * curEle
// }, 0)
// console.log(sumOfSquare)


// FINDING MINIMUM VALUE
// const mini = [41,23,34,34,55,66,97,82,93];
// const minimumNum = Math.min(...mini) ;
// console.log(minimumNum)

// USED REDUCE METHOD FOR MINIMIM VALUE.
// const findMin = mini.reduce((acc, curElm)=> {
//     return curElm < acc ? curElm : acc ;
// }, mini[0])
// console.log(findMin)



// PRACTICING FOR CALLSTACK.
// console.log("a");
// console.log("b");
// async function test(){
//     return 1
// }
// test().then(()=> console.log("promises"))
// console.log("c");
// setTimeout(()=>{
//     console.log("d")
// }, 3000);
// console.log("z")


// FINDING THE AVERAGE OF SUM
// const mean = (arr) => {
//     const sum = arr.reduce((acc, curEle)=> {
//        return acc + curEle; 
//     }, 0)
//     return sum / arr.length
// }

// console.log(mean([2,1,3,4,5]))



// RETURN only the elements that occur exactly once.
// Inside the condition, numbers.indexOf(value) returns the first index of the current value, and numbers.lastIndexOf(value) returns the last index of the current value. If these indices are equal, it means the value occurs exactly once in the array, so it is included in the filtered array.
// const numbers = [1,2,3,1,3,1,3,4,5,6,3,4,6,5,8,7,8,5,8,9,10,12,13];
// const dup = numbers.filter((value) => {
//     return (numbers.indexOf(value) !== numbers.lastIndexOf(value)) ;
// })
// console.log(dup)


// MAKING THE OBJECT OF EACH ELEMENT OCCURENCE.
// const numbers = [1,2,3,1,3,1,3,4,5,6,3,4,6,5,8,7,8,5,8,9,10,12,13];
// const counts = {};
// for(let element of numbers){
//     counts[element] = (counts[element] || 0) + 1
// }
// console.log(counts)

