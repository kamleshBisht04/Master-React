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

let user = {
  name: "kamlesh",
  age: 32,
  address: "new Delhi",
};

console.log(user);
delete user.address;
console.log(user);

//  nullfying the object 

user= {};
console.log(user);

// ================================================

