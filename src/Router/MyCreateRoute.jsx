import React from "react";
import Layout from "../Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddTask from "../Components/AddTask/AddTask";
import TaskManagement from "../Components/taskManagement/taskManagement";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import UpdateTask from "../Components/UpdateTask/UpdateTask";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const MyCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "addTask",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "updateTask/id/:id",
        element: (
          <PrivateRoute>
            <UpdateTask />,
          </PrivateRoute>
        ),
      },
      {
        path: "taskManagement",
        element: (
          <PrivateRoute>
            <TaskManagement />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MyCreateRoute;
