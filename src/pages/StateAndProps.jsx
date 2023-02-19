import React, { useState } from 'react'

export default function StateAndProps() {
  const [counter, setCounter] = useState(0)
  const increaseCounter = () => {
    setCounter(prev => prev+=1)
  }
  return (
   <section className='h-screen grid'>
    <div className='text-center m-auto'>
    <h1 className='text-xl'>Button has been cliked {counter} times</h1>
    <button onClick={increaseCounter} className='px-10 py-3 bg-blue-400 mt-10 text-white'>Click the button</button>
   </div>
   </section>
  )
}
