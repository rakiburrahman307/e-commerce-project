import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from "../Components/Features/Authentications/authApiSlice";
import productApiSlice from "../Components/Features/Product/productsApiSlice";
import reviewApiSlice from "../Components/Features/CustomerReview/reviewApiSlice";
import cartApiSlice from "../Components/Features/CartApiSlice/CartApiSlice";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [reviewApiSlice.reducerPath]: reviewApiSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware,
      reviewApiSlice.middleware,
      cartApiSlice.middleware
    ),
});
