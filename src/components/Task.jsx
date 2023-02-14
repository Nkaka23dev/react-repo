import React from 'react'
import edit from "../assets/svgs/edit.svg";
import remo from "../assets/svgs/remo.svg";

export default function Task(props) {
  return (
    <div className="px-5 flex justify-between">
        <h1 className="text-gray-700 text-sm">{props.taskInput}</h1>
        <div className="flex gap-2">
          <img  className="cursor-pointer" src={edit} alt="" />
          <img className="cursor-pointer"  src={remo} alt="" />
        </div>
      </div>
  )
}
