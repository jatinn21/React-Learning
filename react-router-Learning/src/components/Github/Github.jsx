import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // Way 1  : using useEffect hook
  //   const [data, setData] = useState(null);

  //   useEffect(function () {
  //     fetch("https://api.github.com/users/jatinn21")
  //       .then((resp) => resp.json())
  //       .then((data) => setData(data));
  //   }, []);

  //   console.log(data);

  //    Way 2
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="min-h-screen grid place-items-center bg-gray-900 font-mono  py-32">
      <div className="bg-white h-100 w-128 rounded-md">
        <div className="flex justify-center  items-center leading-none">
          <img
            src={`${data?.avatar_url}`}
            alt="pic"
            className="h-80 w-80
             rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
          />
        </div>
        <div className="p-3">
          <p className="block mb-1 font-bold text-3xl text-center px-5">
            Profile : {data?.name}
          </p>
          <p className="block mb-1  text-1xl px-5">
            Location : <b>{data?.location}</b>
          </p>
          <p className="block mb-1  text-1xl  px-5">
            Followers : <b>{data?.followers}</b>
          </p>{" "}
          <p className="block mb-1  text-1xl  px-5">
            Following : <b>{data?.following}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async function () {
  return fetch("https://api.github.com/users/jatinn21").then((response) =>
    response.json()
  );
};
