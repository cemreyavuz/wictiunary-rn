import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthData } from '../../common/api/generated';
import { authApi } from '../../common/http/httpUtil';
import { AuthActionType } from '../types/actionTypes';

interface WictiunaryUser {
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user?: WictiunaryUser;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const login = createAsyncThunk(AuthActionType.Login, (data: AuthData) =>
  authApi.login(data),
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { data } = action.payload;
      const { email } = data;
      state.user = { email };
      state.isLoggedIn = true;
    });
  },
});

const { reducer } = authSlice;

export default reducer;
