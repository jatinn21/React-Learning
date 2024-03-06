import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const [profile, setProfile] = useState("jatinn21");
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/jatinn21')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col gap-10">
      <p>
        Github Profile : <b>{profile.toLocaleLowerCase()}</b>
      </p>
      <p>
        Github followers: <b>{data.followers + 1000} People</b>
      </p>
      <img
        src={data.avatar_url}
        alt="Git picture"
        width={300}
        style={{ margin: "0rem auto" }}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/jatinn21");
  return response.json();
};
