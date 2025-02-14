// function sum(a, b) {
//   console.log(a + b);
// }

// const arr = [10, 20];
// sum(...arr);

// const a = [10, 20, 30];
// const b = [40, 50, 60];
// console.log([...a, ...b].length); //6

// console.log([...a, b].length); // [10,20,30,[40,50,60]] 4

// const c = [...a, b]; //[10,20,30,[40,50,60]]
// console.log(c[0] + c[c.length - 1].length); //10 + 3 = 13

//spreads can be applied to objects as well

// const a = [2, 3, 4, 5];
// const b = [6, 7, 8, 9];

// const c = [...a, b];

// const d = c[0] + c[3] + c[4][3];
// console.log(d);

// const a = [2, 3, 4];
// const b = a.map((n) => 2 * n);
// const c = a.map((n) => 3 * n);

// console.log(a[0] + b[1] + c[2]);

// const a = [2, 3, 4, 5];
// const b = [6, 7, 8, 9];

// const c = [...a, b];
// console.log(c[c.length - 2] + c[c.length - 3]++);
// console.log(c[2] + c[0]);

// const a = [1, 2, 3];
// let b = a[0];
// let c = a[1];
// let d = a[2];

// console.log(b, c, d);

// const a = [1, 2, 3];

// let [b, c, d] = a;

// console.log(b, c, d);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7]; //The three dots here are known as REST operator / REST syntax

// The REST operator has to be with the last variable

// const TwoD = [a, b, c, d];
// console.log(TwoD);

// let [[a, b], c, ...d] = [[1, 2], 3, 4, 5, 6, 7];

// console.log(a, b, c, d);

// const a = { name: "Gaurav", city: "Supaul" };
// const b = { age: 22 };

// const c = { a, b };

// console.log("WITHOUT SPREAD:");
// console.log(c);
// console.log(Object.keys(c));

// const c = { ...a, ...b };

// console.log("WITH SPREAD:");
// console.log(c);
// console.log(Object.keys(c));

// let arr = [1,2,3];
// console.log(...arr);
// let[...c] = [1,2,3];

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr1.push(arr2); //[1,2,3,4,5,6]
// arr1.splice(2, 0, 7, 8); //[1,2,7,8,3,4,5,6]
// arr1.shift(); //[2,7,8,3,4,5,6]
// let result = arr1.pop() + arr1[arr1.length - 1]; //6 + 5 = 11
// console.log(result); //11
// console.log(arr1); //2,7,8,3,4,5

// const obj = {a: 1, b: 2, c: 3};
// Object.seal(obj);
// obj.d = 4;
// obj.b = 5;
// delete obj.a;
// console.log(Object.keys(obj).length); // 3
// console.log(obj.b); // 5

// const person = { name: "John", age: 30 };
// Object.freeze(person);
// person.job = "Developer";
// person.age = 31;
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// const obj1 = {a: 1, b: 2};
// const obj2 = {b: 3, c: 4};
// const merged = {...obj1, ...obj2}; // {a:1, b:3, c:4}
// console.log(Object.values(merged).reduce((sum, val) => sum + val, 0));

// const obj = {a: 1, b: 2, c: 3};
// for (let [key, value] of Object.entries(obj)) {
//     if (value % 2 === 0) {
//         delete obj[key];
//     }
// }
// console.log(Object.keys(obj).length);

const person = { name: "Vikas", girlfriend: null };

for (let i in person) {
  console.log(i + ":" + person[i]);
}

for (let i of person) {
  console.log(i + ":" + person[i]);
}
