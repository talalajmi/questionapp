import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contests from "./components/Contests/Contests";
import Home from "./components/Home/Home";
import Question from "./components/Question/Question";
import ThankYou from "./components/ThankYou/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/questions",
    element: <Question />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "/contests",
    element: <Contests />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
