import React from 'react'

export default function ListRenderCustomComp() {
  const data = [{
    name: "dog",
    icon: "🐶",
  },
  {
    name: "cat",
    icon: "🐱",
  },
  {
    name: "chicken",
    icon: "🐔",
  },
  {
    name: "cow",
    icon: "🐮",
  },
  {
    name: "sheep",
    icon: "🛌",
  },
  {
    name: "horse",
    icon: "🏇",
  },]
  return (
    <section className="h-screen grid">
    <ul className="mx-auto py-14">
      {data.map((value, index) => {
        return <li key={index} className="text-xl py-4 border border-gray-300 px-4 text-gray-800">{value.icon} {value.name}</li>;
      })}
    </ul>
  </section>
  )
}
