import { configureStore } from "@reduxjs/toolkit";
import { Authentications } from "../Features/AuthenticationsSlice";


export const store = configureStore({
    reducer:{
        [Authentications.reducerPath]: Authentications.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(Authentications.middleware),
    
});