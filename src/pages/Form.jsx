import React, { useState } from 'react'

export default function Form() {
const [firstName, setFirstName] = useState("");
const [lastName, setlastName] = useState("");

const handleForm = () => {
    alert(`Hello ${firstName} ${lastName} !`)
}
  return (
   <section className='h-screen grid'>
    <form action="#" className='m-auto max-w-sm space-y-5'>
        <input onChange={(e) => setFirstName(e.target.value)}   className='w-full placeholder:text-gray-500 placeholder:text-lg px-3 py-3 border bordr-gray-800 rounded-md' type="text" placeholder='First name '   />
        <input onChange={(e) => setlastName(e.target.value)}  className='placeholder:text-gray-500 placeholder:text-lg w-full px-3 py-3 border bordr-gray-800' type="text" placeholder='Last name' />
        <button type='submit' className='bg-red-600 hover:bg-red-500 text-lg font-semibold rounded-xl text-white py-4 text-center w-full' onClick={handleForm} >Greet Me</button>
    </form>
   </section>
  )
}
