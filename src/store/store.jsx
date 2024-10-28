import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlistReducer from "./WishlistSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        wish: wishlistReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
