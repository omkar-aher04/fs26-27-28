import "./Todo.css";
import Form from "./Forms.jsx";
import Todos from "./Todos.jsx";
import { useState } from "react";

function Main() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // pushing input into the tasks array
    setTasks([...tasks, input]); //tasks.push(input)

    //RESETTING THE INPUT
    setInput("");
  }

  return (
    <>
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <Todos tasks={tasks} />
    </>
  );
}

export default Main;
