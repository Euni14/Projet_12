import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

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
    <Provider store={store}>
      <RouterProvider router={routerPortefolio} />
    </Provider>
  </React.StrictMode>
);
