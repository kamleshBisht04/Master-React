"using strict";

// quesiton 1

// console.log(a);
// var a = 10;
// function a() {}
// console.log(a);

// quesiton 2

// console.log(typeof x);
// let x = 5;

// quesiton 3
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");

// quesiton 4

// setTimeout(() => console.log('T1'), 0);
// for (let i = 0; i < 1e6; i++) {}
// console.log('X');

// quesiton 5

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// quesiton 6

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// quesiton 7 // clouser concept
// function makeCounter() {
//   let n = 0;

//   return () => ++n;
// }

// const c1 = makeCounter();
// const c2 = makeCounter();

// console.log(c1());
// console.log(c1());
// console.log(c2());

// quesiton 8

// const user = {
//   _age: 10,
//   get age() {
//     return this._age + 1;
//   },
//   set age(v) {
//     this._age = v * 2;
//   },
// };

// user.age = 20;
// console.log(user._age, user.age);

// quesiton 9

// class X {
//   #v = 1;

//   getV() {
//     return this.#v;
//   }
// }
// const x = new X();

// console.log("v" in x, x.getV());

// quesiton 10

// const obj = { a: undefined };

// console.log("a" in obj);

// quesiton 11

// const data = { a: { b: 0 } };

// console.log(data.a?.b ?? 5);

// console.log((data.a?.b ?? 5) || 9);

// quesiton 12
//  value of a is undefine defalt value + obj destucture in null not possiable

// const { a = 1 } = { a: undefined };

// console.log(a);

// quesiton 13

// const { x = 10, y = 20 } = { x: undefined, y: null };

// console.log(x, y);

// quesiton 14

// const { x = 10, y = 20 } = { x: undefined, y: null };
// console.log(x, y);

// quesiton 15

// const [p, , q] = [1, 2, 3];
// console.log(p, q);

// quesiton 16

// const data = [" ", "", undefined];
// console.log(data.filter((item) => item));

// quesiton 18

// const obj = { a: { b: 1 } };
// const c1 = { ...obj };
// c1.a.b = 2;
// console.log(obj.a.b);

// quesiton 20

// console.log([1,2,3].map(x => x*2).filter(x => x > 3).reduce((a,b) => a+b, 0));

// quesiton 21

// console.log('a,b,,c'.split(',').join('-'));

// quesiton 22

// const arr = [5,12,8,130,44];

// console.log( arr.find(x => x > 10), arr.findIndex(x => x > 100) );

// quesiton 23

// const nums = [1, 2, 3, 4];

// console.log(nums.splice(1, 2, 9), nums, nums.slice(1, 3));

// quesiton 24

// function add(y, z) {
//   return this.x + y + z;
// }

// const obj2 = { x: 10 };

// const f = add.bind(obj2, 5);

// console.log(f(2), add.call({ x: 1 }, 2, 3), add.apply({ x: 2 }, [3, 4]));

// quesiton 25

// function A() {}

// A.prototype.g = () => "G";

// const a = new A();

// console.log(a.g(), Object.getPrototypeOf(a) === A.prototype);

// // quesiton 26

// console.log( Boolean([]), Boolean(''), !!null, !!'0' );

// quesiton 27

// const sum = (...args) => args.reduce((a, b) => a + b, 0);

// const a1 = [1, 2],
//   a2 = [3, 4];

// console.log(sum(...a1, ...a2));

// quesiton 28
// const a = 0,
//   b = 2;

// console.log(a || ((b > 1 ? "yes" : "no") && "ok"));

// quesiton 28

// const s = new Set([1, 2, 2, 3]); //123
// const m = new Map([[1, "a"]]); // 1 a

// m.set({}, 'x');
// console.log(s.size, m.has(1), m.size);
// console.log(m)

// quesiton 28

// document.body.addEventListener("click", () => console.log("body"));

// const div = document.createElement("div");

// document.body.appendChild(div);

// div.addEventListener("click", () => console.log("div"));

// div.click();

// quesiton 29

// Promise.resolve(1)

//   .then((x) => x + 1)

//   .then((x) => {
//     throw x;
//   })

//   .catch((x) => x + 1)

//   .then(console.log);

// quesiton 30

// async function f() {
//   try {
//     return await Promise.reject("err");
//   } catch (e) {
//     return "caught";
//   } finally {
//     console.log("finally");
//   }
// }

// f().then(console.log);

// quesiton 31

// let arr = [1, 2, 3, 4, 5, -6, 7];
// arr.length = 0;
// console.log(arr);

// quesiton 32

// x = 10;
// console.log(x);
// var x;

// quesiton 33

// let a = { x: 1, y: 2 }
// let b = a;
// b.x = 3;
// console.log(a);
// console.log(b);

// quesiton 34

// for(var i = 0; i < 10; i++){
//     setTimeout(function(){
//       console.log("value is " + i);
//   })
// }

// quesiton 36
// for(let i = 0; i < 10; i++){
//     setTimeout(function(){
//       console.log("value is " + i);
//   })
// }

// quesiton 37

// function hello() {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//   });
//   console.log("3");
// }
// hello();

// quesiton 38

// let f = "8";
// let a = 1;
// console.log((+f)+a+1);

// quesiton 39

// let a = 10;
// if(true){
//    let a = 20;
//    console.log(a, "inside");
// }
// console.log(a, "outside");

// quesiton 40

// var a = "xyz";
// var a = "pqr";

// console.log(a)

// quesiton 41

// const arr1 = [1, 2, 3, 4];
// const arr2 = [6, 7, 5];
// const result = [...arr1, ...arr2];
// console.log(result);

// quesiton 42
// const person1 = { name: "xyz", age: 21 };
// const person2 = { city: "abc", ...person1 };
// console.log(person2);

// quesiton 43

// console.log(5 < 6 < 7);

// quesiton 44
// console.log(7 > 6 > 5);

// quesiton 45

// console.log(0 == false);
// console.log(1 == true);

// quesiton 46

// console.log([11, 2, 31] + [4, 5, 6]);

// quesiton 47
// important

// console.log({} == {});
// console.log({} === {});

// quesiton 48

// const a = {};
// const b = a;
// console.log(a == b);
// console.log(a === b);

// quesiton 49

// let x = 5;
// let y = x++;
// console.log(y);
// console.log(x)

// quesiton 50

// let x = 5;
// let y = ++x;
// console.log(y);
// console.log(x)

// quesiton 51

// console.log('apple'.split(''));

// quesiton 52

// const arr = [2,3,5,2,8,10,5];
// console.log(arr.indexOf(5))

// quesiton 53

// const array = [8, 18, 28, 38];
// const result = array.map((element) => element + 2).filter((element) => element > 25);
// console.log(result);

// quesiton 54

// function checkValue(value) {
//   var result = Array.isArray(value);
//   console.log(result);
// }
// checkValue([1, 2, 3]);

// quesiton 55

// function sum(a = 5, b = 7) {
//   return a + b;
// }
// console.log(sum(undefined, 20));

// quesiton 56

// console.log(10 + "5");
// console.log("5" + 10);

// quesiton 57

// console.log(10 - "5");
// console.log("5" - 10);

// quesiton 58

// console.log(printName());
// function printName(){
//     return "Hi my name is Bob"
// }

// quesiton 59

// console.log(printName());
// const printName = () => {
//     return "Hi my name is Bob"
// }

// quesiton 60

// const userDetails = {
//   firstName: "Surbhi",
//   lastName: "Dighe",
//   age: 20,
//   address: {
//     city: "Hyderabad",
//     country: "India",
//   },
// };

// let cloneUserDetails = { ...userDetails };
// //Updating original object
// userDetails.age = 22;
// userDetails.address.city = "Banglore";

// console.log(cloneUserDetails.age);
// console.log(cloneUserDetails.address.city);

// console.log(userDetails.age);
// console.log(userDetails.address.city);

// quesiton 61

// function hello(){
// console.log(name);
// console.log(age);
// var name = "Alice";
// let age = 21;
// }
// hello();

// quesiton 62

// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const str = "1,2,3";

// console.log(arr1 == str);
// console.log(arr1 == arr2);

// quesiton 63

// const a = {x : 1};
// const b = {x : 1};
// console.log(a === b);
// console.log(a.x === b.x)

// quesiton 64

// const arr = [10, -1, 2];
// arr.sort((a, b) => a - b);
// console.log(arr);

// quesiton 65

// const arr = [11, 0, '', false, 2, 1];
// const filtered = arr.filter(Boolean);
// console.log(filtered);

// quesiton 66

// var x = 0;
// var y = 10;
// if(x){
//   console.log(x);
// }
// if(y){
//   console.log(y);
// }

// quesiton 67

// const obj = {
// var1: 1,
// var2: 2
// };
// const { var1, var2 } = obj;
// console.log(var1, var2);

// quesiton 68

// const user = {
// name: "Surbhi dighe",
// country: "India"
// };
// const { name: fullname, country } = user;
// console.log(fullname);
// console.log(name);

// quesiton 69

// const person = {
//   firstName: 'Surbhi',
// };
// const { lastName="dighe" } = person;
// console.log(lastName);

// quesiton 70

// const person = {
//   firstName: 'Surbhi',
// };
// const { firstName="Henry"} = person;
// console.log(firstName);

// quesiton 71

// var a = 10;
// let a = 20;
// console.log(a)

// quesiton 72

// const arr = ["A","B","C","D","E"]
// console.log(Object.keys(arr));

// quesiton 73

// function modify(obj) {
//     obj.name = "Updated";
// }
// let person = { name: "Original" };
// modify(person);
// console.log(person.name);

// function reassign(obj) {
//     obj = { name: "New Object" };
// }
// reassign(person);
// console.log(person.name);

// quesiton 74

// let a={ x:1, y: {alpha:10,beta:20} };
// let b = {...a};

// b.x=101;
// b.y.alpha=1001;

// console.log(a.x);
// console.log(a.y.alpha);

// quesiton 75

// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// console.log('End');

// quesiton 76

// var array = [1, 2, 3, 4, 5];
// delete array[2];
// console.log(array.length);

// quesiton 77

// let x = ["a","b","c"];
// let y = ["a","b","c"];
// let z = y;

// console.log(x == y);
// console.log(z == y);
// console.log(z == x);

// quesiton 78

// let x; 
// console.log(x);
// x = 20;

// console.log(x);
// x = "John";
// console.log(x);

// quesiton 79

// let text;
// switch (1) {
//   case 0:
//     text = "This is zero";
//     break;
//   case 1:
//     text = "This is one";
//   case 2:
//     text = "This is two";
//     break;
//   default:
//     text = "No matches found!";
// }
// console.log(text);

// quesiton 80

// const user = {
//     name: 'Aman Bhoria!',
//     logMessage() {
//         console.log(this.name); // What is logged? 
//     }
// }; 
// setTimeout(user.logMessage(), 1000);


//  quesiton 81

// const user = {
//     name: 'Aman Bhoria!',
//     logMessage() {
//         console.log(this.name); // What is logged? 
//     }
// }; 
// setTimeout(user.logMessage, 1000);

//  quesiton 82

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const finalObj = Object.assign({}, obj1, obj2);
// console.log(finalObj);

//  quesiton 83

// let a = {};
// let b = { key: "abc" };
// let c = { key: "efg" };

// a[b] = 111;
// a[c] = 222;
// console.log(a[b]);

//  quesiton 84

function printName(firstName, lastName) {
    firstName = "Aman";
    lastName = "Bhoria";
    return arguments[0] + " " + arguments[1];
}

let name = printName("John", "Doe");
console.log(name)

