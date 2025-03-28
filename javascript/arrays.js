//ASSIGNMENT: reverse, flat, concat, join, toString


// Arrays were homogenous
// Arrays are heterogenous

// let names = new Array(); //ARRAY CONSTRUCTOR

// let names = ["Channu", "Vikas", true, 100]; //ARRAY LITERAL

// let names = [];

// names[0] = "Channu";
// names[1] = "Vikas";
// names[2] = "Anushka";

// let numbers = [];

// numbers[0] = 1;
// numbers[2] = 5;
// numbers[7] = 10;

// console.log(numbers);
// document.write(numbers[1]);

//push: inserts values at the end,
//unshift: inserts values at the beginning
//pop: removes 1 value from the end,
//shift: removes 1 value from the beginning,

// const numbers = [1, 2];
// numbers.push(3, 4);
// numbers.unshift(-1, 0);

// numbers.pop();
// numbers.shift();

// numbers.push("Rajan", "Sharique");

// numbers.push(["Anushka", "Pooja", 100]);

// console.log(numbers[6][2].length);

// const numbers = [1, 5, 11, 42];

// console.log(numbers.slice(3));

// numbers.splice(2, 1, 43);

// numbers.splice(0, 0, 10);

// numbers.splice(1, 4, 44, 45);

// numbers.splice(1, 2, 11, 5);

// numbers.splice(1, 1); //[1,11,42]
// numbers.splice(2, 0, 5); //[1,11,5,42]

// console.log(numbers);

const names = ["Hema", "Rekha", "Jaya", "Sushma"];

const numbers = [23, 22, 17, 99, 11, 10, 2];

// const compareFn = function (a, b) {
//   return b - a;
// };

// console.log(numbers.sort(compareFn));

console.log(
  numbers.sort((a, b) => {
    return a - b;
  })
);
