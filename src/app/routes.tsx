import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
    ],
  },
]);
