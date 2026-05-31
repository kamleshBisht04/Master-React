// ================================
// Print "Hello World".

// console.log("Hello world");

// ================================
// Swap two numbers.

// let num1 = 56;
// let num2 = 25;
// let temp;

// temp = num1;
// num1 = num2;
// num2 = temp;

// console.log("first no is   : ", num1);
// console.log("second no is   : ", num2);

// ================================
// Swap two numbers.  withoout third variable

// let a = 50;
// let b = 25;

// a = a + b; // 75
// b = a - b; // 56
// a = a - b;

// console.log("first no is   : ", a);
// console.log("second no is   : ", b);

// ================================

// Check even or odd.

// num = 26;

// if (num % 2 === 0) {
//   console.log(`${num} is evern`);
// } else {
//   console.log(`${num} is odd`);
// }

// ================================
// Find largest of 3 numbers.

// const largestofThreeNumber = (a, b, c) => {
//   if (a > b && a > c) {
//     console.log(`${a} is greater....`);
//   } else if (b > c) {
//     console.log(`${b} is greater....`);
//   } else {
//     console.log(`${c} is greater....`);
//   }
// };

// largestofThreeNumber(4, 5, 6);
// largestofThreeNumber(50, 178, 90);
// largestofThreeNumber(410, 510, 666);
// largestofThreeNumber(40, 58, 6);

// ================================
// leap year

// const year = 2000;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} is leap year`);
// } else {
//   console.log(`${year} is normal year`);
// }

// ===================================================

// // Reverse a string.

// const sentance = "hello this is kamlesh !";

// // const reverseStr = sentance.split("").reverse().join("");
// // console.log(reverseStr);

// let str = "";

// for (let i = sentance.length - 1; i >= 0; i--) {
//   str += sentance[i];
// }
// console.log("reverse string")
// console.log(str);

// ===================================================
// Count Vowels

// const countVowel = (str) => {
//   let count = 0;
//   const vowel = "aeiouAEIOU";

//   for (let char of str) {
//     if (vowel.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// const totalVowel = countVowel("appleAppLE");
// console.log(totalVowel);

// const total = countVowel("I am the best student in the class");
// console.log(total);
// ===================================================

// Check Palindrome
// madam ,racecar ,level ,123321

// const checkPaliadrome = (str) => {
//   const length = str.length;
//   const lowerString = str.toLowerCase();

//   for (let i = 0; i <= length / 2; i++) {
//     if (lowerString[i] !== lowerString[length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const isPaliandrome = checkPaliadrome("madam");

// console.log(isPaliandrome);

// ===================================================
//  madam

// const checkPaliandrome = (num) => {
//   const orignalNum = num;

//   let reverse = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }
//   if (orignalNum === reverse) {
//     console.log(`${orignalNum} is paliandrome..`);
//   } else {
//     console.log(`${orignalNum} is not paliandrome..`);
//   }
// };

// checkPaliandrome(123321);
// checkPaliandrome(121);
// ===================================================

//  3 way to 2 pointer way

// const checkPaliandrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// console.log(checkPaliandrome('madam'));
// console.log(checkPaliandrome('racar'));

// ===================================================
