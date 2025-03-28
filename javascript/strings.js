//ASSIGNMENT:  toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd(), padStrart(), padEnd()

// const str = "Javascript is awesome";

// console.log(str.length); //21

// console.log(str.indexOf("a")); //

// console.log(str.lastIndexOf("a"));

// console.log(str.indexOf("is"));

// console.log(str.indexOf("i", 8))
// console.log(str.indexOf("i", 20)); //-1
// console.log(str.indexOf("z")); //-1

// console.log(str.includes("is", 12));

//slice, substring, substr: to extract a smaller string from a bigger string

// const str = "Javascript is awesome";
// console.log(str.slice(1, 7));

// console.log(str.slice(9, 16));

// console.log(str.slice(9)); //will return rest of the string from that position

// console.log(str.slice(-10, -3));

// console.log(str.slice(-10, -15));

// console.log(str.slice(0, -1));

// console.log(str.slice(-10, -15));

// console.log(str.slice(-1, 0));

// const str = "Javascript is awesome";
// console.log(str.substring(1,6));

// console.log(str.substring(10));

// console.log(str.substr(4, 12));
// console.log(str.substr(12, 4));

// const str = "Documentation is hard";

// console.log(str.replace("hard", "easy"));

// console.log(str);

// console.log(str.replaceAll("a", "A"));

// console.log(str.replace(/a/g, "A"));

// const str = "Documentation is hard";

// console.log(str.split("is"));
// console.log(str.split(""));

// console.log(str.split("is").length);

// const str = "No break  today";

// const output = str.split(/\s+/);

// console.log(output);



let str = "JavaScript";
let output = str.split('').reverse().join('').slice(0, -3).toUpperCase();
console.log(output);







let x = 0;
function fun() {
  if (x === 0) {
    let x = 1;
    console.log(x); // What is logged?
  }
  console.log(x); // What is logged?
}
fun();







let str = "The quick brown fox jumps over the lazy dog";
let result = str.replace(/o/g, "0").split(" ").slice(4, 7).join("-");
console.log(result);







let text = "JavaScript is awesome. JavaScript is fun.";
let result = text.replaceAll("JavaScript", "JS").indexOf("awesome") - text.lastIndexOf("is");
console.log(result);







let phrase = "Hello, World!";
let result = phrase.slice(-6, -1).split("").reverse().join("+");
console.log(result);







let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.pop();
let result = arr.shift() + arr.splice(2, 2)[0];
console.log(result);
console.log(arr);







let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
fruits.unshift("apricot");
fruits.splice(2, 1, "blueberry", "elderberry");
console.log(fruits.length);
console.log(fruits[2]);



let queue = ["Tom", "Jack", "Sarah"];
queue.push("Emma");
queue.shift();
queue.unshift("Mike");
queue.splice(1, 1, "Anna", "Chris");
console.log(queue.length);
console.log(queue[2]);