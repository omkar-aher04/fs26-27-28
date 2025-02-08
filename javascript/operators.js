//arithmetic operators
// let a = 10;
// let b = 5;
// let c = a - b;
// console.log(c);

// console.log(10 / 5);
// console.log(10 % 5); //0

// console.log(10 % "5"); //type casting (type conversion)

// console.log(1 + 1);

//the number is converted to string, and both the strings are joined together(concatenated). The result is also a string
// console.log(1 + "1"); //11 (oneone)

// console.log(1 - "1"); //0
// console.log(10 * "2"); //20
// console.log(10 / "2"); //5

// console.log(1 + 2 + "Apples"); //3Apples
// console.log("Apples" + 1 + 2); //Apples12

// console.log(2 + "apple" - 3); //NaN
// console.log(2 - "100" + 3); //-95

//INCREMENT & DECREMENT

// ++
// --

// Pre increment & Decrement
// Post increment & Decrement

// let x = 0;
// x++;
// ++x;
// --x;
// x--;
// console.log(x); //0

// let x = 1;
// console.log(x++); //1
// console.log(--x); //1
// console.log(x--); //1
// console.log(x++); //0
// console.log(++x); //2

// let a = 10;
// let b = a++;
// let c = ++b;
// let d = a + b + c;
// console.log(d--);

//QUESTIONS

// let a = 0; //1
// let b = a++ + 1; //1
// let c = a + b; //2
// let d = a + b + c; //4
// console.log(d - 2); //2

//   const a = 10 > 5; //true
//   const b = 10 < 5; // false
//   console.log(a + b); //??? 1

// let x = 101; //102
// let y = x++ + 1; //102
// let z = ++x + ++y; //206
// let a = x + y + z;
// console.log(a); //412 410

//a++ means a = a + 1
//++a means a = a + 1

// let a = 52; //54
// let b = ++a + 10; //64
// let c = ++a - b++ + 10; //54 - 63 + 10 = 1
// let d = a + b + c - 10;
// console.log(d + 10); //119

// let x = 0;
// console.log(x++); //0
// console.log(--x); //0
// console.log(++x + 2); //3
// let y = ++x - 1;
// console.log(y++ - 1); //0
// console.log(y); //2
