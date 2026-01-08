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

// function f1(){
//     console.log("F1")
// }
// function f2(){
//     f1();
//     console.log("F2")
// }
// f2();

//  f2 f1 pop f1 then f2

//  leacture 2

//  Hoiesting

// variable with var key word
//  declaration top of the scope

//  Example 1:
// console.log(num)
// var num = 10;

// console.log(num);

// variable with let
//  let and cost comes for sefaty and bugs error less rebost application

// console.log(num) // reference error
//  they are inside  tdz

// let num = 20;
// num =30;
// console.log(num)

// Example 2: var example

// try{
// console.log(b);
// }catch(e){
//     console.error(e);
// }
// let b = 20;
// console.log(b);

// Example 3:function Hoisting
// greet();
// function greet(){
//     console.log("Hello Lovely Family.!!")
// }

//  Example 4: function expression Hoisting
//  reference error hyfun access before insilization

// try{
//     heyFun();
// }catch(e){
//     console.error(e)
// }

// heyFun();
// let heyFun = function heyFun(){
//     console.log("heyFun!!")
// }

// ==============================================

//  Var & let & Const

// var a = 20;
// a = 30;
// console.log(a);

// Let

// let a = 20;
//  a = 30;
// console.log(a)

//const
// const a =10;
//  a = 30;
//  console.log(a)

// Function scope

// function varExample(){
//     if(true){
//         var x =10;
//         // console.log(x)
//     }
//     console.log(x)
// }

// varExample();

// function letExample(){
//     if(true){
//         let x =10;
//         console.log(x)
//     }
//     // console.log(x)  // reference error
// }

// letExample();

// for(var i=1;i<=3;i++){
//     setTimeout(()=>{
//        console.log(i);
//     },1000)
// }

// for(let i=1;i<=3;i++){
//     setTimeout(()=>{
//        console.log(i);
//     },1000)
// }

// ==============================================

//L5 -  Arrow Function vs Normal Function – Deep Dive into 'this' keyword Behavior"

// function greet(){
//     console.log("Hello Ajay.!!")
// }
// greet();
// greet();

// Arrow function

// const greet = ()=>{
//     console.log("Hello Ajay.!!")
// }
// greet();

// const abc = () => 'ajay suneja';
// const text = abc();
// console.log(text)

// name = 'vikas'

// const user = {
//     name:'Ajay',
//     sayHi:function(){
//         console.log("Hey",this.name)
//     }
// }
// user.sayHi();

//  Arrow function it don't have this keyword it will taken it from perent se
//  it will point to global or window object lexical scope

// const user1 = {
//     name:'Ajay',
//     sayHi:()=>{
//         console.log("Hey",name)
//     }
// }
// user1.sayHi();

// =========================================================
// CLOSURE AND LEXICAL SCOPE

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// =========================================================

// Clean Code with Getters and Setters: JavaScript OOP Simplified

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const person = new Person("kamlesh");
// console.log(person.name);

// person.name = "Sanjay kumar"
// console.log(person.name);

//  above we can change ever thing via diret assigh the value
//  so the getter and setter concept in picture

// =========================================================

// class Person {
//   constructor(name) {
//     this._name = name;
//   }
//   // getter
//   get name() {
//     return this._name;
//   }
//   // setter
//   set name(newName) {
//     if (!name) {
//       this._name = newName;
//     }else {
//         console.log("name is not provided")
//     }
//     // this._name = newName;
//   }
// }

// const person = new Person("kamlesh");
// console.log(person.name);

// person.name = "Deepak";
// console.log(person.name);

// person.name = "";
// console.log(person.name);
// here we can change the value of name

// =======================================================

// class Person {
//   #name; // Private variable
//   constructor(name) {
//     this.#name = name;
//   }
//   get name() {
//     return this.#name;
//   }
//   set name(newName) {
//     if (newName) {
//       this._name = newName;
//     } else {
//       console.log("New Name cannot be empty");
//     }
//   }
// }

// const person = new Person("Ajay");
// console.log(person.name);

// person.name = "vikas"; // call setter method
// console.log(person.name); // getter

// person.name = "";

// =======================================================
// INHERITANCE

// class A {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class B extends A {
// //   constructor(...args) {
// //     super(...args);
// //   }
//   getDetails() {
//     return `Here is ${this.name}`;
//   }
// }

// const obj = new B("kamlesh");
// console.log(obj.getDetails());

// ================================================
//  private methods

// class User {
//   #logAccess() {
//     console.log("private login");
//   }
//   showProfile() {
//     console.log("showProfile...");
//     this.#logAccess();
//   }
// }
// const u = new User();
// u.showProfile();

// ==================================================
// multiple inheritance

// class A {
//   sayA() {
//     console.log("say A");
//   }
// }
// class B extends A {
//   sayB() {
//     console.log("say B");
//   }
// }
// class C extends B {
//   sayC() {
//     console.log("say C");
//   }
// }

// const obj = new C();
// obj.sayA();
// obj.sayB();
// obj.sayC();

// ==================================================

// multiple inheritance using mixins

// class Animal {
//   #name;
//   constructor(newName) {
//     this.#name = newName;
//   }
//   eat() {
//     console.log(`${this.#name} is a eating.. `);
//   }
// }

// const flyable = (base) =>
//   class extends base {
//     fly() {
//       console.log("Animal can fly....");
//     }
//   };

// class Bird extends flyable(Animal) {
//   getDetails() {
//     console.log("Birds lives in honest ....");
//   }
// }

// const obj = new Bird("parrot");
// obj.eat();
// obj.fly();
// obj.getDetails();

// class Animal {
//   eat() {
//     console.log("Eating");
//   }
// }
// const flyable = (Base) =>
//   class extends Base {
//     fly() {
//       console.log("Flying");
//     }
//   }; // Mixins

// class Bird extends flyable(Animal) {
//   bird() {
//     console.log("bird");
//   }
// }

// const myBird = new Bird();
// myBird.fly();
// myBird.eat();
// myBird.bird();

// ====================================================

// javascript  objects
// first  way to create object

// const Person = {
//   name: "kamlesh",
//   qualification: "btech",
//   city: "New Delhi",
//   getDetails() {
//     console.log(
//       `${this.name} is a computer science engineer and done ${this.qualification} from ${this.city}`
//     );
//   },
// };

// console.log(Person.name);
// console.log(Person.qualification);
// console.log(Person.city);
// console.log(Person.getDetails());

// console.log("name" in Person);
// console.log("toString" in Person);
// //  but toString is not present but it say true becosx toString is present in object

// console.log(Person.hasOwnProperty("name"))
// console.log(Person.hasOwnProperty("toStirng"))

// for(let key in Person){
//     console.log(key + " : " + Person[key])
// }

// console.log(Object.keys(Person))

// console.log(Object.values(Person))

// console.log(Object.entries(Person))

// for(const [key,value] of Object.entries(Person)){
//   console.log(key,value)
// }

// second way to create objects

// const NewPerson = new Object();
// NewPerson.name = "Ajay";
// console.log(NewPerson);
// console.log(NewPerson instanceof Object);
// console.log(typeof Person)

// ==================================================

// L - 9 Optional Chaining (?.) & Nullish Coalescing (??) & Logical OR (||) in JavaScript
// these are seafty operatores ...

// const User = {
//     name: "Ajay",
//     // address :{
//     //  city:"Delhi",
//     //  pincode:"110044"
//     // },
//     preferences: null,
//     amount: 0,
//     getData:function(){
//         return this.name
//     }
// };
// // optional chaining
// const city = User?.address?.city ?? 'Mumbai';
// console.log(city)

// //  if function not exist   // undefine .....
// console.log(User.getData?.());

// // nullish coalescing

// // const TotalMoney = User.amount || 10000;
// // solution for this problem
// // nulll or undefine then 2nd value evualted otherwise first shortcircuit return

// // const TotalMoney = User.amount || 10000;
// // console.log(TotalMoney)

// const TotalMoney = User.amount ?? 10000;
// console.log(TotalMoney)

// const prefs = User.preferences ?? 'No Preference Set';
// console.log(prefs)

// // OR Operator // turthy value return
// const quantity = 0;
// const result = quantity || 10;
// console.log(result)

//======================================================

// Distructuring in java script

// const User = {
//   name: "Ajay",
//   age: 30,
//   location: "Delhi",
// };

// // const user1 = user.name;
// // console.log(user1);

// // const { name, age, location: city } = User;
// // console.log(name, age, city);

// const {email = 'Not Provided' } = User;
// console.log(email)

// // array destructuring

// const colors = ['Red','Pink','Green'];

// const [ first, second ] = colors;
// console.log(first,second)

// const [ , , third ] = colors;
// console.log(third)

//==================================================

// Deepcopy and shellow copy

// const Account = {
//   accountHolder: "kamlesh singh bisht",
//   accountno: 123648415584411,
//   address: {
//     city: "Delhi",
//     country: "Indian",
//     Pincode: 110025,
//     cityDetails: {
//       area: "Rular",
//       mp: 10,
//     },
//   },
// };

// //  shellow copy pointing to same memory location
// // two way
// primitve can share different location important

// // const AccountShellowCopy = Object.assign({}, Account);

// const AccountShellowCopy = { ...Account };
// console.log(AccountShellowCopy);

// //  Deep copy

// const AccountDeepCopy = JSON.parse(JSON.stringify(Account));
// console.log(AccountDeepCopy);

// // chnageing the origanle accout
// Account.address.city = "Uttarakhand";
// Account.address.cityDetails.mp = 5;

// Account.accountHolder="Deepak singh Rawat"

// console.log(Account);
// console.log(AccountShellowCopy);
// console.log(AccountDeepCopy);

//==================================================

// // Array

// const users = [
//   { id: 1, name: "John Doe", age: 20, price: 100 },
//   { id: 2, name: "Emma Stone", age: 20, price: 200 },
//   { id: 3, name: "Max", age: 19, price: 500 },
//   { id: 4, name: "Olivia Smith", age: 31, price: 300 },
// ];

// // map method
// const userName = users.map((user) => user.name.toUpperCase());
// console.log(userName);

// // filter method
// const userNamePriceOver200 = users.filter((user) => user.price > 200).map((user) => user.name.toUpperCase());
// console.log(userNamePriceOver200);

// // Reduced method

// const totalMoney = users.reduce((sum, user) => sum + user.price, 0);
// console.log(totalMoney);

// // find method

//   const name = users.find(user => user.age > 20);
//   console.log(name)

//   // findIndex()
// const nameIndex = users.findIndex((user) => user.name === "Emma Stone");
// console.log(nameIndex);

// // join()
// const nameString = userName.join(", ")
// console.log(nameString);
// // split()
// const nameArray = nameString.split(", ")
// console.log(nameArray);

// const age = users.filter(user => user.age >= 20);
// console.log(age);

// const result = users.filter(user => user.age > 20).map(user => user.name.toUpperCase());
// console.log(result)

// console.log(users.map(user => user.name.toUpperCase()));

// =======================================================

// call apply and bind method

// const user1 ={
//     name:"Ajay",
//     age:28
// }

// const user2 ={
//     name:"Rahul",
//     age:25
// }

// function printDetails(city,country){
//     console.log(`Name:${this.name} ,Age: ${this.age},Location:${city} ${country} `)
// }

// printDetails.call(user2,'Delhi','India')
// printDetails.apply(user1,['Delhi','India'])

// // bind will return a function and then we use it 
// const userDetails = printDetails.bind(user1 ,"Dellhi" ,"India");
// userDetails();


// // 2 example

// const obj = {
//    name:"kamlesh",
//    greet:function(){
//     return `Hello,${this.name}`
//    }
// }

// const greetFn=obj.greet.bind(obj);
// console.log(greetFn())

// =====================================================

// let cart = ["Milk", "Bread", "Butter", "Eggs", "Juice"]; 

// console.log(cart)

// const preview = cart.slice(1,3);
// console.log(preview)
// console.log(cart)

// // splice change the value of array 
// // modifing the existing array 

// let items = ["Pen", "Pencil", "Notebook", "Eraser", "Sharpener"];

// console.log(items)

// items.splice(2,1)

// console.log(items)

// // adding the items
// items.splice(1,0,'Marker')
// console.log(items)

// items.splice(2,2,'Scale','Ruler')
// console.log(items)

// =====================================================

// Mastering Spread & Rest Operators in JavaScript 

// const nums = [1,2,3];
// const copy = [...nums,4];
// console.log(copy)

// const newStudent = {
//     name:'Ajay'
// }

// const copy1 = {...newStudent,'age':28}
// console.log(copy1)


// const a = [1,2,3];
// const b = [4,5,6];
// const merge = [...a,...b];
// console.log(merge)

// function sum(a,b,c){
//     return a+b+c;
// }
// const values = [1,2,3];
// console.log(sum(...values));

// // Rest Operator
// // packing of data into array 

// function logAll(...items){
//  console.log(items)
// }
// logAll("Pen","Pencil","Eraser")


// const [first,second ,...rest]  = [10,20,30,40];
// console.log(first,second,rest)

// =====================================================

// Ternary Operator & Short-Circuiting

// Condition ? '' : '';

const age = 40;
const status =  age >= 18 ? 'Adult' : 'Minor';
console.log(status)

if(age >= 18){
    return 'Adult'
}else{
    return 'Minor'
}

// short circuiting in java scripting

const input = "" || "Default Value"
console.log(input)

const isLoggedIN = false;
isLoggedIN && console.log("Welcome back")

// =====================================================

// Boolean Values in JS
// 0 -> False
// 1 -> True


if (0) console.log("Won't Run!");    
if ("") console.log("Won't Run!");    
if (null) console.log("Won't Run!");  
if (undefined) console.log("Won't Run!");

if (1) console.log("Runs!");  
if ("Hello") console.log("Runs!");  
if (42) console.log("Runs!");       
if ([]) console.log("Runs!");    
if ({}) console.log("Runs!");   
console.log(typeof [])

console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
