import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";

export const globalStore = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;
