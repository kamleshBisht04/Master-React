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
//1 way

// const user = {
//   name: "Kamlesh",
//   age: 22,
//   city: "Gurgaon",

//   greet() {
//     console.log("Hello!");
//   },
// };

// console.log(user);

// console.log(user.name);
// console.log(user["age"]);
// console.log(user["city"]);
// user.greet();

// //2 way

// const person = new Object();
// ((person.name = "kamlesh"), (person.age = 25));
// console.log(person);

// //3 way

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("John", 25);

// console.log(p1.name);

// //4 way es6 class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person("John", 25);

// console.log(p1.age);

//  5 ways =>Object.create();

// const student = {
//   studentInfo(name, age) {
//     console.log(`student name is ${this.name} and age is ${this.age}`);
//   },
// };

// const s1 = Object.create(student);
// s1.name = "kamlesh";
// s1.age = 30;
// s1.studentInfo();.

// factory method

// const student = (name, age) => {
//   return {
//     name,
//     age,
//     studentInfo() {
//       console.log(`student name is ${this.name} and age is ${this.age}`);
//     },
//   };
// };

// const s1 = student("kamlesh", 30);
// s1.studentInfo();

// student("kamlesh", 30).studentInfo();

// ===============================================

// clone the object

// const user = {
//   name: "kamlesh",
//   age: 30,
//   marks: {
//     science: 80,
//     math: 50,
//     english: 80,
//   },
//   address: {
//     city: "Almora",
//     pincode: 263663,
//   },
// };

//  1 way to clone desturucturing

// const user2 = { ...user };

//  2 way Object.assign

// const user2 = Object.assign({}, user);

// console.log(user);
// console.log(user2);

// user2.age = 29;
// user2.marks.math = 76;
// user2.address.city = "Ranikhet";

// console.log(user);
// console.log(user2);

// deep copy

// const user3 = structuredClone(user);

// 2 way

// const user3 = JSON.parse(JSON.stringify(user));

// user3.age = 35;
// user3.marks.math = 33;
// user3.address.city = "Gairar";

// console.log(user);
// console.log(user3);

// ===============================================

// const marks = [50, 66, 45, 85, 96, 85, 96, 93, 82, 15, 86, 82, 37, 76, 95, 77];

// const [first, second, third, ...other] = marks;
// console.log(first, second, third, other);

//  object destrucring

// const user = {
//   name: "Kamlesh",
//   age: 22,
//   city: "Gurgaon",
// };

// const { name, age, city } = user;

// console.log(name, age, city);

// ===============================================
// computed property []

// const key = "name";

// const user = {
//   [key]: "kamlesh",
// };

// console.log(user.name);

// ===============================================
// object.freeze

// const user = {
//   name: "Kamlesh",
//   age: 22,
// };

// Object.freeze(user);

// user.name = "Rahul"; // won't change
// user.city = "Delhi"; // won't add
// delete user.age; // won't delete

// console.log(user);

// ===============================================

//  object.seal
// const user = {
//   name: "Kamlesh",
//   age: 22,
// };

// Object.seal(user);

// user.name = "sonam singh";

// user.age = 25; // ✅ allowed
// user.city = "Delhi"; // ❌ not allowed
// delete user.name; // ❌ not allowed

// console.log(user);

// ===============================================

//set

// const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);

// console.log(ordersSet);

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");

// console.log(ordersSet);

// ordersSet.delete("Risotto");

// console.log(ordersSet);

// console.log(ordersSet.size);

// for (const order of ordersSet) {
//   console.log(order);
// }

// ===============================================
// map

// const restaurant = new Map();

// restaurant.set("name", "Classico Italiano");
// restaurant.set(1, "Firenze, Italy");
// restaurant.set(2, "Lisbon, Portugal");
// restaurant.set("categories", ["Italian", "Pizzeria", "Vegetarian"]);

// console.log(restaurant);

// console.log(restaurant.get("name"));

// console.log(restaurant.has("categories"));

// restaurant.delete(2);

// console.log(restaurant);

// console.log(restaurant.size);

// for (const [key, value] of restaurant) {
//   console.log(key, value);
// }

// ===============================================

// weekmap
// key is object and not iterable value can be anything

// when we null the key  GC is working and remove it immiditly

// const student = new WeakMap();

// let user = {
//   name: "kamlesh",
// };

// student.set(user, "LogIn");

// console.log(student);

// user = null;
// console.log(student);

// ===============================================

//  weakSet

// const student = new WeakSet();

// let obj1 = {
//   name: "kamlesh",
//   age: 25,
// };

// let obj2 = {
//   name: "priyanka",
//   age: 28,
// };

// student.add(obj1);
// student.add(obj2);

// console.log(student);

// obj1 = null;

// console.log(student);

// ===============================================
// prototype

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   console.log(`person name is : ${this.name} and age is  : ${this.age}`);
// };

// const person1 = new Person("kamlesh", 25);
// console.log(person1);
// person1.sayHi();

// ===============================================
// // __proto__
// const user = {
//   name: "Kamlesh",
// };

// console.log(user.__proto__);

// ===============================================
// prototye inheritance
// const animal = {
//   eats: true,

//   walk() {
//     console.log("Animal walks");
//   },
// };

// const dog = Object.create(animal);

// dog.bark = function () {
//   console.log("Dog barks");
// };

// console.log(dog.eats); // inherited
// dog.walk(); // inherited
// dog.bark(); // own method

// ===============================================

// constructor function
//  is use to create multiple object haveing same properties and behaviour

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("kamlesh", 28);
// const person2 = new Person("jay singh ", 30);

// console.log(person1);
// console.log(person2);

// ===============================================
// class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`student name is ${this.name} and age is ${this.age}`);
//   }
// }

// const person1 = new Person("kamlesh", 30);
// person1.sayHi();

// ===============================================
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(name, age, course) {
//     super(name, age); // calls Person constructor

//     this.course = course;
//   }
// }

// const s1 = new Student("Kamlesh", 25, "JavaScript");

// console.log(s1);

// ===============================================

// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak(); // parent method
//     console.log("Dog barks");
//   }
// }

// const d1 = new Dog();

// d1.speak();
// ===============================================

//  static method
//  no need to create object

// class Person {
//   static greet() {
//     console.log("Hello from static method");
//   }
// }

// Person.greet();

// ===============================================

//  how to merge an array

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const merged = [...arr1, ...arr2];

// console.log(merged);

//=================================================
// Array.from

// const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(numbers);

// const array = Array.from("kamlesh");
// console.log(array);

//=================================================

// Array.flat

// const arr = [1, 2, [3, 4]];

// console.log(arr.flat());

// //  2 level deep

// const arr1 = [1, 2, [3, [4, 5]]];

// console.log(arr1.flat(2));

// //  infintty for multiple

// const arr3 = [1, [2, [3, [4 ,[5,[6,[7,[8,[9]]]]]]]]];

// console.log(arr3.flat(Infinity));

//=================================================
// flatemap

// const arr5 = [2, 5, [2, 3, [7, 8, 9, [1, 2, 3, [4, 5, 6]]]]];

// const result = arr5.flat(Infinity).map((num) => num * 2);
// console.log(result);

//=================================================