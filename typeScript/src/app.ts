//  type script basic

var age: number = 52;
var collage: string = "DBIT";
var time: number = 8.0;

const greet = function (name: string): string {
  return `Hello welcome to you ! ${name}`;
};

console.log(greet("kamlesh"));

console.log(age);
console.log(collage);
console.log(time);

//  class 3
// data types primitive

// number

var num1: number = 10;
var num2: number = 30;
var num3: number = 30;
// error if num3 is string

var total: number = num1 + num2 + num3;
console.log(total);

// we can define binay octal or hexadecimal or decimal

// decimal
let decimal: number = 10;
console.log(decimal);

//  binay
let binayNum: number = 0b1010;
console.log(binayNum);

// Octal

let octalNum: number = 0o12;
console.log(octalNum);

// hexadecimal

let hexNum: number = 0xa;
console.log(hexNum);

// String and boolean

let firstName: string = "kamlesh";
firstName = "bisht";

console.log(firstName);

let str: string = "Hello How are you";
let str1: string = "best friend";
let str2: string = `working with ai`;

let marks: number = 80;
let userName: string = "kamlesh";

let info: string = `my name is ${userName} and my marks is ${marks}`;

console.log(info);

// convert to string
// toString(); , " " +10 ,

// null and undefine

let data: null = null;
let val: undefined = undefined;

console.log(val);

// bigint

// number data type max value =2^53-1

let bigNumber: bigint = 900719925474090n;
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
  const nameInput = document.getElementById("username") as HTMLInputElement;
  const name: string = nameInput.value;

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const email: string = emailInput.value;

  const ageInput = document.getElementById("age") as HTMLInputElement;
  const age: string = ageInput.value;

  console.log(name, email, age);
}

// Array datatype
// collection of same data type and pre-define data type

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

let names: string[] = ["kamlesh", "Deepak", "suman", "priyanka"];
console.log(names);

let colors: Array<string> = ["Red", "blue", "green"];
colors.push("green");
console.log(colors);

let collageName: ReadonlyArray<string> = ["DBIT", "IIT", "NIT"];
// collageName.push("jbit");

// tuples
// it has fixed length with order collection of  different datatype each element in tuples has specific type ..
// A tuple in TypeScript is a fixed-length array where each position has a predefined data type..

let employeeDetails: [string, number, number, boolean] = ["kamlesh", 28, 100000, false];
console.log(employeeDetails);

let student: readonly [string, number];
student = ["Kamlesh", 21];
// student.push(25);
console.log(student);

//=================================================
// object data type

const user: {
  name: string;
  age: number;
  marks: number;
  collage: string;
} = {
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

const userData: {
  name: string;
  age: number;
  marks: number | undefined;
  city: string | undefined;
} = {
  name: "kamlesh",
  age: 30,
  marks: undefined,
  city: undefined,
};

userData.marks = 56;
userData.city = "Delhi";

console.log(userData);

// best way to that

const students: {
  [key: string]: string | number | boolean | undefined | object;
} = {
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

// ==================================================
// 2 way

type studentJnv = {
  name: string;
  age: number;
  city: string;
};

let s1: studentJnv = {
  name: "arjun singh",
  age: 22,
  city: "dehradun",
};

console.log(s1);

// ======================3 way interface

interface studentIIT {
  name: string;
  age: number;
  address: {};
}

const student1: studentIIT = {
  name: "suman singh",
  age: 30,
  address: {
    city: "sarai julana",
    pincode: 110025,
    state: "New delhi",
  },
};

console.log(student1);

// another example

type Employee = {
  id: number;
  name: string;
  isActive: boolean;
};

const emp: Employee = {
  id: 101,
  name: "Kamlesh",
  isActive: true,
};

console.log(emp);

// =========================================

// any type

let value: any;

value = 10;
console.log(value);

value = "Hello";
console.log(value);

value = true;
console.log(value);

value = [1, 2, 3];
console.log(value);

let dataName: any = "kamlesh";

console.log(dataName.toUpperCase());
// console.log(dataName.toFixed(2));  // no type checking // no type shefty

// ============================================

let value1: unknown;

value1: 10;
value1: "Hello";
value = true;

let userInput: unknown = "kamlesh";

//  console.log(userInput.toUpperCase());

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

// example 2
let input: unknown = 50;

if (typeof input === "number") {
  console.log(input.toFixed(2));
}
// ============================================




















