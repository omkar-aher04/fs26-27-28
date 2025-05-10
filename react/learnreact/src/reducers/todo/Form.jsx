function Form({ state, dispatch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TASK" });
      }}
      className="flex flex-col items-center space-y-4"
    >
      <input
        type="text"
        placeholder="Enter your task"
        className="border-2 border-blue-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "SET_INPUT",
            payload: e.target.value,
          })
        }
        required
      />
      <button className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
        {state.isEditing ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
}

export default Form;
