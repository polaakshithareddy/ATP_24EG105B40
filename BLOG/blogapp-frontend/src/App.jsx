import { createBrowserRouter, RouterProvider } from "react-router";
import Rootcomponent from "./components/Rootcomponent";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import Author from "./components/Author";
import Admin from "./components/Admin";
import AuthorArticles from "./components/Authorarticle";
import EditArticle from './components/Editarticle'
import WriteArticles from "./components/Writearticle";
import ArticleByID from "./components/Articlebyid";
import {Toaster} from "react-hot-toast";
import unauthorized from "./components/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <Rootcomponent />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user-profile",
          element: <User />,
        },
        {
          path: "author-profile",
          element: <Author />,

          children: [
            {
              index: true,
              element: <AuthorArticles />,
            },
            {
              path: "articles",
              element: <AuthorArticles />,
            },
            {
              path: "write-article",
              element: <WriteArticles />,
            },
          ],
        },
        {
          path: "article/:id",
          element: <ArticleByID />,
        },
        {
          path: "admin-profile",
          element: <Admin />,
        },
        {
          path: "edit-article",
          element: <EditArticle />,
        },
      ],
    },
  ]);

  return(
    <div>
    <Toaster position="top-center" reverseOrder = {false}/>
   <RouterProvider router={routerObj} />
  </div>
  );
}

export default App;
