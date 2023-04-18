import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistedReducer } from "./userSlise";

export const store = configureStore({
  reducer: {
    filter: persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
