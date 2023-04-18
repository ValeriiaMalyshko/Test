import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    follow: "show all",
  },
  reducers: {
    update(state, action) {
      state.follow = action.payload;
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);

export const { update } = filterSlice.actions;
