"use strict";
//  type script basic
Object.defineProperty(exports, "__esModule", { value: true });
var age = 52;
var collage = "DBIT";
var time = 8.0;
const greet = function (name) {
    return `Hello welcome to you ! ${name}`;
};
console.log(greet("kamlesh"));
console.log(age);
console.log(collage);
console.log(time);
//  class 3
// data types primitive
// number
var num1 = 10;
var num2 = 30;
var num3 = 30;
// error if num3 is string
var total = num1 + num2 + num3;
console.log(total);
// we can define binay octal or hexadecimal or decimal
// decimal
let decimal = 10;
console.log(decimal);
//  binay
let binayNum = 0b1010;
console.log(binayNum);
// Octal
let octalNum = 0o12;
console.log(octalNum);
// hexadecimal
let hexNum = 0xa;
console.log(hexNum);
// String and boolean
let firstName = "kamlesh";
firstName = "bisht";
console.log(firstName);
let str = "Hello How are you";
let str1 = "best friend";
let str2 = `working with ai`;
let marks = 80;
let userName = "kamlesh";
let info = `my name is ${userName} and my marks is ${marks}`;
console.log(info);
// convert to string
// toString(); , " " +10 ,
// null and undefine
let data = null;
let val = undefined;
console.log(val);
// bigint
// number data type max value =2^53-1
let bigNumber = 900719925474090n;
let x = 1n;
let y = 2n;
console.log(bigNumber + x);
console.log(bigNumber + y);
// symbol
let sym = Symbol();
let sym1 = Symbol();
console.log(sym == sym1);
console.log(sym === sym1);
let sym2 = Symbol("abc");
let sym3 = Symbol("abc");
console.log(sym == sym1);
console.log(sym2 === sym3);
const d_id = Symbol("id");
const obj = {
    name: "kamlesh",
    [d_id]: 25,
};
console.log(obj[d_id]);
//=========================================
// how to use ts for input feilds
function getInfo() {
    const nameInput = document.getElementById("username");
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const ageInput = document.getElementById("age");
    const age = ageInput.value;
    console.log(name, email, age);
}
// Array datatype
// collection of same data type and pre-define data type
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
let names = ["kamlesh", "Deepak", "suman", "priyanka"];
console.log(names);
let colors = ["Red", "blue", "green"];
colors.push("green");
console.log(colors);
let collageName = ["DBIT", "IIT", "NIT"];
// collageName.push("jbit");
// tuples
// it has fixed length with order collection of  different datatype each element in tuples has specific type ..
// A tuple in TypeScript is a fixed-length array where each position has a predefined data type..
let employeeDetails = ["kamlesh", 28, 100000, false];
console.log(employeeDetails);
let student;
student = ["Kamlesh", 21];
// student.push(25);
console.log(student);
//=================================================
// object data type
const user = {
    name: "kamlesh",
    age: 30,
    marks: 82,
    collage: "DBIT",
    // city:"delhi"   // could not added
};
user.age = 26;
user.collage = "nit delhi";
console.log(user);
// senioro 2 // marks and city add letter
const userData = {
    name: "kamlesh",
    age: 30,
    marks: undefined,
    city: undefined,
};
userData.marks = 56;
userData.city = "Delhi";
console.log(userData);
// best way to that
const students = {
    name: "Deepak singh",
    age: 31,
    city: "almora",
    distt: "Almora",
    pincode: 263663,
    Address: {
        city: "sarai julana",
        pincode: 110025,
        state: "new delhi",
    },
};
console.log(students);
let s1 = {
    name: "arjun singh",
    age: 22,
    city: "dehradun",
};
console.log(s1);
const student1 = {
    name: "suman singh",
    age: 30,
    address: {
        city: "sarai julana",
        pincode: 110025,
        state: "New delhi",
    },
};
console.log(student1);
const emp = {
    id: 101,
    name: "Kamlesh",
    isActive: true,
};
console.log(emp);
// ============================================================
// any type
//# sourceMappingURL=app.js.map