import { put, takeLatest } from 'redux-saga/effects';
import api from './../../api';
import { AUTH_LOGIN } from './types';
import { loginSuccess, loginError } from './actions';

/**
 * Login
 */
function* login({ payload: { username, password } }) {
  try {
    const res = yield api.post(`login`, {
      username,
      password,
    });
    yield put(loginSuccess(res.data.token));
  } catch (error) {
    yield put(loginError(error));
  }
}

export function* watchLogin() {
  yield takeLatest(AUTH_LOGIN, login);
}
