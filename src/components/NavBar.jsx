import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="space-x-5 max-w-full mx-auto text-center py-3 bg-blue-600 text-white">
      <Link className="text-xl " to="/click">
        Click Button
      </Link>
      <Link className="text-xl " to="/state">
        State and Props
      </Link>
      <Link className="text-xl " to="/calc">
        Calculator
      </Link>
      <Link className="text-xl " to="/todo">
        Todo
      </Link>
      <Link className="text-xl " to="/">
        Home
      </Link>
      <Link className="text-xl " to="/todo">
        Todo
      </Link>
      <Link className="text-xl " to="/">
        Home
      </Link>
      <Link className="text-xl " to="/todo">
        Todo
      </Link>
      <Link className="text-xl " to="/todo">
        Todo
      </Link>
      <Link className="text-xl " to="/">
        Home
      </Link>
      <Link className="text-xl " to="/todo">
        Todo
      </Link>
      <Link className="text-xl " to="/">
        Home
      </Link>
      <Link className="text-xl " to="/todo">
        Todo
      </Link>
    </div>
  );
}
