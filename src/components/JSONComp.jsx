import React from "react";
export default function JSONComp({data}) {
  return (
    <section className="h-screen grid">
      <div className="max-w-5xl grid grid-cols-2 gap-5 w-full m-auto p-8 bg-[#E1F7DD]">
        {data.map((value) => {
          return (
            <div key={value.id} className="shadow-xl bg-white p-16">
          <h1 className="text-2xl text-center font-bold max-w-xs">
            {value.setup}
          </h1>
          <p className="mt-2 text-center">
            {value.punchline}
          </p>
        </div>
          )
        })}
      </div>
    </section>
  );
}
