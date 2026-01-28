"using strict";

// closure
// function countCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(`count : ${count}`);
//   };
// }

// const counter = countCounter();
// counter();
// counter();
// counter();
// counter();

// example 2

// function secureBooking() {
//   let totalSeet = 0;
//   return function () {
//     totalSeet++;
//     console.log(totalSeet);
//   };
// }

// const Booking = secureBooking();
// Booking();
// Booking();
// Booking();

// example 3 Real life example Back account

// function AccountDetails(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposite: function (amount) {
//       balance += amount;
//       console.log(`you deposite : ${amount}`);
//     },

//     withdraw: function (amount) {
//       balance -= amount;
//       console.log(`you withdraw : ${amount}`);
//     },
//     getBalance: function () {
//       console.log(`Your account Balance is : ${balance}`);
//     },
//   };
// }

// const Account = AccountDetails(5000);
// Account.getBalance();
// Account.deposite(500);
// Account.withdraw(2000);
// Account.getBalance();
// no direct access
// console.log(Account.balance);

// higher order function

// function greet(name) {
//   return `Welcome to you ${name}`;
// }

// function greeting(fun) {
//   console.log(fun("kamlesh"));
// }

// greeting(greet);

// example 2

// function orderFood(callback) {
//   console.log("Order placed...");

//   setTimeout(() => {
//     console.log("Food delivered 🍕");
//     callback();
//   }, 2000);
// }

// function eatFood() {
//   console.log("Eating food 😋");
// }

// orderFood(eatFood);

// IIFE

// (function greet(){
//   console.log("Welcome to you")
// })();

// Curring

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(1, 2, 3));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(4)(5));

// recursion

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(4));
// console.log(factorial(6));
// console.log(factorial(5));

// memoizedtion

// function memoizedtion() {
//   const cashe = {};
//   return function factorial(n) {
//     if (n in cashe) {
//       return cashe[n];
//     } else {
//       if (n === 1) return 1;
//       let result = n * factorial(n - 1);
//       cashe[n] = result;
//       return result;
//     }
//   };
// }

// const factorial = memoizedtion();
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(7));

// Generator function

function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const c = counter();

console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
