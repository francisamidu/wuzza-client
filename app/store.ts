import {
  AnyAction,
  combineReducers,
  configureStore,
  Store,
} from "@reduxjs/toolkit";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksSlice } from "../reducers";
import { auth, tasks } from "../services";
import { authMiddleware } from "../services/auth.api";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  [tasksSlice.name]: tasksSlice.reducer,
  [auth.reducerPath]: auth.reducer,
  [tasks.reducerPath]: tasks.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store: Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
      thunk: true,
    }),
});
export const persistedStore = persistStore(store);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer & AnyAction>;
