import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo2";
import NavBar from "./components/NavBar";
import Click from "./pages/Click";
import StateAndProps from "./pages/StateAndProps";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes className="">
          <Route path="/" element={<Home/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/click" element = {<Click/>} />
          <Route path="/state" element = {<StateAndProps/>} />
          <Route path="/calc" element = {<Calculator/>} />
          <Route path="*" element={<h1 className="text-center text-5xl text-red-500">Page not Found 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
