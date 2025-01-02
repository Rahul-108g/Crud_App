import { configureStore } from "@reduxjs/toolkit";
import userDtailReducer from "../Feature/UserDetailSlice";

export const Store = configureStore({
  reducer: {
    app: userDtailReducer,
  },
});
