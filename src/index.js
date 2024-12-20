import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./landing page/landingPage";
import DerivPage from "./deriv page/derivCoursePage";
import SecocndDerivPage from "./deriv page/secondDerivCoursePage"
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path:"/deriv",
    element: <SecocndDerivPage />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
