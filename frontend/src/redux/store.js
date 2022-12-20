import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./ConfigureStore.user.js";

const reducers = combineReducers({
  userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedStoreReducer = persistReducer(persistConfig, reducers);
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    persistedStore: persistedStoreReducer,
  },
  middleware: customizedMiddleware,
});

export default store;
