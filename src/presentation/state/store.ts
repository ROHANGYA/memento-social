import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import homeReducer from "./home/homeSlice";

export const globalStore = configureStore({
  reducer: {
    login: loginReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;
