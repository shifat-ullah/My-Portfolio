import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import Experience from './../components/Experience';
import Skills from './../components/Skills';
import Projects from './../components/Projects';
import Contact from './../components/Contact';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);