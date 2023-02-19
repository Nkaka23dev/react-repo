import React from "react";
import { data } from "../data";

export default function ListMapping() {
  return (
    <section className="h-screen grid">
      <ul className="mx-auto py-14">
        {data.map((value, index) => {
          return <li key={index} className="text-xl text-gray-800">{index+1}. {value}</li>;
        })}
      </ul>
    </section>
  );
}
