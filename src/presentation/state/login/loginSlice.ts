import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FailureEntity from "../../../domain/entities/failureEntity";

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
    loginLoading: (state) => {
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
    resetState: (state) => initialState,
  },
});

export const loginUser = createAsyncThunk<void>(
  "loginSlice",
  async (_, thunk) => {
    thunk.dispatch(loginSlice.actions.loginLoading());

    // repository or use-case call.
    const result = await new Promise((resolve) => setTimeout(resolve, 2000));

    if (result instanceof FailureEntity) {
      thunk.dispatch(loginSlice.actions.loginFailure("test"));
    } else {
      thunk.dispatch(loginSlice.actions.loginSuccess());
    }
  }
);

export const { resetState } = loginSlice.actions;

export default loginSlice.reducer;
