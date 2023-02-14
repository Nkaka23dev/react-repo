import React, { useState } from 'react'
import Task from './Task';

export default function Todo() {
const [taskInput, settaskInput] = useState('');
const [taskList, setTaskList] = useState([]);

const getInput = (event) => {
    settaskInput(event.target.value)
}
const addTask = () => {
    setTaskList([...taskList, taskInput])
}
  return (
    <section className="px-3 mt-40">
    <div className="max-w-[36] w-[36rem] mx-auto bg-white shadow-2xl space-y-10 grid py-16 px-8">
      <h1
        className="mx-auto text-2xl tracking-wide text-gray-600 font-bold">
        Grocery Bud
      </h1>
      <div className="relative">
        <input
          className="w-full bg-[#f1f5f8] px-5 py-1 rounded-lg placeholder-gray-400"
          type="text" onChange={getInput}
          placeholder="e.g. eggs"
        />
        <button onClick={addTask} className="bg-[#a5d5f8] duration-300 font-semibold hover:text-white hover:bg-[#48a8ec] px-4 py-1 rounded-r-lg absolute right-0">
          submit
        </button>
      </div>
     {taskList.map((value, index) => {
         return  <Task key={index} taskInput={value}/>
     })}
    </div>
  </section>
  )
}
