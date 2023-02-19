import React from "react";
import ApiComp from "../components/ApiComp";
import JSONComp from "../components/JSONComp";
import { Jsondata } from "../data";

export default function RenderJSON() {
  return (
   <JSONComp data={Jsondata}/>
  );
}
