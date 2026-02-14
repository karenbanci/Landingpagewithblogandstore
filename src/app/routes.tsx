import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Produtos } from "./pages/Produtos";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "produtos", Component: Produtos },
      { path: "login", Component: Login },
      { path: "admin", Component: Admin },
      { path: "*", Component: NotFound },
    ],
  },
]);