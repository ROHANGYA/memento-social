import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  status: LoginStatus;
  error: string | null;
}

export enum LoginStatus {
  LoginStart,
  LoginLoading,
  LoginLoadingFailed,
  LoginSuccess,
}

const initialState: LoginState = {
  status: LoginStatus.LoginStart,
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<number>) => {
      state.status = LoginStatus.LoginLoading;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.status = LoginStatus.LoginSuccess;
      state.error = null;
    },
    loginFailure: (state, error: PayloadAction<string>) => {
      state.status = LoginStatus.LoginLoadingFailed;
      state.error = error.payload;
    },
  },
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;
