import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routerPortefolio = createBrowserRouter([
  {
    path: "/Projet_12",
    element: <App />,
    children: [
      {
        path: "/Projet_12",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerPortefolio} />
  </React.StrictMode>
);
