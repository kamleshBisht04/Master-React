
console.log("start");

setTimeout(() => {
  console.log("set time out function");
}, 4000);

Promise.resolve.then(() => console.log("Promiss resolve"));

console.log("End");
