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


