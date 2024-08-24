import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "./features/products/ProductsSlice";

export const store = configureStore({
  reducer: {
    Products: productsApiSlice,
  },
});

//types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppStore = typeof store;
