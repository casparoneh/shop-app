"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userReducer from "./user/userSlice";
import productReducer from "./product/productSlice";

// Create web storage
const storage = createWebStorage('local'); // You can specify 'session' or 'local' as needed

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Create the Redux persistor
export const persistor = persistStore(store);
