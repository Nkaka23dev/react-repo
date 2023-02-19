import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo2";
import NavBar from "./components/NavBar";
import Click from "./pages/ButtonCustomComponent";
import StateAndProps from "./pages/StateAndProps";
import Calculator from "./pages/Calculator";
import MemesGenerator from "./pages/MemesGenerator";
import Tenzies from "./pages/Tenzies";
import HelloWord from "./pages/HelloWord";
import ButtonCustomComponent from "./pages/ButtonCustomComponent";
import CapUserClick from "./pages/CapUserClick";
import ListMapping from "./pages/ListMapping";
import ListMappingWithComp from "./pages/ListMappingWithComp";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes className="">
          <Route path="/" element={<Home/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/userClick" element = {<CapUserClick/>} />
          <Route path="/click" element = {<ButtonCustomComponent/>} />
          <Route path="/state" element = {<StateAndProps/>} />
          <Route path="/list" element = {<ListMapping/>}/>
          <Route path="/list-custom-comp" element = {<ListMappingWithComp/>} />
          <Route path="/calc" element = {<Calculator/>} />
          <Route path="/meme" element = {<MemesGenerator/>}/>
          <Route path="/tenzies" element = {<Tenzies/>}/>
          <Route path="/hello" element = {<HelloWord/>}/>
          <Route path="*" element={<h1 className="text-center text-5xl text-red-500">Page not Found 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
