// function sum(a, b) {
//   console.log(a + b);
// }

// const arr = [10, 20];
// sum(...arr);

const a = [10, 20, 30];
const b = [40, 50, 60];
// console.log([...a, ...b].length); //6

// console.log([...a, b].length); // [10,20,30,[40,50,60]] 4

const c = [...a, b]; //[10,20,30,[40,50,60]]
console.log(c[0] + c[c.length - 1].length); //10 + 3 = 13

//spreads can be applied to objects as well
