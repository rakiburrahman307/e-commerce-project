import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy } from "react";
const ProductDetail = lazy(() =>
  import("../Components/Layout/UserLayout/Pages/ProductDetail/ProductDetail")
);
const Login = lazy(() =>
  import("../Components/Layout/UserLayout/Pages/Login/Login")
);
const Register = lazy(() =>
  import("../Components/Layout/UserLayout/Pages/Register/Register")
);
const UserCarts = lazy(() =>
  import("../Components/Layout/UserLayout/Pages/UserCarts/UserCarts")
);
const Home = lazy(() =>
  import("../Components/Layout/UserLayout/Home/Home/Home")
);

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
