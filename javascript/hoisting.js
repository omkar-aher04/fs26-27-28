// HOISTING: the procedure by which JS takes variable declaration (var) & function defintions up top to the starting of the block is known as hoisting

//TEMPORAL DEAD ZONE

// console.log(a); //undefined
// var a = 10;

// sum(1, 2);

// function sum(a, b) {
//   console.log(a + b);
// }

// console.log(a); //undef
// var a = 1;
// function x() {
//   console.log(a); //1
//   var b = 2;
//   var a = 10;
// }
// x();
// console.log(a); //10

// var a = 10;

// function x() {
//   a = 20;
//   console.log(a); //20
// }
// x();
// console.log(a); //20

// console.log(x);
// var x = 5;
// function innerScope() {
//     var x = 10;
//     console.log(x);
// }
// innerScope();
// console.log(x);

function foo() {
  console.log(a);
  var a = 1;
  function a() {}
  console.log(a);
}
foo();
