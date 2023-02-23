import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="space-x-5 max-w-full relative z-50 mx-auto text-center py-3 bg-blue-600 text-white">
      <Link className="text-lg hover:text-gray-200" to="/Hello">
        Hello World
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/userClick">
        Capture User Click
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/click">
        Custom Component
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/state">
        State and Props
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/list">
        Mapping and rendering
      </Link>
      <Link to="list-custom-comp" className="text-lg"hover:text-gray-200>
        ListWithCustomComp
      </Link>
      <Link to="form" className="text-lg"hover:text-gray-200>
        Forms
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/json">
        Rendering JSON
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/api">
        Working Api
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/calc">
        Calculator
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/todo">
        Todo
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/meme">
        Meme Generator
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/tenzies">
        Tenzies
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/quizz">
        Quizzical
      </Link>
      <Link className="text-lg hover:text-gray-200" to="/notes">
        Notes
      </Link>
    </div>
  );
}
