import React from 'react'

export default function Click() {
  return (
    <div className="flex">
     <button className="px-8 rounded-sm py-3 m-auto bg-blue-400 text-white font-semibol
   " onClick={() => alert("You clicked Button 1")} >Click me!</button>
    <button className="px-8 rounded-sm py-3 m-auto bg-blue-400 text-white font-semibol
   " onClick={() => alert("You clicked Button 2")} >Click me!</button>
    <button className="px-8 rounded-sm py-3 m-auto bg-blue-400 text-white font-semibol
   " onClick={() => alert("You clicked Button 3")} >Click me!</button>
 </div>
  )
}
