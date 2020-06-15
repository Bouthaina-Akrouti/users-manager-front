import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_SET_LOGGEDIN,
} from './types';
import { isValidToken } from '../../utils/jwt-utils';

const token = localStorage.getItem('token');
const isValid = isValidToken(token);

const initialState = {
  isLoggedIn: isValid,
  token: isValid ? token : null,
  isLoading: false,
  errors: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, isLoading: true, errors: null };

    case AUTH_LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: action.payload };

    case AUTH_LOGIN_ERROR:
      return { ...state, isLoading: false, errors: action.payload };

    case AUTH_SET_LOGGEDIN:
      return { ...state, isLoggedIn: action.payload };
  
    default:
      return state;
  }
}