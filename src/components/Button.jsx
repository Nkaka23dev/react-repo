import React from "react";

export default function Button({text, message}) {
  const handleClick = () => {
    alert(`You clicked on ${message}`)
  }
  return (
    <button
      onClick={handleClick}
      className="px-8 rounded-sm py-3 m-auto bg-blue-500 text-white font-semibold"
    >
      {text}
    </button>
  );
}
