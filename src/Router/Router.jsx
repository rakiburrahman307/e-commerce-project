import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Layout/UserLayout/Home/Home/Home";
import Error from "../Components/Pages/ErrorPage/Error";
import UserCarts from "../Components/Layout/UserLayout/Pages/UserCarts/UserCarts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <UserCarts />,
        },
        {
          path: "/cart",
          element: <UserCarts />,
        },
      ],
    },
  ]);

  export default router;