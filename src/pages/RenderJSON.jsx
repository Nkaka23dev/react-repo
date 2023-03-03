import JsonList from "../components/JsonList";
import { Jsondata } from "../data";

export default function RenderJSON() {
  return (
   <JsonList data={Jsondata}/>
  );
}
