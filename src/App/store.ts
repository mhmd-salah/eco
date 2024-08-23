import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/products/CreateAsyncThunkEx";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

//types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppStore = typeof store;
