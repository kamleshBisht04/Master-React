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

// function* countUpTo(n) {
//   let i = 0;
//   while (i <= n) {
//     yield i;
//     i++;
//   }
//   console.log(i);
// }

// const gen = countUpTo(5);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// ===============================================

// const AirIndia = {
//   airline: "AirIndia",
//   iataCode: "AI",
//   booking: [],

//   book(name, flightNo) {
//     console.log(
//       `${name} is book there seet on ${this.airline},flight ${this.iataCode} and flight no is ${flightNo}`,
//     );

//     this.booking.push({
//       name: name,
//       flight: `${(this.airline, flightNo)}`,
//     });
//     console.log(this.booking);
//   },
// };

// AirIndia.book("kamlesh", 4525);
// AirIndia.book("jay", 4525);

// const Indigo = {
//   airline: "Indigo",
//   iataCode: "6E",
//   booking: [],
// };

// AirIndia.book.call(Indigo, "suman", 4141);
// AirIndia.book.call(Indigo, "sanjay", 4141);

// // apply method

// AirIndia.book.apply(Indigo, ["saroj", 4252]);
// customer_data = ["jay chandra", 4242];

// AirIndia.book.apply(Indigo, customer_data);

// // bind method

// const bookingIndigo = AirIndia.book.bind(Indigo);

// bookingIndigo("hement singh", 758595);

// ===============================================

// function shadowing

// function greet() {
//   console.log("hello welcome to javaScript");
// }

// function outer() {
//   function greet() {
//     console.log("Welcome to javaScript Runtime ...");
//   }

//   greet();
// }

// greet();

// outer();

// ===============================================
// tco tail call  optimization
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));
// console.log(factorial(6));

// function factorial(n, acc = 1) {
//   if (n === 1) return acc;
//   return factorial(n - 1, n * acc);
// }

// console.log(factorial(5));
// console.log(factorial(6));

// ===============================================

// factory function
// A factory function is a function that returns an object.
// Instead of using the new keyword or classes, factory functions create and return objects manually.

// const createUser = (name, age) => {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`welcom to you ${this.name}, your age is ${this.age}`);
//     },
//   };
// };

// const user =createUser("kamlesh", 30);
// user.greet();

// ===============================================
// method chaining

// const calculator ={
//   value : 0,

//    add(num) {
//     this.value += num;
//     return this;
//   },
//    sub(num) {
//     this.value -= num;
//     return this;
//   },
//    mult(num) {
//     this.value *= num;
//     return this;
//   },
//    divide(num) {
//     this.value /= num;
//     return this;
//   }
// }

// const result = calculator.add(5).sub(2).mult(6).divide(2);
// console.log(result.value);

// ===============================================
// method chaining

// const balance = [200, 400, -700, 0, 566, 200, 400, -600, 1200, 25, 200, 1500];

// const total_amount = balance.map((bal)=> bal*2).filter((bal) => bal > 0).reduce((sum, bal) => bal + sum, 0);

// console.log(total_amount);

// ===============================================

// object 