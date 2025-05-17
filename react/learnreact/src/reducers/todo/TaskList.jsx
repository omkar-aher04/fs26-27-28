import { MdDelete, MdEdit } from "react-icons/md";

function TaskList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
  return (
    <ul className="my-4 space-y-2">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className={`flex justify-between items-center bg-gray-100 p-2 rounded shadow-md ${
              task.completed ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                className="cursor-pointer"
              />
              <span
                className={`text-gray-800 font-medium ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <div className="flex space-x-2">
              <MdDelete
                className={`text-red-500 cursor-pointer hover:text-red-700 ${
                  task.completed ? "pointer-events-none" : ""
                }`}
                onClick={() => onDeleteTask(task.id)}
              />
              <MdEdit
                className={`text-blue-500 cursor-pointer hover:text-blue-700 ${
                  task.completed ? "pointer-events-none" : ""
                }`}
                onClick={() => onEditTask(task)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
