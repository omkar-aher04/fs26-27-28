// ASSIGNMENT: reduce, filter, some, every, find, findIndex

// For any function to be a Higher Order Function(HOF), it must fulfill, atleast first two, of the following conditions:
// it should work on an array
// it should take a function as its first argument
// it should return an array

//forEach
//map, reduce, filter, some, every, find, findIndex

// const numbers = [1, 2, 3];

// let output = [];
// for (let i = 0; i < numbers.length; i++) {
//   //   output.push(numbers[i] * numbers[i]);
//   output[i] = numbers[i] * numbers[i];
// }

//foreach

// let output = [];
// numbers.forEach(calculateSquare);

// function calculateSquare(num, index, arr) {
//   console.log(num, index, arr);
//   output.push(num * num);
// }

// console.log(output);

// const numbers = [1, 2, 3];

// const output = numbers.map(calculateSquare);

// console.log(output);
// console.log(numbers);

// function calculateSquare(num) {
//   return num * num;
// }

const numbers = [1, 0, 4, 6, 8, 9];

const blank = [];

const sum = numbers.reduce(reducer);

function reducer(previous, current) {
  return previous + current;
}

// console.log(sum);

document.write(sum);
