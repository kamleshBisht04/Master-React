//  type script basic
export {};

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

// let bigNumber: bigint = 900719925474090;
// let x = 1n;
// let y = 2n;

// console.log(bigNumber + x);
// console.log(bigNumber + y);

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

// function Return  type in type script function

function greeting(name: string): string {
  return `Hello , ${name}`;
}

console.log(greeting("kamlesh"));

// number

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 6));

// function return boolean

function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(isAdult(20));
console.log(isAdult(15));

// return void

function printMessage(message: string): void {
  console.log(message);
}

printMessage("welcome to TypeScript!");

// ============================================

const multiply = (a: number, b: number): number => {
  return a * b;
};
console.log(multiply(5, 7));

//  returning object

function getUser(): { name: string; age: number } {
  return {
    name: "kamlesh",
    age: 30,
  };
}

console.log(getUser());

// ============================================

// return an array from function

const getNumber = (): number[] => {
  return [10, 20, 30, 40, 50];
};

console.log(getNumber());

// ============================================

function complex(): number | string {
  let data = 25;
  let data2 = "hello";

  if (typeof data === "number") {
    return data;
  }
  return data2;
}

// ============================================

// never data type in typescript

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong!");

// example 2

function logForever(): never {
  while (true) {
    console.log("output and data never executed ");
  }
}
// ============================================

// Function Parameters in TypeScript

function greetings(name: string): string {
  return `Hello, ${name}`;
}

console.log(greetings("Kamlesh"));

// 2. Multiple Parameters

function adding(a: number, b: number): number {
  return a + b;
}

console.log(adding(10, 20));

// 3. Optional Parameters (?)

function introduce(name: string, age?: number): string {
  if (age) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  return `My name is ${name}.`;
}

console.log(introduce("Kamlesh"));
console.log(introduce("Kamlesh", 22));

// 4. Default Parameters

function welcome(name: string = "Guest"): string {
  return `Welcome, ${name}!`;
}

console.log(welcome());
console.log(welcome("Kamlesh"));

// 5. Rest Parameters (...)

function totalValue(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(totalValue(10, 20, 20, 30, 50));
console.log(totalValue(1050, 50));

// ============================================

// union types

let value2: number | string;

value2 = 56;
value2 = "union can hold more than one data type";

console.log(value2);

// example 2

function printId(id: number | string): void {
  console.log("ID : ", id);
}
printId(123);
printId("ABC123");

// example 3

function display(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string methods
  } else {
    console.log(value.toFixed(2)); // number methods
  }
}

display("hello");
display(25);

// example 4

let datas: string | number[];

datas = "string is allowed";

datas = [10, 20, 50, 60, 80];

console.log(datas);

let data1: (string | number)[] = [10, "hello", 20, "world"];

console.log(data1);

// union type function return

function getResult(success: boolean): string | number {
  if (success) {
    return "Operation Successful";
  }
  return 0;
}

console.log(getResult(true));
console.log(getResult(false));

//  custome data type

type Admin = {
  name: string;
  role: string;
};

type User = {
  name: string;
  email: string;
};

let person: User | Admin;

person = {
  name: "kamlesh",
  role: "manager",
};

person = {
  name: "Deepak",
  email: "Deepak@example.com",
};

console.log(person);

// example

interface collageData {
  name: string;
  age: number;
  branch: string;
  year: number;
}

let student2: collageData = {
  name: "kamlesh",
  age: 30,
  branch: "dbit",
  year: 2028,
};

console.log(student2);

interface teacher extends collageData {
  teacherId: string;
}

let teacher1: teacher = {
  name: "sir ",
  age: 45,
  branch: "dbit",
  year: 2025,
  teacherId: "dbit10021236",
};

console.log(teacher1);

// ==================================================

// intersection

type collageStudent = {
  name: string;
  age: number;
  studentId: string;
};

type collages = {
  collage_id: string;
  collageName: string;
};

type collageStudentData = collageStudent & collages;

const bcaStudent: collageStudentData = {
  name: "kamlesh",
  age: 30,
  studentId: "BCA110",
  collage_id: "DBIT2028",
  collageName: "DBIT DEHRADUN",
};

console.log(bcaStudent);

// ===============================================
// type

type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";

// enum
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(Days[4]);
console.log(Days.Friday);
console.log(Days);

// letral type

let direction: "left" | "right" | "up" | "down";

direction = "up";
// direction = "forward";

console.log(direction);

// =================================

// Handling the DOM events and inputs in type script...

console.log("ts file conect to js file");

// how to use ts for input feilds

// const button = document.getElementById("btn") as HTMLButtonElement;

// button.addEventListener("click", getInfo);

// function getInfo(): void {
//   const nameInput = document.getElementById("username") as HTMLInputElement;
//   const emailInput = document.getElementById("email") as HTMLInputElement;
//   const ageInput = document.getElementById("age") as HTMLInputElement;

//   console.log(nameInput.value);
//   console.log(emailInput.value);
//   console.log(ageInput.value);
// }

// =================================
//#########################################
//#########################################
//#########################################

// class in type scripts

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello ,my name is ${this.name} and age is ${this.age}`);
  }
}

const person1 = new Person("kamlesh", 30);
person1.greet();

const person2 = new Person("deepak", 36);
person2.greet();

// =================================
// fucntion inside a claa

class Calculator {
  add(num1: number, num2: number): number {
    return num1 + num2;
  }
}

const cal = new Calculator();
console.log(cal.add(5, 6));

// =================================
//Access modifiers..

class Users {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user1 = new Users("Kamlesh");
console.log(user1.name);

// =================================
// private

class BankAccount {
  private balance: number = 10005;

  show_balance(): number {
    return this.balance;
  }
}

const account1 = new BankAccount();
console.log(account1.show_balance());
// console.log(account1.balance) // private valable

// =================================

class Animal {
  protected sound: string = "Some sound";
}

class Dog extends Animal {
  bark() {
    console.log(this.sound);
  }
}

const dog = new Dog();
dog.bark();

// ====================================
// Readonly Property

class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const car1 = new Car("toyta");
console.log(car1);
// car1.brand="tesla";

// ====================================
// inheritance  and method overrideing
// private // contruction // super()

class Animals {
  makeSound(): void {
    console.log("Animal make sound");
  }
}

class Dogs extends Animals {
  private name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }

  bark(): void {
    super.makeSound(); //call the parent class method
    console.log(`Dog barks`);
  }

  makeSound(): void {
    console.log(`${this.name} make sound bhaw bhaw...`);
  }
}

const labrador = new Dogs("labrador");
labrador.bark();
labrador.makeSound();

// ====================================
// getter and setter

class Persons {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
}

const p2 = new Persons(35);
console.log(p2.age);

p2.age = 36;
console.log(p2.age);

// ====================================

class Person1 {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }
}

const p = new Person1();

p.age = 25; // Calls setter
p.age = -10;
console.log(p.age);

// ====================================
// combine exemple of all

class Student {
  constructor(
    public name: string,
    public rollNo: number,
    private marks: number,
  ) {}

  displayInfo(): void {
    console.log(`Name: ${this.name}, Roll No: ${this.rollNo}, Marks: ${this.marks}`);
  }

  getMarks(): number {
    return this.marks;
  }
}

const student11 = new Student("Kamlesh", 101, 95);

student11.displayInfo();

console.log(student11.name); // ✅
console.log(student11.rollNo); // ✅
console.log(student11.getMarks()); // ✅
// console.log(student11.marks);   // ❌ Error (private)

// ===========================================

// typeof gaurd

function printValue(value: number | string) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value.toFixed(2));
  }
}

printValue(25);
printValue("kamlesh");
// =============================================
// instance of

class Dogss {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dogss | Cat) {
  if (animal instanceof Dogss) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dogss());
makeSound(new Cat());

//  in operater

type Cars = {
  drive: () => void;
};

type Boat = {
  sail: () => void;
};

function move(vehicle: Cars | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

// =======================================================
type SuccessResponse = {
  success: true;
  data: string;
};

type ErrorResponse = {
  success: false;
  error: string;
};

function handleResponse(response: SuccessResponse | ErrorResponse) {
  if (response.success) {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.error);
  }
}

handleResponse({
  success: true,
  data: "User created successfully",
});

handleResponse({
  success: false,
  error: "Something went wrong",
});

// =======================================================

// generice => provide reusable component and type safty

// problem in any
function getValue(value: any) {
  return value;
}

let num = getValue(10); // any
let str11 = getValue("Hello"); // any

console.log(typeof num);
console.log(typeof str11);

// solution is  generic

function getValus<T>(value: T): T {
  return value;
}

let num11 = getValus(10);
let str12 = getValus("Hello");
let arrayname = getValus(["kamlesh", "Deepak"]);

console.log(typeof num);
console.log(typeof str11);

// =======================================================

// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// const firstNumber = getFirstElement([10, 20, 30]);
// const firstString = getFirstElement(["A", "B", "C"]);

// console.log(firstNumber); // 10
// console.log(firstString); // A

// =======================================================
//  keyOf  union of keys
type Personss = {
  name: string;
  age: number;
  city: string;
};

type PersonKeys = keyof Personss;

let key: PersonKeys;

key = "name";
key = "age";
key = "city";

// =======================================================
// index signature

interface teacherDataType {
  name: string;
  collage: string;
  employeeId: string;
  [key: string]: string | number | boolean;
}

const teacherData: teacherDataType = {
  name: "Kamlesh Singh",
  collage: "DBIT DEHRADUN",
  employeeId: "dbitEmp101",
  joiningData: "12-05-2025",
  age: 25,
  isActive: true,
};

// =======================================================
// utility type in typescript
//Partial<Type>

interface Users {
  id: number;
  name: string;
  email?: string;
}

const updateUser: Partial<Users> = {
  id: 101,
};

// Required<Type>;

const requiredUser: Required<Users> = {
  id: 101,
  name: "kamlesh",
  email: "kamleshbisht04@gmail.com",
};

// Readonly<Type>;

interface Product {
  id: number;
  title: string;
}

const item: Readonly<Product> = {
  id: 101,
  title: "chips",
};

// Pick <Type>

interface Employee1 {
  id: number;
  name: string;
  age: number;
  branch: string;
}

type EmployeeData = Pick<Employee1, "id" | "name" | "age">;

const emp1: EmployeeData = {
  id: 101,
  name: "kamlesh",
  age: 25,
};

// Omit<Type, Keys>;


type EmployeeOmitType = Omit <Employee1,"age">;

const emp2: EmployeeOmitType={
  id:101,
  name:"kamlesh",
  branch :"CSE"
}

// Record<Keys, Type>;

