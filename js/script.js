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
//         sum=0;
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


// just a problem trying to solve.
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
