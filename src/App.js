import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import List from "./pages/List";
import "./styles/App.css";
import React from "react";
import Single from "./pages/Single";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<List />} />,
      <Route path="/contacts/:id" element={<Single />} />,
      <Route path="/add" element={<Add />} />,
      <Route path="/edit/:id" element={<Edit />} />,
    ])
  );
  return <RouterProvider router={router} />;
};

export default App;
