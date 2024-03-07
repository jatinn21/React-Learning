import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <div className="h-max grid place-items-center bg-gray-900 font-mono  py-32">
      <div className="bg-white h-100 w-128 rounded-md">
        <div className="flex justify-center  items-center leading-none">
          <img
            src={data?.avatar_url}
            alt="pic"
            className="h-80 w-80
             rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
          />
        </div>
        <div className="p-3 align-middle">
          <p className="block mb-1 font-bold text-3xl text-center px-5">
            Profile : {data?.name}
          </p>
          <p className="block mb-1  text-1xl px-5">
            Location : <b>{data?.location}</b>
          </p>
          <p className="block mb-1  text-1xl  px-5">
            Followers : <b>{data?.followers}</b>
          </p>
          <p className="block mb-1  text-1xl  px-5">
            Following : <b>{data?.following}</b>
          </p>
          <p className="text-center m-5 target:">
            <Link
              target="_blank"
              to={`${data.html_url}`}
              className="bg-blue-900 w-max my-5 text-white-950 dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full py-3 px-7 text-center  font-medium text-white hover:bg-body-color hover:border-body-color"
            >
              Visit me
            </Link>
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
