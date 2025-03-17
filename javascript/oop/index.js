// A class is a blueprint for creating objects. It defines properties (variables) and methods (functions) that the objects will have.

class Person {
  constructor(n, a, sm) {
    this.name = n;
    this.age = a;
    this.address = { city: "Jaipur", state: "Rajasthan" };
    this.successManager = sm;
    // console.log(n, a);
  }
  greet() {
    console.log("I am a class method(function)");
  }
}

const p1 = new Person("Anushka", 21, "palak");
const p2 = new Person("Jyoti", 22, "shrine");
const p3 = new Person("Vikas", 20, "harshita");

console.log(p2.name);
p2.name = "Jyotirmay";

console.log(p1.successManager);
console.log(p2.successManager);
console.log(p3.successManager);
console.log(p4.successManager);
// console.log(p2.name);

// console.log(p1.age);
// console.log(p2.age);
// console.log(p3.age);

// p1.greet();
// greet();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("Vikas", 22);
// console.log(person1); // { name: "Vikas", age: 22 }



