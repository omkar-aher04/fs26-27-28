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

const str = "No break  today";

const output = str.split(/\s+/);

console.log(output);
