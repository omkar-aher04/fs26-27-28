//Controlled component: when react dictates the value of a component & react dictactes how that value is modified

function Forms({ input, setInput, handleSubmit }) {
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default Forms;
