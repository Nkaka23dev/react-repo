import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="space-x-5 max-w-full relative z-50 mx-auto text-center py-3 bg-blue-600 text-white">
      <Link className="text-lg " to="/Hello">
        Hello World
      </Link>
      <Link className="text-lg " to="/userClick">
        Capture User Click
      </Link>
      <Link className="text-lg " to="/click">
        Custom Component
      </Link>
      <Link className="text-lg " to="/state">
        State and Props
      </Link>
      <Link className="text-lg " to="/list">
        Mapping and rendering
      </Link>
      <Link to="list-custom-comp" className="text-lg">
        ListWithCustomComp
      </Link>
      <Link to="form" className="text-lg">
        Forms
      </Link>
      <Link className="text-lg " to="/json">
        Rendering JSON
      </Link>
      <Link className="text-lg " to="/api">
        Working Api
      </Link>
      <Link className="text-lg " to="/calc">
        Calculator
      </Link>
      <Link className="text-lg " to="/todo">
        Todo
      </Link>
      <Link className="text-lg " to="/meme">
        Meme Generator
      </Link>
      <Link className="text-lg " to="/tenzies">
        Tenzies
      </Link>
      <Link className="text-lg " to="/quizz">
        Quizzical
      </Link>
      <Link className="text-lg " to="/notes">
        Notes
      </Link>
    </div>
  );
}
