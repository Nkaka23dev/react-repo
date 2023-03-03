import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";

export default function TodoForm({ createTodo, todoToEdit, editTodo }) {
  const [value, setvalue] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  useEffect(() => {
    if (todoToEdit) {
      setvalue(todoToEdit.name);
    }
  }, [todoToEdit]);

  const createTodoWithLocalStorage = (todo) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    createTodo(todo);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      if (todoToEdit) {
        editTodo({
          id: todoToEdit.id,
          name: value,
        });
      } else {
        const newTodo = {
          createdAt: new Date(),
          updatedAt: new Date(),
          status: "Pending",
          name: value,
        };
        createTodoWithLocalStorage(newTodo);
      }
      setsuccessMessage("Task created succsefully");
      setvalue("");
    } else {
      seterrorMessage("Please enter a task");
    }
  };
  
  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        seterrorMessage(null);
      }, 3000);
    }
    if (successMessage) {
      setTimeout(() => {
        setsuccessMessage(null);
      }, 3000);
    }
  }, [errorMessage, successMessage]);

  return (
    <div>
      {errorMessage && (
        <div className="px-4 flex justify-between items-center max-w-3xl mx-auto mt-4 py-1 bg-red-100 rounded-md text-red-500">
          {errorMessage}
          <a className="cursor-pointer" onClick={() => seterrorMessage(null)}>
            X
          </a>
        </div>
      )}

      {successMessage && (
        <div className="px-4 flex justify-between items-center max-w-3xl mx-auto mt-4 py-1 bg-green-100 rounded-md text-green-500">
          {successMessage}
          <a className="cursor-pointer" onClick={() => setsuccessMessage(null)}>
            X
          </a>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className=" flex gap-4 border-gray-200 mt-4 px-3 py-2 max-w-3xl mx-auto relative"
      >
        <input
          className="w-full py-3 shadow-2xl px-7 rounded-full"
          placeholder="Add todo"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          type="text"
        />
        <button className="bg-green-500 rounded-full text-white absolute right-8 bottom-5">
          <IoIosAdd className="text-2xl font-bold" />
        </button>
      </form>
    </div>
  );
}
