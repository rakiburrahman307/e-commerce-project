import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Provider from './Components/ContextProviders/Provider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>

  </React.StrictMode>

)
