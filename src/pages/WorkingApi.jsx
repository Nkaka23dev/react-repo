import { useEffect, useState } from "react";
import ApiComp from "../components/ApiComp";

const WorkingApi = ()  => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => getData(), []);

  return (
    <div className="">
      <button
        className="bg-red-600 rounded-md shadow-lg p-4 w-fit relative left-1/2 right-1/2 -ml-16"
        onClick={() => getData()}
      >
        Fetch Random
      </button>
      <div className="grid grid-cols-2 w-1/2 gap-9 m-auto mt-10">
        {data.map((v, k) => {
          return (
            <ApiComp
              key={k}
              img={v.avatar}
              title={v.first_name}
              desc={v.last_name}
              more={v.email}
            />
          );
        })}
      </div>
    </div>
  );
}
export default WorkingApi;