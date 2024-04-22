import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from "../Components/Features/Authentications/authApiSlice";
import productApiSlice from "../Components/Features/Product/productsApiSlice";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware
    ),
});
