const data = [
  { id: 1, name: "Kiran", age: 22 },
  { id: 2, name: "Abhishek", age: 24 },
  { id: 3, name: "Shikhar", age: 25 },
  { id: 4, name: "Rishabh", age: 20 },
  { id: 5, name: "Aditya", age: 19 },
];

// WE CANNOT USE for, while, do..while, for..of, for..in, foreach, inside the return statement
// WE USE HOFs
// WHENEVER WE ARE CREATING HTML ELEMENTS WITH THE HELP OF A LOOP,

function Lists() {
  return (
    <>
      <ul>
        {data.map((obj) => {
          return (
            <li key={obj.id}>
              {obj.name} {obj.age}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Lists;
