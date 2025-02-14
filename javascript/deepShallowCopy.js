// SHALLOW COPY: when both copies share valuews from the same reference in the memory (dono ka memory address same hoga)
// DEEP COPY: when both copies have their own values in the memory (dono ka memory address different hoga)

// const p1 = { name: "Manish", city: "Delhi" };

// const p2 = p1; // Shallow Copy

// const p3 = { ...p1 }; // Deep Copy

// // console.log(p2);

// console.log(p3);

// const p2 = p1;
// p2.city = "Kolkata";

// console.log(p2);
// console.log(p1);

// const p2 = { ...p1 };
// p2.city = "Kolkata";

// console.log(p1);

const p1 = {
  name: "Ayush Sir",
  city: "Prayagraj",
  work: {
    city: "Bangaluru",
    state: "Karnataka",
  },
};

const p2 = p1; //SHALLOW
const p3 = { ...p1 }; //DEEP

//CHANGING THE NON NESTED PROPERTIES
// p1.city = "Lucknow";

// console.log(p2.city); //Lucknow
// console.log(p3.city); //Prayagraj

//CHANGING THE NESTED PROPERTIES
p1.work.city = "Pune";
console.log(p2.work.city); //P B
console.log(p3.work.city); //B P

//NESTED PROPERTIES ARE ALWAYS SHALLOW COPIED

// IF YOU WANT NESTED PROPERTIES TO BE DEEP COPIED AS WELL, you must use STRUCTUREDCLONE()


//ASSIGNMENT: StructuredClone, JSON.stringify(JSON.parse())