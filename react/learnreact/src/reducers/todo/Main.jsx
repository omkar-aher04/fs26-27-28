import { useReducer } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

// WHEN WE USE REDUCERS, THE FIRST THING INVOKED ON ANY USER ACTION IS THE DISPATCH FUNCTION
// DISPATCH FUNCTION TAKES IN THE ACTION TYPE AND THE PAYLOAD
// THE DISPATCH FUNCTION THEN CALLS THE REDUCER FUNCTION WITH THE CURRENT STATE AND THE ACTION

const initialState = {
  input: "",
  tasks: [],
  isEditing: false,
  editId: null,
};
function todoReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };

    case "ADD_TASK":
      return state.isEditing
        ? {
            ...state,
            tasks: state.tasks.map((task) =>
              task.id === state.editId ? { ...task, text: state.input } : task
            ),
            //RESETTING
            isEditing: false,
            editId: null,
            input: "",
          }
        : {
            ...state,
            tasks: [
              ...state.tasks,
              { id: Date.now(), text: state.input, completed: false },
            ],
            input: "",
          };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    case "EDIT_TASK":
      return {
        ...state,
        isEditing: true,
        input: action.payload.text,
        editId: action.payload.id,
      };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };

    default:
      return state;
  }
}

function Main() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Todo App</h1>
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <Form state={state} dispatch={dispatch} />
        <TaskList state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Main;
