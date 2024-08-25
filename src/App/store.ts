import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "./features/products/ProductsSlice";
import { postsApiSlice } from "./features/posts/PostsSlice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [postsApiSlice.reducerPath]:postsApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApiSlice.middleware).concat(postsApiSlice.middleware),
});

//types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppStore = typeof store;
