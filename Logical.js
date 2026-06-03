

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("timeout: " , i), 1000);
// }

// console.log("after loop :- ", i)

// for (var i = 0; i < 3; i++) {
//   ((x) => {
//     setTimeout(() => console.log("Executed x : ", x), 1000);
//   })(i);
// }


// const user = {
//   name: "Ritik",
//   greet() {
//     console.log(this.name);
//   }
// };
// const sayHello = user.greet;
// sayHello();
// user.greet();  // output : undefined, Ritik. The value of "this" depends on how the function is called, not where it it defined.



console.log(a);
var a= 10

console.log(a);

console.log(typeof NaN);  //Number it's datatype is still number
console.log(NaN === NaN);  // output false : According to the IEEE 754 floating-point standard, NaN is never equal to anything, including itself.