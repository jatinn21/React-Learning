import React from "react";
import Profile from "./Profile";

function App() {
  return (
    <div className="mb-16">
      <dh-component>
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <p className="text-gray-500 text-lg text-center font-normal pb-3">
              BUILDING TEAM
            </p>
            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              The Talented People Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10">
          <div className="container mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People "
              className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              {<Profile />}
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  );
}

export default App;
