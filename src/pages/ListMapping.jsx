import { data } from "../data";

const  ListMapping = () => {
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
export default ListMapping