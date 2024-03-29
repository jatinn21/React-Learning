import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Error404Page from "./components/Error404Page/Error404Page.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<Home />}>
      <Route path="*" element={<Error404Page />} />
      <Route path="" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        // Way 1
        // loader={() =>
        //   fetch("https://api.github.com/users/jatinn21").then((response) =>
        //     response.json()
        //   )
        // }

        // Way 2
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
