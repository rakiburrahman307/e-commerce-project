import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from '../Features/Authentications/authApiSlice'




export const store = configureStore({
    reducer:{
        [authApiSlice.reducerPath]: authApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApiSlice.middleware),
    
});