import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_SET_LOGGEDIN,
} from './types';

export const login = (credentials) => ({
  type: AUTH_LOGIN,
  payload: credentials,
});

export const loginSuccess = (token) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: token,
});

export const loginError = (error) => ({
  type: AUTH_LOGIN_ERROR,
  payload: error,
});

export const setLoggedIn = (isLoggedIn) => ({
  type: AUTH_SET_LOGGEDIN,
  payload: isLoggedIn,
})
