import React from "react";

export default function Calculator() {
  return (
    <section className="px-4 mt-5">
      <div className="max-w-[26rem] mx-auto bg-neutral-300">
        {/* Place holder will be here */}
        <div className="grid py-4 bg-gray-500">
          <p className="ml-auto px-4 text-4xl text-white">0</p>
        </div>
        {/* numbers will be here */}
        <div className="grid grid-cols-4">
          <div className="flex flex-col items-stretch">
            {["AC", 7, 4, 1].map((value, idx) => {
              return <div key={idx} className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
                {value}
              </div>;
            })}
          </div>
          <div className="flex flex-col items-stretch">
            {["+/-", 8, 5, 2].map((value, idx) => {
              return <div  key={idx}  className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
                {value}
              </div>;
            })}
          </div>
          <div className="flex flex-col items-stretch">
            {["%", 9, 6, 3].map((value, idx) => {
              return <div key={idx} className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
                {value}
              </div>;
            })}
          </div>
          <div className="flex flex-col items-stretch text-white bg-orange-400">
            {["/", "x", "-", "+"].map((value, idx) => {
              return <div key={idx} className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
                {value}
              </div>;
            })}
          </div>
        </div>
        {/* Footer and the stuff will be here */}
        <div className="grid grid-cols-4">
         <div className="col-span-2 border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
            0
         </div>
         <div className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">.</div>
         <div className=" border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">=</div>
        </div>
      </div>
    </section>
  );
}
