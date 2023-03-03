import { useState, useEffect } from "react";
import Task from "../components/Todo/Task";
import TodoForm from "../components/Todo/TodoForm";

export default function Todo() {
  const [searchText, setsearchText] = useState("");
  const [tasks, setTasks] = useState([]);

  const [filteredResults, setfilteredResults] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (searchText) {
      const res = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setfilteredResults(res);
    }
  }, [searchText, tasks]);

  const createTodo = (item) => {
    const newTasks = [...tasks, { id: tasks.length + 1, ...item }];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTodo = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const clear = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const [todoToEdit, settodoToEdit] = useState(null);

  const editTodo = (todo) => {
    const newTasks = tasks.map((task) =>
      task.id === todo.id ? { ...task, name: todo.name } : task
    );
    setTasks(newTasks);
    settodoToEdit(null);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div>
      <div className="w-full flex justify-center">
        <input
          className="w-full m-4 max-w-3xl mx-auto px-4 py-2 border border-gray-400"
          type="search"
          value={searchText}
          onChange={(event) => {
            setsearchText(event.target.value);
          }}
          placeholder="Search here"
        />
      </div>
      <TodoForm
        todoToEdit={todoToEdit}
        editTodo={editTodo}
        createTodo={createTodo}
      />
      <div className="max-w-3xl mx-auto my-5">
        {(searchText ? filteredResults : tasks).map((task, index) => {
          return (
            <Task
              editTodo={(todo) => {
                settodoToEdit(todo);
              }}
              deleteTodo={deleteTodo}
              task={task}
              key={index}
            />
          );
        })}
        {!tasks.length && <div>No Tasks found</div>}
        {!filteredResults.length && searchText && (
          <div>Search Tasks not found</div>
        )}
        {tasks.length ? (
          <div className="ml-7">
            <button className="px-4 py-1 bg-red-500 text-white" onClick={clear}>
              Clear
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
