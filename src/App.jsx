import "./App.css";
import edit from "./assets/svgs/edit.svg";
import remo from "./assets/svgs/remo.svg"

function App() {
  return (
    <section className="px-3 mt-40">
      <div className="max-w-[36] w-[36rem] mx-auto bg-white shadow-2xl space-y-10 grid py-16 px-8">
        <h1
          className="mx-auto text-3xl tracking-wide text-gray-600 font-bold">
          Grocery Bud
        </h1>
        <div className="relative">
          <input
            className="w-full bg-[#f1f5f8] px-5 py-1 rounded-lg placeholder-gray-400"
            type="text"
            placeholder="e.g. eggs"
          />
          <button className="bg-[#a5d5f8] duration-300 font-semibold hover:text-white hover:bg-[#48a8ec] px-4 py-1 rounded-r-lg absolute right-0">
            submit
          </button>
        </div>
        <div className="px-5 flex justify-between">
          <h1 className="text-gray-700 text-lg">Studying</h1>
          <div className="flex gap-2">
            <img  className="cursor-pointer" src={edit} alt="" />
            <img className="cursor-pointer"  src={remo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
