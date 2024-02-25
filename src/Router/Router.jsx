import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Layout/UserLayout/Home/Home";
import Error from "../Components/Pages/ErrorPage/Error";

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
      ],
    },
  ]);

  export default router;