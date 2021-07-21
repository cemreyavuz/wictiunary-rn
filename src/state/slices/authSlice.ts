import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthData } from '../../common/api/generated';
import { authApi } from '../../common/http/httpUtil';
import { AuthActionType } from '../types/actionTypes';

interface AuthState {
  isLoggedIn: boolean;
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
});

const { reducer } = authSlice;

export default reducer;
