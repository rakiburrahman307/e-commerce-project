import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ContextPro from "./Components/ContextProviders/ContextPro.jsx";
import { Provider } from "react-redux";
import router from "./Router/Router.jsx";
import store from "./App/store.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextPro>
        <HelmetProvider>
          <RouterProvider
            router={router}
          />
        </HelmetProvider>
      </ContextPro>
    </Provider>
  </React.StrictMode>
);
