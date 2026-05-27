"using strict";

// // hoiesting
// console.log(a); // undefined
// console.log(name); // Deepak

// var a = 10;

// var name = "kamlesh";

// name = "Deepak";

// // // let

// console.log(b);
// console.log(name1);

// let b = 20;
// let name1 = "jay sharma";

// const

// console.log(number);
// const number = 52;

// function declaration

// greet();

// function greet() {
//   console.log("Hello");
// }

// function expression

// sayHi();

// var sayHi = function () {
//   console.log("Hi");
// };

// question

// var x = 3;

// function test() {
//   console.log(x);

//   var x = 2;

//   console.log(x);
// }
// test();

// console.log(x);

// primitive type
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// // reference type

// const obj = {
//   name: "kamlesh",
// };

// const obj1 = obj;
// obj1.name = "Deepak";

// console.log(obj);
// console.log(obj1);

//  one more example

// const marks = [20,50,60,7,82,45];
// const marks2 = marks;

// marks2[3]=70;

// console.log(marks)
// console.log(marks2)

// =================================================

// special value in JavaScript that represents an invalid number result.

// console.log(NaN === NaN); // false
// //  correct way to check
// console.log(Number.isNaN(NaN));

// console.log(NaN !== NaN); // true

// ================================================
// console.log(undefined == null);
// console.log(undefined === null);

// ================================================
// What is == vs ===?
// ==
// Loose equality
// Converts types
// Can give unexpected results
// ===
// Strict equality
// Checks value + type
// Preferred in real projects and interviews

// const a = 18;
// const b = "18";

// console.log(a == b);
// console.log(a === b);

// ================================================

// delete operater

// let user = {
//   name: "kamlesh",
//   age: 32,
//   address: "new Delhi",
// };

// console.log(user);
// delete user.address;
// console.log(user);

// //  nullfying the object

// user = {};
// console.log(user);

// ================================================

// functions decleration

// sayHello("kamlesh");

// function sayHello(name) {
//   console.log(`hello ${name}`);
// }

// // function expression

// const sayGreet = function (name) {
//   console.log(`hello ${name}`);
// };

// sayGreet("deepak");

// arrow function

// const sayGreeting = (name) => {
//   console.log(`hello ${name}`);
// };

// sayGreeting("jay singh");

// with object we call it methods

// const user = {
//   name: "kamlesh",
//   age: 30,

//   userInfo: function () {
//     console.log(`user infomation : ${this.name} age is ${this.age}`);
//   },
// };

// user.userInfo();

// =============================================
// arrow function dont have this key word it will take this keyword from its surroundings

// name = "jay sharma ";
// age = 33;

// const user = {
//   name: "kamlesh",
//   age: 30,

//   userInfo: () => {
//     console.log(`user infomation : ${this.name} age is ${this.age}`);
//   },
// };

// user.userInfo();

// =========================
//  losing of this keyword undefine

// const user = {
//   name: "kamlesh",

//   show() {
//     setTimeout(function () {
//       console.log(`${this.name} is a good user`);
//     }, 1000);
//   },
// };

// user.show();

// solution

// const user1 = {
//   name: "kamlesh",

//   show() {
//     setTimeout(() => {
//       console.log(`${this.name} is a good user`);
//     }, 1000);
//   },
// };

// user1.show();

// ===============================================

// const a = 20;

// function outer() {
//   const a = 100;
//   console.log(a);
//   const b = 10;

//   function inner() {
//     console.log(b);
//     console.log(a);
//   }
//   inner();

// }
// console.log(a);

// outer();

// ===============================================
// clouser
// function booking() {
//   bookingSeet = 0;
//   return function () {
//     bookingSeet++;
//     return bookingSeet;
//   };
// }

// const AirIndia = booking();
// console.log(AirIndia());
// console.log(AirIndia());
// console.log(AirIndia());
// console.log(AirIndia());
// console.log(AirIndia());

// ===============================================

// const counter = () => {
//   let count = 0;
//   const booking = () => {
//     count++;
//     return count;
//   };
//   return booking;
// };

// const AirIndia = counter();
// console.log(`you are booking seet no  : ${AirIndia()}`);
// console.log(`you are booking seet no  : ${AirIndia()}`);
// console.log(`you are booking seet no  : ${AirIndia()}`);
// console.log(`you are booking seet no  : ${AirIndia()}`);
// console.log(`you are booking seet no  : ${AirIndia()}`);

// ===============================================

// higher order function

// function sayHi(name) {
//   return `hello ${name}`;
// }

// function processUser(name, fun) {
//   console.log(fun(name));
// }

// processUser("kamlesh", sayHi);

// //  function return another function
// function multiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const double = multiply(2);
// console.log(double(5));

// ===============================================

// IIFE
// (function sayHi() {
//   console.log("Database connnected");
// })();

// Curring

// function addation(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a * b * c * d;
//       };
//     };
//   };
// }

// console.log(addation(5)(2)(1)(6));

// ===============================================

//  rest operator
// const marks = [12, 36, 45, 85, 96, 75, 85, 96, 85, 96, 58, 25, 36, 95, 63, 74];

// const [first, second, third, ...other] = marks;
// console.log(other);

// const addation = (...args) => {
//   let total = 0;
//   for (let i of args) {
//     total += i;
//   }
//   return total;
// };

// console.log(addation(...other));
// console.log(addation(5,6,7,8));

//  spread operator

// const marks = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const new_marks = [3, 4, 6, 8, 7, ...marks];

// console.log(new_marks);

// What is default parameter?

// function multiply(a = 100, b = 6) {
//   return a * b;
// }
// console.log(multiply(5, 6));
// console.log(multiply())

// ===============================================

// generating function

function* countUpTo(n) {
  let i = 0;
  while (i <= n) {
    yield i;
    i++;
  }
  console.log(i);
}

const gen = countUpTo(5);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

