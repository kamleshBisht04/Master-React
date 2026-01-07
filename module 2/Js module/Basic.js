// how the program execute in java script enviroment
//  create memorey
//  execute line by line
//  function execution create

// var val1 = 10;
// var val2 = 25;
// function addNum(num1, num2) {
//   var result = num1 + num2;
//   return result;
// }
// var res = addNum(val1, val2);
// console.log(res);

// //  event loop ,call stack ,web api ,cuncurrency in java script
// //  using call stack
// //  event loop is use to handle the asynchronous operation
// //  water and customer example

// console.log("start");

// // task queue
// setTimeout(() => {
//   console.log("set time out function");
// }, 4000);

// // micro task queue
// Promise.resolve().then(() => console.log("Promiss resolve"));

// console.log("End");

// // another example 

// console.log("👨‍🍳 Waiter: Order received!");

// setTimeout(() => {
//   console.log("🍕 Pizza is ready!");
// }, 2000);

// fetch("https://dummyjson.com/products/1").then(() => console.log("📦 API Response received!"));

// Promise.resolve().then(() => console.log("✅ Quick Billing done!"));

// console.log("🍽️ Serving Water...");

// 1 5 4 3 2

//  promise and fetch m phele promiss then fetch


// function f1(){
//     console.log("F1")
// }
// function f2(){
//     f1();
//     console.log("F2")
// }
// f2();

//  f2 f1 pop f1 then f2 


//  leacture 2 

//  Hoiesting
 
// variable with var key word
//  declaration top of the scope 

//  Example 1:
// console.log(num)
// var num = 10;

// console.log(num);

// variable with let 
//  let and cost comes for sefaty and bugs error less rebost application

// console.log(num) // reference error 
//  they are inside  tdz

// let num = 20;
// num =30;
// console.log(num)

// Example 2: var example

// try{
// console.log(b);
// }catch(e){
//     console.error(e);
// }
// let b = 20;
// console.log(b);
 

// Example 3:function Hoisting
greet();
function greet(){
    console.log("Hello Lovely Family.!!")
}


//  Example 4: function expression Hoisting
//  reference error hyfun access before insilization

// try{
//     heyFun();
// }catch(e){
//     console.error(e)
// }

// let heyFun = function heyFun(){
//     console.log("heyFun!!")
// }





