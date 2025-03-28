//collections of key & value pairs

// const person = new Object();

// const person = {
//   name: "Sharique",
//   age: 22,
//   isMarried: false,
//   phone: [1234512345, 1234567890]
// };

// const person = {
//   name: "Vikas",
//   age: 22,
//   address: {
//     city: "Madhubani",
//     state: "Bihar",
//   },
// };

// console.log(person[0]) //undef

//To access information from an object
// we have the dot notation & the array notation

// console.log(person.name);
// console.log(person.age);

// console.log(person["name"]);
// console.log(person["age"]);

// console.log(person.address.city)
// console.log(person.address.state)

// console.log(person["address"]["city"])

// const person = {
//   name: "Vikas",
//   age: 22,
//   address: {
//     city: "Madhubani",
//     state: "Bihar",
//   },
// };

// const property = "age";
// console.log(person[property]); //22

// console.log(person);

// document.write(person); //the object will not be printed

// const person = {
//   name: "Vikas",
//   age: 22,
//   address: {
//     city: "Jaipur",
//     state: "Rajasthan",
//   },
// };

// for (let i in person) {
//   if (typeof person[i] === "object") {
//     for (let j in person[i]) {
//       document.write(j + " : " + person[i][j] + "<br>");
//     }
//   } else {
//     console.log(i);
//     document.write(i + " : " + person[i] + "<br>");
//   }
// }

//Object.keys, Object.values, object.entries

//Object.seal, Object.freeze

//Object.assign

//Object.hasOwn

// const obj = {
//   name: "Anushka",
//   age: 20,
//   address: "Rajgarh,MP",
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// for (let i in obj) {
//   document.write(i + " : " + obj[i] + "<br>");
// }

// HOW TO PRINT THE OBJECT IN REVERSE ORDER OF KEYS????

// const entries = Object.entries(obj);

// const revEntries = entries.reverse();

// console.log(revEntries);

// // document.write(revEntries)

// revEntries.map((entry) => {
//   document.write(entry[0] + " : " + entry[1] + "<br>");
// });

// const obj = {
//   name: "Vikas",
//   age: 23,
//   Address: "Madhubani",
// };
// let keysval = Object.keys(obj).reverse();
// for (let i = 0; i < keysval.length; i++) {
//   console.log(i + " : " + obj[i]);
// }

const noBreak = {
  name: "javascript",
  usp: "confusing",
};

// Object.seal(noBreak);

Object.freeze(noBreak);

//adding a new key-value pair to the object
noBreak["version"] = "es6";

//modifying an existing value
noBreak["usp"] = "interesting";

console.log(noBreak);

// In seal, you can only modify a pair, but cannot add a new pair.
// In freeze, you can neither add or modify a key value pair.

//ASSIGNMENT: Object.hasOwn, Object.hasOwnProperty, Object.assign

// Spread, Rest, Destructuring, Deep copy, Shallow copy
