import { createHashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Produtos } from "./pages/Produtos";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "produtos", Component: Produtos },
      { path: "sobre", Component: About },
      { path: "login", Component: Login },
      { path: "admin", Component: Admin },
      { path: "*", Component: NotFound },
    ],
  },
]);
