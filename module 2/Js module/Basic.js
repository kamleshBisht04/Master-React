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


function f1(){
    console.log("F1")
}
function f2(){
    f1();
    console.log("F2")
}
f2();

//  f2 f1 pop f1 then f2 




