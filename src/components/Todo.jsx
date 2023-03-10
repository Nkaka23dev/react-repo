import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function Todo() {
  const [taskInput, settaskInput] = useState("");
  const [taskList, setTaskList] = useState(null);

  const getInput = (event) => {
    settaskInput(event.target.value);
  };
  const deleteUser = (id) => {
    setTaskList(taskList.filter((value) => value.id !== id));
    console.log(taskList);
  };
  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      name: taskInput,
    };
    setTaskList([...taskList, task]);
    settaskInput("");
  };
  const editTask = (id, value) => {
    const newTast = taskList.map((task) =>
      task.id === id ? { ...task, name: value } : task
    );
    setTaskList(newTast);
    settaskInput("");
    settodoToEdit(null);
  };
  const [todoToEdit, settodoToEdit] = useState();

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTaskList(JSON.parse(todos) || []);
    }
  }, []);

  useEffect(() => {
    if (taskList) {
      localStorage.setItem("todos", JSON.stringify(taskList));
    }
  }, [taskList]);

  useEffect(() => {
    if (todoToEdit) {
      settaskInput(todoToEdit.name);
    }
  }, [todoToEdit]);

  const handleEdit = (todo) => {
    settodoToEdit(todo);
  };
  return (
    <section className="px-3 mt-40">
      <div className="max-w-[36] w-[36rem] mx-auto bg-white shadow-2xl space-y-10 grid py-16 px-8">
        <h1 className="mx-auto text-2xl tracking-wide text-gray-600 font-bold">
          Grocery Bud
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (todoToEdit) {
              editTask(todoToEdit.id, taskInput);
            } else {
              addTask();
            }
          }}
          className="relative"
        >
          <input
            className="w-full bg-[#f1f5f8] px-5 py-1 rounded-lg placeholder-gray-400"
            type="text"
            value={taskInput}
            onChange={getInput}
            placeholder="e.g. eggs"
          />
          <button className="bg-[#a5d5f8] duration-300 font-semibold hover:text-white hover:bg-[#48a8ec] px-4 py-1 rounded-r-lg absolute right-0">
            submit
          </button>
        </form>
        {taskList &&
          taskList.map((value, index) => {
            return (
              <Task
                edit={handleEdit}
                key={index}
                id={value.id}
                deleteUser={deleteUser}
                taskInput={value.name}
                todo={value}
              />
            );
          })}

        {!taskList?.length && <div>No todos found</div>}
      </div>
    </section>
  );
}
