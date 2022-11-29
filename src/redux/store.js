import { configureStore } from "@reduxjs/toolkit";
import users from "./userSlice";

export const store = configureStore({
  reducer: {
    users
  }
})