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
const ProductCarts = lazy(() =>
  import("../Components/Layout/UserLayout/Pages/Carts/ProductCarts")
);
const Home = lazy(() =>
  import("../Components/Layout/UserLayout/Home/Home/Home")
);
const Products = lazy(() =>
  import("../Components/Layout/UserLayout/Pages/Product/Products")
);
const Category = lazy(() =>
  import("../Components/Layout/UserLayout/Home/Category/Category")
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
        path: "/carts",
        element: <ProductCarts/>,
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
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/product/category/:category",
        element: <Products />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

export default router;
