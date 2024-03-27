import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ContextPro from "./Components/ContextProviders/ContextPro.jsx";
import { Provider } from "react-redux";
import { store } from "./App/store.js";
import router from "./Router/Router.jsx";
import BigSpinner from "./Components/Layout/Reuseable/BigSpinner/BigSpinner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextPro>
        <HelmetProvider>
          <RouterProvider
            router={router}
            fallbackElement={<BigSpinner />}
            future={{ v7_startTransition: true }}
          />
        </HelmetProvider>
      </ContextPro>
    </Provider>
  </React.StrictMode>
);
