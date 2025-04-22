import { useReducer } from "react";
// WHEN WE USE REDUCERS, THE FIRST THING INVOKED ON ANY USER ACTION IS THE DISPATCH FUNCTION
// DISPATCH FUNCTION TAKES IN THE ACTION TYPE AND THE PAYLOAD
// THE DISPATCH FUNCTION THEN CALLS THE REDUCER FUNCTION WITH THE CURRENT STATE AND THE ACTION


const initialState = {
  input: "",
  tasks: [],
  isEditing: false,
};
function todoReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };

    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, state.input], input: "" };
  }
}

function Main() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        className="border-2 border-blue-200"
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "SET_INPUT",
            payload: e.target.value,
          })
        }
      />
      <button
        className="border-2 bg-blue-400 text-white px-4 py-1"
        onClick={() =>
          dispatch({
            type: "ADD_TASK",
          })
        }
      >
        Add Task
      </button>

      <ul>
        {state.tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </>
  );
}

export default Main;
