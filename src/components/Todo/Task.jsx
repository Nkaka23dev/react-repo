import React, { useState } from 'react'; // Import useState to manage state

import {FaRegEdit} from "react-icons/fa";
import {MdDeleteSweep} from "react-icons/md";

export default function Task({ task, deleteTodo, editTodo }) {
  const { createdAt, updatedAt, status, id, name } = task;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="grid grid-cols-6 gap-3 justify-center border-gray-300 rounded-md text-lg p-4 m-3">
      <div>
        <input type="checkbox" onChange={handleCheckboxChange} />
      </div>
      <div>{id}</div>
      <div className={isChecked ? 'line-through' : ''}>{name}</div>
      <div>{isChecked?'Completed':status}</div>
      <div className='flex gap-8 ml-20'>
        <button className='bg-gray-200 rounded-full p-4' onClick={() => editTodo(task)} href="#">
          <FaRegEdit className='text-2xl text-green-500 '/>
        </button>
        <button className='bg-gray-200 rounded-full p-4' onClick={() => deleteTodo(id)} href="#">
          <MdDeleteSweep className='text-3xl text-red-500'/>
        </button>
      </div>
    </div>
  );
}
